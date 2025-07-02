
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-indigo-700 font-extrabold text-2xl">
          <span className="font-bold">Spendali</span>
          <span className="text-indigo-900 tracking-tight">Q</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex text-indigo-700 font-medium">
          <Link to="/" className="hover:text-indigo-900 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-900 transition">
            About
          </Link>
          <Link to="/login" className="hover:text-indigo-900 transition">
            Login
          </Link>
          <Link to="/signup" className="hover:text-indigo-900 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
