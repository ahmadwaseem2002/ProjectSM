import { Database } from "../Connection.js"; // Import the Database connection file from Connection.js
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import jsonwebtoken for creating tokens


const db = Database(); // Create a new instance of the Database

    const register = (req, res) => {

        const q = "SELECT * FROM userdetails WHERE username=?";
        db.query(q, [req.body.username], (err, data) => {
            if (err) throw err; // If there is an error, throw it
            if (data.length) return res.status(409).json("User already exists!"); // If the user already exists, return a 409 status code with a message

            // To make the password more secure, we use bcrypt to hash the password
            const salt = 10; // Define the salt rounds for bcrypt
            const hashedpassword = bcrypt.hashSync(req.body.password, salt); // Hash the password with a salt rounds of 10

            const q = "INSERT INTO userdetails(`Userid`,`password`,`Emailid`,`Name`) VALUES (?)"; // SQL query to insert a new user into the database
            const values = [
                req.body.Userid,
                hashedpassword,
                req.body.Emailid,
                req.body.Name
            ]; // Values to be inserted into the database

            db.query(q, [values], (err, data) => { // Execute the SQL query
                if (err) throw err; // If there is an error, throw it
                return res.status(200).json("User has been created!"); // Return a 200 status code with a success message
            });
        });
    };
        