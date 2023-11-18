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

router.get('/accepted-bids', async (req, res) => {
    try {
      const { rows } = await pool.query(`
        SELECT
          dr.id AS delivery_request_id,
          dr.pickup_location,
          dr.dropoff_location,
          dr.price_offer
        FROM
          delivery_requests dr
        JOIN
          winning_bids wb ON dr.id = wb.delivery_request_id
        JOIN
          bids b ON wb.bid_id = b.id
        JOIN
          drivers d ON b.driver_id = d.id
        WHERE
          b.status = 'Sold' AND d.id = 1;
      `);
      console.log(rows)
      res.json(rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;