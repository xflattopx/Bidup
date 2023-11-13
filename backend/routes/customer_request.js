var express = require('express');
var router = express.Router();
var { Client } = require('pg');
const bodyParser = require('body-parser');


// Connect to PostgreSQL database
var db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

db.connect();

router.post('/', async function (req, res, next) {
  // Retrieve data from the request body
  console.log('HERE -> Received POST request to /customer_request');
  var requestData = req.body;
  console.log(requestData)


  // Validate the required fields
  if (!requestData.pickupLocation || !requestData.dropOffLocation || !requestData.description || !requestData.preferredDeliveryTime || requestData.priceOffer === undefined) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  // SQL to store data in the 'requests' table
  var insertQuery = `
  INSERT INTO delivery_requests (pickup_location, dropoff_location, description, preferred_delivery_time, price_offer, status)
    VALUES ($1, $2, $3, $4, $5, 'Pending')
    RETURNING id
  `;

  console.log(insertQuery);

  try {
      // Execute the SQL query
      const result = await db.query(insertQuery, [
          requestData.pickupLocation,
          requestData.dropOffLocation,
          requestData.description,
          requestData.preferredDeliveryTime,
          requestData.priceOffer,
      ]);


      // Get the ID of the inserted row
      const requestId = result.rows[0].id;
      console.log('Data stored successfully. Request ID:', requestId);

      // Respond with the inserted data
      return req.body;
  } catch (err) {
      console.error('Error storing data:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// Route to retrieve all pending rows
router.get('/pending', async function (req, res, next) {
  try {
    // Query to retrieve all rows where status is "pending"
    const query = 'SELECT id, pickup_location, dropoff_location, description, preferred_delivery_time, price_offer FROM delivery_requests WHERE status = $1';
    
    // Execute the query
    const result = await db.query(query, ['Pending']);

    // Send the result as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving pending rows:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;