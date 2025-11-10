# Labrador
An app that allows users to label images and packages them into containers of data for feeding into CV models.

***Backend file structure***:
project_root/
├── backend/
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── annotationController.js
│   │   ├── authController.js
│   │   ├── cashierController.js
│   │   ├── imageController.js
│   │   ├── managerController.js
│   │   ├── organizationControllers.js
│   │   ├── userController.js
│   │   └── verificationController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── roles.js
│   │   └── validation.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── image.js
│   │   ├── organization.js
│   │   └── user.js
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── createsu.js
│   ├── utils/
│   │   ├── annotationUtils.js
│   │   ├── emailService.js
│   │   └── tokens.js
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
├── ml_services/
└── mobile_app/

***Mobile app file structure***:

project_root/
├── mobile_app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.js
│   │   │   │   ├── Input.js
│   │   │   │   ├── LoadingSpinner.js
│   │   │   │   └── Header.js
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.js
│   │   │   │   └── RegisterForm.js
│   │   │   └── annotation/
│   │   │       ├── BoundingBox.js
│   │   │       ├── ImageCanvas.js
│   │   │       └── AnnotationToolbar.js
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── LoginScreen.js
│   │   │   │   ├── RegisterScreen.js
│   │   │   │   └── VerificationScreen.js
│   │   │   ├── dashboard/
│   │   │   │   ├── DashboardScreen.js
│   │   │   │   └── ProfileScreen.js
│   │   │   ├── annotation/
│   │   │   │   ├── ImageUploadScreen.js
│   │   │   │   ├── AnnotationScreen.js
│   │   │   │   └── GalleryScreen.js
│   │   │   └── organization/
│   │   │       ├── OrganizationScreen.js
│   │   │       └── TeamManagementScreen.js
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── config.js
│   │   │   │   ├── apiService.js
│   │   │   │   └── endpoints.js
│   │   │   ├── auth/
│   │   │   │   ├── authService.js
│   │   │   │   └── tokenService.js
│   │   │   ├── image/
│   │   │   │   ├── imageService.js
│   │   │   │   └── imagePickerService.js
│   │   │   └── annotation/
│   │   │       ├── annotationService.js
│   │   │       └── calculationUtils.js
│   │   ├── navigation/
│   │   │   ├── AppNavigator.js
│   │   │   ├── AuthNavigator.js
│   │   │   └── MainNavigator.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   ├── AppContext.js
│   │   │   └── AnnotationContext.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useImageUpload.js
│   │   │   └── useAnnotations.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   └── styles/
│   │       ├── themes.js
│   │       ├── globalStyles.js
│   │       └── components/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── icons/
│   │   └── fonts/
│   ├── android/
│   ├── ios/
│   ├── App.js
│   ├── app.json
│   ├── package.json
│   └── index.js
├── backend/
├── frontend/
└── ml_services/


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



