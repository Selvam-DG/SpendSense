import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email , setEmail] = useState('');
    const[ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword( auth, email, password);
            navigate('/');
        }catch(error){
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSignup} className="space-y-4">
                <h2 className="text-xl font-bold">SignUp</h2>
                <input type="email" 
                    placeholder="Email"
                    className="border px-2 py-1"    
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="password"
                    className="px-2 py-1 border"
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-1">Signup</button>

            </form>

        </div>
    );
}

export default SignUp;