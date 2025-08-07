const axios = require("axios");

async function generateEmail(prompt) {
  // Fallback if API key is missing
  if (!process.env.OPENAI_API_KEY) {
    return `Dear Sir/Madam,\n\nThis is a mock email generated for the prompt: "${prompt}".\n\nRegards`;
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a professional email writer." },
          {
            role: "user",
            content: `Write a professional email for the following context: ${prompt}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("OpenAI API call failed:", error.message);

    // Return mock response in case of API failure (e.g. 429)
    return `Dear Sir/Madam,\n\nThis is a fallback email because the AI API is unavailable. Here is a sample email for your prompt:\n\n"${prompt}"\n\nBest regards`;
  }
}

module.exports = { generateEmail };
