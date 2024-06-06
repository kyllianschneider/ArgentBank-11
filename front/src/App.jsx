import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import './main.css';
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;