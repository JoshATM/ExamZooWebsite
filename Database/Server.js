// Importing Modules
import express from "express"
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

// Front-end Server Port
const frontend = "http://localhost:5173"

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: frontend,
    credentials: true,
  })
)

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Turkish-snooze-tumbrel-reagent-aster-photo-hecatomb-impure-sedate",
  database: "rza_db",
})


// Whether or not the database has been connected to successfully
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database");
})


// Server Running on Port
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})




// Table for Users
const usersTable = `
  CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255)
  )
`;

db.query(usersTable, (err) => {
  if (err) throw err;
  console.log('Users table created');
});



// Sign Up
app.post("/register", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const query =
    "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    db.query(
    query,
    [firstname, lastname, email, password],
    (err) => {
      if (err) {
        console.error("Error registering user: " + err.stack);
        res.status(500).send("Error registering user");
        return;
      }

      res.status(200).send("User registered successfully");
    }
  )
})

// Log In
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error logging in: " + err.stack);
      res.status(500).send("Error logging in");
      return;
    }

    if (results.length === 0) {
      res.status(401).send("Invalid email or password");
      return;
    }

    res.status(200).send("Login successful");
  })
})




// Sign Up email validation
app.get("/check-email/:email", (req, res) => {
  const { email } = req.params;
  const query = "SELECT * FROM Users WHERE Email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error checking email: " + err.stack);
      res.status(500).send("Error checking email");
      return;
    }

    const emailExists = results.length > 0;
    res.json(emailExists);
  })
})






// Incomplete Dashboard

// Would get the users name and email if finished
app.get("/users", (res) => {
  const query = "SELECT * FROM Users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users: " + err.stack);
      res.status(500).send("Error fetching users");
      return;
    }

    res.json(results);
  })
})




// Would get the users reservations if finished
app.get("/reservations", (res) => {
  const query = "SELECT * FROM HotelReservations";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching hotel reservations: " + err.stack);
      res.status(500).send("Error fetching hotel reservations");
      return;
    }

    res.json(results);
  })
})




// Would get the users bookings if finished
app.get("/bookings", (res) => {
  const query = "SELECT * FROM Bookings";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching bookings: " + err.stack);
      res.status(500).send("Error fetching bookings");
      return;
    }

    res.json(results);
  })
})











// Creates a Table for Bookings
const ticketBookingsTable = `
CREATE TABLE IF NOT EXISTS TicketBookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  UserId INT,
  TimePurchased DATETIME,
  Adults INT,
  Seniors INT,
  Children INT,
  Price DECIMAL(10, 2),
  FOREIGN KEY (UserId) REFERENCES Users(id)
)
`;

db.query(ticketBookingsTable, (err) => {
  if (err) throw err;
  console.log('TicketBookings table created');
});



// Creates a Table for Reservations
const hotelBookingsTable = `
CREATE TABLE IF NOT EXISTS HotelBookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  UserId INT,
  Rooms INT,
  NumPeople INT,
  Price DECIMAL(10, 2),
  FOREIGN KEY (UserId) REFERENCES Users(id)
)
`;

db.query(hotelBookingsTable, (err) => {
  if (err) throw err;
  console.log('HotelBookings table created');
});

