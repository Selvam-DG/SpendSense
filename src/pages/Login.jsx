import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import {auth } from '../firebase/config';
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            await signInWithEmailAndPassword( auth, email, password);
            navigate('/');
        }catch(error){
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={ handleLogin } className="space-y-4">
                <h2 className="text-xl font-bold">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="border px-2 py-1"
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border px-2 py-1"
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <button className="bg-green-500 text-white px-4 py-1">Login</button>

            </form>

        </div>
    );
}

export default Login;