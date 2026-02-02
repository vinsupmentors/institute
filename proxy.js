// proxy.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Render-compatible port
const PORT = process.env.PORT || 3000;

// ✅ Google Apps Script Web App URL
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyDSKPUpL-31X6J_NfpBEPmyK0vSW9pIoPEAKvB_uB78-_oGmEolvQjZkMuoGdZkCdn/exec";

// ⚠️ SECURITY NOTE (we'll move this to ENV later)
const SECRET_KEY = "vinsup_2025_secure_key";

// POST route
app.post("/api/proxy", async (req, res) => {
  try {
    console.log("Proxy received POST → forwarding to Google Apps Script");

    if (req.body.secret !== SECRET_KEY) {
      return res.status(403).json({ ok: false, message: "Invalid secret key" });
    }

    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy running on port ${PORT}`);
});
