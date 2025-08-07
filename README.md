# AI Email Generator – Full Stack App using OpenAI & NodeMailer
### This is a full-stack AI-powered email sender app built with React, Node.js, OpenAI API, and NodeMailer. The user provides recipients and a prompt, and the app generates a professional email using OpenAI and sends it via Gmail.

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js + Express.js
- AI Provider: OpenAI API (GPT-based)
- Email Delivery: NodeMailer using Gmail App Password

## Features
- Input recipient email(s) and a custom prompt
- Generate a professional email from the prompt using OpenAI
- Edit the generated email before sending
- Send email using Gmail via NodeMailer

## Project Structure
```
client # React frontend
server # Express backend
```

## Setup Instructions
Step 1: OpenAI & Gmail Credentials

- Get OpenAI API Key
  - Go to https://platform.openai.com/account/api-keys
  - Click “Create new secret key” and copy it

- Generate Gmail App Password
  - Go to https://myaccount.google.com/apppasswords
  - Select app: "Mail", and device: any
  - Copy the 16-digit app password

Step 2: Create .env in /server

```
cd server
touch .env
```
- Add the following:
```
OPENAI_API_KEY=sk-xxxxx_your_openai_key_here
EMAIL=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password
```
⚠️ Use Gmail App Password, not your regular password

Step 3: Backend Setup
```
cd server
npm install
node index.js
```
Backend runs on port 5000 by default.

Step 4: Frontend Setup
```
cd client
npm install
npm run dev
```
Frontend runs on http://localhost:5173

## Security Notes
- DO NOT push .env files or hardcoded secrets to GitHub
- This app uses OpenAI's paid API — configure billing if running in production
- App Passwords are safer than Gmail regular passwords

## Author
- Name: Lokesh Kumar
- Email: lokeshjindal997@gmail.com
- Phone: +91 8708843664
- GitHub: https://github.com/lokesh0408

## License
This project is for educational/demonstration purposes only. Commercial use not intended without permission.
