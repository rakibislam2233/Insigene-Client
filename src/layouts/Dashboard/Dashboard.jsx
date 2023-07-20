import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

import { Link, Outlet } from "react-router-dom";
import ParticleBg2 from "../../components/Particle/ParticleBg2";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="w-full  md:flex justify-between ">
      <div className="w-full  md:fixed md:w-[18%] bg-color ">
        <nav className="w-full md:h-screen text-white flex flex-col  items-center gap-20 px-5 py-10 border-e-2 border-gray-800">
          <ul className="flex flex-col gap-3 font-semibold">
            <li>
              <Link
                to="/dashboard"
                className="flex gap-2 items-center  cursor-pointer"
              >
                <AiOutlineHome className="w-5 h-5"></AiOutlineHome>Admin Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addBlogs"
                className="flex gap-2 items-center  cursor-pointer"
              >
                <BiImageAdd className="w-5 h-5"></BiImageAdd>Add Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/managBlogs"
                className="flex gap-2 items-center  cursor-pointer"
              >
                <AiOutlineUserAdd className="w-5 h-5"></AiOutlineUserAdd>Manage
                Blogs
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                <button className="py-3 mt-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 unded-3xl flex items-center gap-1 rounded-full">
                  Back to home
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full   lg:ml-[18%] p-5 bg-color ">
        <Outlet></Outlet>
      </div>
      <ParticleBg2></ParticleBg2>
      <Toaster></Toaster>
    </div>
  );
};

export default Dashboard;
