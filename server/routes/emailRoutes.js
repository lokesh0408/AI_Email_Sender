const express = require("express");
const router = express.Router();
const { generateEmail } = require("../utils/openai");
const { sendEmail } = require("../utils/mailer");

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await generateEmail(prompt);
    res.json({ email: response });
  } catch (err) {
    console.error("Error in /generate route:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.post("/send", async (req, res) => {
  const { recipients, prompt } = req.body;
  try {
    const generatedEmail = await generateEmail(prompt);

    const subject = "AI-Generated Email";
    const body = generatedEmail;

    await sendEmail(recipients, subject, body);

    res.json({ success: true });
  } catch (err) {
    console.error("Error in /send route:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
