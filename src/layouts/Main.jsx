import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/Shared/Navbar";
import ParticleBg1 from "../components/Particle/ParticleBg1";
import Footer from "../components/Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="w-full h-screen bg-color">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ParticleBg1 />  
        </div>
    );
};

export default Main;