import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [recipients, setRecipients] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:5000/api/generate", {
      prompt,
    });
    setEmail(res.data.email);
  };

  const handleSend = async () => {
    try {
      await axios.post("http://localhost:5000/api/send", {
        recipients,
        prompt,
      });
      alert("Email Sent!");

      // Clear all input fields for next entry
      setRecipients("");
      setPrompt("");
      setEmail("");
    } catch (error) {
      alert("Failed to send email.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>AI Email Generator</h2>
      <input
        type="text"
        placeholder="Recipients (comma separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <br />
      <br />
      <textarea
        placeholder="Prompt for email"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleGenerate}>Generate Email</button>
      <br />
      <br />
      <textarea
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rows="10"
        cols="50"
      />
      <br />
      <br />
      <button onClick={handleSend}>Send Email</button>
    </div>
  );
}

export default App;
