# Labrador
An app that allows users to label images and packages them into containers of data for feeding into CV models.


***file structure***:

project-root/
├── mobile-app/ (React Native or Swift)
│   ├── components/
│   ├── screens/
│   ├── api/
│   └── utils/
├── backend/
│   ├── express-api/
│   ├── routes/
│   └── services/
├── ml-services/
│   ├── text-parser/ (FastAPI)
│   └── label-scorer/ (FastAPI or Flask)
├── database/
│   ├── schema.sql
├── storage/
│   └── (images/videos/uploads)


***stack***: (Undecided)

| Layer                | Stack                                                       |
| -------------------- | ----------------------------------------------------------- |
| **Frontend**         | React Native (mobile, cross-platform) or SwiftUI (iOS only) |
| **Web Panel**        | React (optional admin dashboard)                            |
| **Backend API**      | Node.js with Express.js                                     |
| **ML Microservices** | Python + FastAPI (for NLP + accuracy scoring)               |
| **Database**         | PostgreSQL (via Supabase or Railway) or Firebase            |
| **Auth**             | Firebase Auth                  |
| **Storage**          | Firebase Storage / AWS S3 for storing labeled images/videos |
| **Deployment**       | Railway / Render / Vercel for backend + Python ML API       |
| **CI/CD**            | GitHub Actions + TestFlight (iOS)                           |



