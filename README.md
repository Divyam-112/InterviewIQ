# InterviewIQ.AI

InterviewIQ.AI is an intelligent, AI-powered mock interview platform designed to help users prepare for their job interviews. It simulates real interview environments, analyzes spoken answers using AI, provides detailed feedback, and allows users to track their progress over time.

## Key Features

- **AI Smart Interviews:** Simulates a real interview with voice and text capabilities.
- **Voice Recognition & Speech:** Speak your answers directly into the mic, and the AI speaks back to you.
- **Detailed Performance Reports:** Get comprehensive feedback, skill analysis, and PDF report generation.
- **Interview History:** Track your past interviews and see your improvement over time.
- **Secure Authentication:** Seamless login with Google using Firebase Auth.
- **Credit System & Payments:** Integrated with Razorpay to purchase interview credits (Free, Starter, and Pro packs).
- **Modern UI/UX:** Built with Tailwind CSS and Framer Motion for a sleek, responsive, and animated user experience.

## Tech Stack

**Frontend:**

- React 19 (via Vite)
- Redux Toolkit (State Management)
- Tailwind CSS v4 (Styling)
- Framer Motion (Animations)
- Firebase (Google Authentication)
- Recharts (Data Visualization)
- jsPDF (Report Generation)

**Backend:**

- Node.js & Express.js
- MongoDB & Mongoose (Database)
- JWT (Session Management)
- Razorpay (Payment Gateway)
- OpenRouter API (AI Engine)
- Multer & pdfjs-dist (Resume parsing)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/InterviewIQ.git
cd InterviewIQ
```

### 2. Environment Variables

You need to set up `.env` files in both the `client` and `server` directories.

**Client (`client/.env`):**

```env
VITE_SERVER_URL="http://localhost:8000"
VITE_FIREBASE_APIKEY="your_firebase_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_firebase_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_firebase_app_id"
VITE_RAZORPAY_KEY_ID="your_razorpay_key_id"
```

**Server (`server/.env`):**

```env
PORT=8000
MONGODB_URL="your_mongodb_connection_string"
NODE_ENV="development"
JWT_SECRET="your_jwt_secret"
ALLOWED_ORIGIN="http://localhost:5173"
OPENROUTER_API_KEY="your_openrouter_api_key"
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"
```

### 3. Install Dependencies & Run

Open two terminal windows.

**Terminal 1 (Backend):**

```bash
cd server
npm install
npm run dev
```

_The server will start on `http://localhost:8000`_

**Terminal 2 (Frontend):**

```bash
cd client
npm install
npm run dev
```

_The frontend will start on `http://localhost:5173` or `5174`_

## Testing Payments (Razorpay)

The project is currently configured in **Test Mode**. To test the payment integration:

1. Select a plan and proceed to pay.
2. Choose **Netbanking** or **UPI** (e.g., enter `success@razorpay` as UPI ID) for instant test success.
3. International cards are not supported in Razorpay test mode. Use Indian test card details if required.

## Project Structure

```
InterviewIQ/
├── client/                 # React Frontend
│   ├── public/             # Static assets (AI videos, icons)
│   ├── src/
│   │   ├── assets/         # Images
│   │   ├── components/     # Reusable UI components (Navbar, Step1, Step2, etc.)
│   │   ├── pages/          # Main application pages (Home, Interview, Pricing, etc.)
│   │   ├── redux/          # Redux store and slices
│   │   └── utils/          # Firebase config and utilities
│   └── vite.config.js      # Vite configuration
│
└── server/                 # Node.js Backend
    ├── config/             # DB & Token configuration
    ├── controllers/        # Business logic (Auth, Interview, Payment, User)
    ├── middlewares/        # Authentication & Route protection
    ├── models/             # Mongoose schemas
    ├── routes/             # API Endpoints
    └── services/           # Razorpay & other 3rd party services
```

---

_Built for better interview preparation._
