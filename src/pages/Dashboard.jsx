import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";
import { auth } from '../firebase/config';
import { useEffect,  useState } from "react";

const Dashboard = () => {
    const [ user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = auth.onAuthStateChanged( (u) => {
            if(u) {
                setUser(u);
            }else {
                navigate('//login');
            }
        });
        
    return  () => unsub();
    }, []);

    const hangleLogout = async() => {
        await signOut(auth);
        navigate('/login');
    };
    
    return(
        <div className="p-4">
            <h1 className="text-2x1">Welcome {user?.email}     </h1>
            <button onClick={ hangleLogout} className="bg-red-500 text-white px-4 py-1">
                Logout
            </button>
        </div>
    );
}

export default Dashboard;