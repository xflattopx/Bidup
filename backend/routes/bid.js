const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Pool } = require('pg');
const cron = require('node-cron');

// Connect to PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

router.use(cors());

// API endpoint to record bids
router.post('/record-bid', async (req,res,next) => {
    const { deliveryRequestId, driverId, bidPrice } = req.body;
    console.log(deliveryRequestId)
    try {
      // Step 1: Update bid_end_time in delivery_requests
      const bidEndTimeUpdateQuery = `
        UPDATE delivery_requests
        SET bid_end_time = CURRENT_TIMESTAMP + INTERVAL '5 minutes'
        WHERE id = $1
        RETURNING id;
      `;
  
      const bidEndTimeUpdateResult = await pool.query(bidEndTimeUpdateQuery, [deliveryRequestId]);
      console.log(bidEndTimeUpdateQuery)
      // Check if the bid_end_time was updated successfully
      if (bidEndTimeUpdateResult.rowCount === 0) {
        return res.status(404).json({ success: false, message: 'Delivery request not found.' });
      }
  
      const requestId = bidEndTimeUpdateResult.rows[0].id;
  
      // Step 2: Insert the bid into the bids table
      const insertBidQuery = `
        INSERT INTO bids (driver_id, delivery_request_id, bid_price, status)
        VALUES ($1, $2, $3, 'Pending')
        RETURNING id;
      `;
  
      const insertBidResult = await pool.query(insertBidQuery, [driverId, deliveryRequestId, bidPrice]);
      console.log(insertBidQuery);
      // Check if the bid was inserted successfully
      if (insertBidResult.rowCount === 0) {
        return res.status(500).json({ success: false, message: 'Error recording bid.' });
      }
  
      // Respond with success
      res.json({ success: true, message: 'Bid recorded successfully.', requestId: requestId });
    } catch (error) {
      console.error('Error recording bid:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

  // API endpoint to record the winning bid
router.post('/record-winning-bid', async (req, res) => {
    const { bidId } = req.body;
  
    try {
      // Update the status in the bids table to "Sold"
      const updateBidStatusQuery = `
        UPDATE bids
        SET status = 'Sold'
        WHERE id = $1
        RETURNING delivery_request_id;
      `;
  
      const updateBidStatusResult = await pool.query(updateBidStatusQuery, [bidId]);
  
      // Check if the bid status was updated successfully
      if (updateBidStatusResult.rowCount === 0) {
        return res.status(404).json({ success: false, message: 'Bid not found.' });
      }
  
      const deliveryRequestId = updateBidStatusResult.rows[0].delivery_request_id;
  
      // Update the status in the delivery_requests table to "Sold"
      const updateDeliveryRequestStatusQuery = `
        UPDATE delivery_requests
        SET status = 'Sold'
        WHERE id = $1;
      `;
  
      await pool.query(updateDeliveryRequestStatusQuery, [deliveryRequestId]);
  
      // Respond with success
      res.json({ success: true, message: 'Winning bid recorded successfully.' });
    } catch (error) {
      console.error('Error recording winning bid:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

  // Schedule a task to check bids every minute
cron.schedule('* * * * *', async () => {
  try {
    // Get the bids that are still pending and their bid end times are in the past
    const checkBidsQuery = `
      UPDATE bids
      SET status = 'Sold'
      FROM delivery_requests
      WHERE bids.status = 'Pending'
        AND bids.bid_time + interval '5 minutes' <= CURRENT_TIMESTAMP
        AND bids.delivery_request_id = delivery_requests.id
        AND delivery_requests.status = 'Pending';
    `;
    console.log(checkBidsQuery);
    const result = await pool.query(checkBidsQuery);

    if (result.rowCount > 0) {
      console.log('Updated bids with status "Sold"');
    }
  } catch (error) {
    console.error('Error checking bids:', error);
  }
});

  module.exports = router;