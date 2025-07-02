import { Link } from "react-router-dom";

export default function Home(){
    return ( 
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-slate-200 text-gray flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600">
                    Welcome to <span className="font-bold">Spendali</span>
                    <span className="text-indigo-800 font-extrabold tracking-tight">Q</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700">
          Track your expenses, plan your budget, and make smarter financial decisions – all in one simple, secure, and real-time platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link to="/login">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg shadow hover:bg-indigo-700 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl text-lg shadow hover:bg-indigo-50 transition">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">✨ Why SpendSense?</h2>
          <ul className="text-left list-disc list-inside text-gray-600 space-y-2">
            <li>📊 Real-time expense tracking</li>
            <li>🔐 Secure login with Firebase</li>
            <li>📱 Mobile-friendly and responsive</li>
            <li>📈 Visual dashboards & charts</li>
            <li>💡 Simple and user-friendly design</li>
          </ul>
        </div>
                

            </div>

        </div>
    );
}