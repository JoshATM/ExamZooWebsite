// Importing Modules
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection } from "mysql";

// Front-end Server Port
const frontend = "http://localhost:5173";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: frontend,
    credentials: true,
  })
);

// Database Connection
const db = createConnection({
  user: "root",
  host: "localhost",
  database: "zoo_database",
  password: "superSecretPassword",
  port: 5000,
});

// Whether or not the database has been connected to successfully
db.connect((err, client, done) => {
  if (err) throw err;
  client.query("SELECT * FROM your_table", (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  });
});

// Server Running on Port
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Table for Users
const usersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
  )
`;

db.query(usersTable, (err) => {
  if (err) throw err;
  console.log("Users table created");
});

// Sign Up
app.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const query =
    "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)";
  db.query(query, [firstname, lastname, email, password], (err) => {
    if (err) {
      console.error("Error registering user: " + err.stack);
      res.status(500).send("Error registering user");
      return;
    }

    res.status(200).send("User registered successfully");
  });
});

// Log In
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error logging in: " + err.stack);
      res.status(500).send("Error logging in");
      return;
    }

    if (results.rows.length === 0) {
      res.status(401).send("Invalid email or password");
      return;
    }

    res.status(200).send("Login successful");
  });
});

// Sign Up email validation
app.get("/check-email/:email", (req, res) => {
  const { email } = req.params;
  const query = "SELECT * FROM users WHERE email = $1";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error checking email: " + err.stack);
      res.status(500).send("Error checking email");
      return;
    }

    const emailExists = results.rows.length > 0;
    res.json(emailExists);
  });
});

// Incomplete Dashboard

// Would get the users name and email if finished
app.get("/users", (_, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }

    res.json(results.rows);
  });
});

// Would get the users reservations if finished
app.get("/reservations", (_, res) => {
  const query = "SELECT * FROM hotel_reservations";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching hotel reservations: " + err.stack);
      res.status(500).send("Error fetching hotel reservations");
      return;
    }

    res.json(results.rows);
  });
});

// Would get the users bookings if finished
app.get("/bookings", (_, res) => {
  const query = "SELECT * FROM bookings";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching bookings: " + err.stack);
      res.status(500).send("Error fetching bookings");
      return;
    }

    res.json(results.rows);
  });
});

// Creates a Table for Bookings
const ticketBookingsTable = `
CREATE TABLE IF NOT EXISTS ticket_bookings (
  id SERIAL PRIMARY KEY,
  user_id INT,
  time_purchased TIMESTAMP,
  adults INT,
  seniors INT,
  children INT,
  price DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
)
`;

db.query(ticketBookingsTable, (err) => {
  if (err) throw err;
  console.log("TicketBookings table created");
});

// Creates a Table for Reservations
const hotelBookingsTable = `
CREATE TABLE IF NOT EXISTS hotel_bookings (
  id SERIAL PRIMARY KEY,
  user_id INT,
  rooms INT,
  num_people INT,
  price DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
)
`;

db.query(hotelBookingsTable, (err) => {
  if (err) throw err;
  console.log("HotelBookings table created");
});
