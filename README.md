# SpendaliQ- Expense Tracker App

A smart, sleek, and simple expense tracker built with **React + Vite + TailwindCSS**, powered by **Firebase** for backend and authentication. Track your spending, stay on budget, and visualize where your money goes — all in real time.

---

##  Features


- User Authentication (Sign Up / Login via Firebase Auth)  
- Add, Edit, Delete Expenses and Incomes  
- Categorize Transactions (Food, Rent, Travel, etc.)  
- Real-time Data Sync with Firebase Firestore  
- Monthly/Weekly Spending Summary  
- Interactive Charts with Recharts / Chart.js  
- Budget Planning and Expense Limits  
- Mobile-Friendly, Responsive Design  




---

##  Tech Stack

| Frontend           | Backend / BaaS        | UI / Styling     |
|--------------------|------------------------|------------------|
| React + Vite       | Firebase Auth          | TailwindCSS      |
| React Router DOM   | Firebase Firestore     | Heroicons        |
| Chart.js / Recharts| Firebase Hosting       | DaisyUI (optional)|

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
## Environment Variables
Create a `.env` file in the root directory and add your firebase credentials
``` env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

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

# Install Firebase CLI globally
npm install -g firebase-tools 

firebase login
firebase init

npm run build
firebase deploy
```
Make sure to select:
- Hosting
- Configure as a single-page app? → Yes

## License
This project is licensed under the MIT License






