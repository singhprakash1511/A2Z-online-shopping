import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />

      </Routes>
  
    </div>
  );
}

export default App;
