
import express from 'express';
import { register } from '../programlogic/authen.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// ✅ register.html serve
router.get('/register', (req, res) => {
 // res.sendFile(path.join(__dirname, '..', 'frontend', 'register.html'));
 router.get('/register', (req, res) => {
  const filePath = path.join(__dirname, '..', 'frontend', 'register.html');
  console.log("Trying to serve:", filePath);  // Add this for debugging
  res.sendFile(filePath);
});


});

// ✅ form submit
router.post('/register', register);

export default router;
