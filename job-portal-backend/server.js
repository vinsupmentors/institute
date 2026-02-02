// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
const PORT = process.env.PORT || 5000;
const MSG_AUTH = process.env.MSG91_AUTHKEY;

// --- Connect to MySQL ---
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ MySQL connected successfully!');
  }
});

// -------------------- ROUTES --------------------

// 1️⃣ Send OTP
app.post('/api/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone || !/^\d{10}$/.test(phone))
      return res.status(400).json({ success: false, message: 'Invalid phone number' });

    const url = `https://api.msg91.com/api/sendotp.php?authkey=${encodeURIComponent(MSG_AUTH)}&mobile=91${phone}&otp_length=6&otp_expiry=5`;
    const response = await axios.get(url);

    return res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('send-otp error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

// 2️⃣ Verify OTP
app.post('/api/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp)
      return res.status(400).json({ success: false, message: 'Phone and OTP required' });

    const url = `https://control.msg91.com/api/v5/otp/verify?mobile=91${phone}&otp=${encodeURIComponent(otp)}`;
    const response = await axios.get(url, {
      headers: { authkey: MSG_AUTH },
    });

    if (
      response.data &&
      (response.data.type === 'success' ||
        response.data.type === 'verified' ||
        response.data.status === 'success')
    ) {
      res.json({ success: true, data: response.data });
    } else {
      res.status(400).json({ success: false, message: 'OTP verification failed' });
    }
  } catch (error) {
    console.error('verify-otp error:', error.message);
    res.status(400).json({ success: false, message: 'OTP verification failed' });
  }
});

// 3️⃣ Register student (store details in MySQL)
app.post('/api/register', (req, res) => {
  const { name, email, phone, degree, position, domain } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const sql = `
    INSERT INTO registrations (name, email, phone, degree, position, domain)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, degree, position, domain], (err, result) => {
    if (err) {
      console.error('Database insert error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Registration successful', data: result });
  });
});

// ------------------------------------------------

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
