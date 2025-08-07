AI Email Generator – Full Stack App using OpenAI & NodeMailer
This is a full-stack AI-powered email sender app built with React, Node.js, OpenAI API, and NodeMailer. The user provides recipients and a prompt, and the app generates a professional email using OpenAI and sends it via Gmail.

Tech Stack

1. Frontend: React (Vite)
2. Backend: Node.js + Express.js
3. AI Provider: OpenAI API (GPT-based)
4. Email Delivery: NodeMailer using Gmail App Password

Features

1. Input recipient email(s) and a custom prompt
2. Generate a professional email from the prompt using OpenAI
3. Edit the generated email before sending
4. Send email using Gmail via NodeMailer

Project Structure
/
├── client # React frontend
└── server # Express backend

Setup Instructions
Step 1: OpenAI & Gmail Credentials

1. Get OpenAI API Key
   a) Go to https://platform.openai.com/account/api-keys
   b) Click “Create new secret key” and copy it

2. Generate Gmail App Password
   a) Go to https://myaccount.google.com/apppasswords
   b) Select app: "Mail", and device: any
   c) Copy the 16-digit app password

Step 2: Create .env in /server

```
cd server
touch .env
```

Add the following:

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

Security Notes

1. DO NOT push .env files or hardcoded secrets to GitHub
2. This app uses OpenAI's paid API — configure billing if running in production
3. App Passwords are safer than Gmail regular passwords

Author
Name: Lokesh Kumar
Email: lokeshjindal997@gmail.com
Phone: +91 8708843664
GitHub: https://github.com/lokesh0408

License
This project is for educational/demonstration purposes only. Commercial use not intended without permission.
