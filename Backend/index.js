import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url'; // Importing the fileURLToPath function from the 'url' module

import authroutes from './routes/authroutes.js'; // Importing authentication routes




//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// ✅ static files (css, js)
 app.use(express.static(path.join(__dirname, '..', 'frontend')));





 
app.use('/api/auth', authroutes); // Using the authentication routes for the '/api/auth' endpoint
 






app.listen(8000, () => { // Start the server on port 8800
    console.log("Connected to backend!"); // Log a message indicating that the server is running
});
//importing routes
