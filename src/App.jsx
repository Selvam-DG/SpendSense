import { useState } from 'react' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login' ;
import Dashboard from './pages/Dashboard';

function App() {

  return (
 
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={ <SignUp/> } />
        <Route path='/login' element ={ <Login />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

// function App() {
//   return <h1>Hello, React + Vite!</h1>;
// }

export default App;