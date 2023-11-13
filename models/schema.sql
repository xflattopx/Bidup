CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'customer' or 'driver'
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE, -- Foreign key referencing the users table
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE, -- Foreign key referencing the users table
  driver_license VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE delivery_requests (
  id SERIAL PRIMARY KEY,
  pickup_location VARCHAR(255) NOT NULL,
  dropoff_location VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  preferred_delivery_time TIMESTAMPTZ NOT NULL,
  price_offer NUMERIC DEFAULT 0,
  status VARCHAR(50) DEFAULT 'Pending',
  customer_id INT, -- Foreign key referencing the customers table
  driver_id INT, -- Foreign key referencing the drivers table
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (driver_id) REFERENCES drivers(id)
);
