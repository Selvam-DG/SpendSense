# SpendSense - Expense Tracker App

A full-stack expense tracker built with **React (Vite)** and **Firebase (BaaS)**. Allows users to track daily expenses, view monthly summaries, and manage budgets securely with Firebase Auth and Firestore.

---

##  Features

- 🔐 Firebase Authentication (Sign up / Login / Logout)
- 📦 Firebase Firestore for storing expenses
- ➕ Add, view, and delete expenses
- 📊 Monthly summary and charts (via Chart.js or Recharts)
- 🔍 Filter by category/date
- 📱 Mobile responsive UI (Tailwind CSS)

---

##  Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend/BaaS**: Firebase (Auth, Firestore, Hosting)
- **Deployment**: Firebase Hosting

---

## Project Structure

``` pgsql
SpendSense/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── FilterBar.jsx
│   │   └── SummaryCard.jsx
│   ├── firebase/
│   │   └── config.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

```

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Selvam-DG/SpendSense.git
cd expense-tracker
```
### 2. Install Dependencies
``` bash
npm install
```

### 3. 3. Firebase Setup
- Go to Firebase Console
  - Create a project
  - Enable:
    - Authentication (Email/Password)
    - Firestore Database
  - Copy the config from Firebase and replace it in src/firebase/config.js
 ``` js
//firebase/config.js
```

### 4. Run Locally
```bash
npm run dev
```
Open in your browser at http://localhost:5173

---
## Deployment
To deploy to Firebase Hosting:
``` bash
npm run build
firebase login
firebase init
firebase deploy
```
Make sure to select:
- Hosting
- Configure as a single-page app? → Yes

## License
This project is licensed under the MIT License






