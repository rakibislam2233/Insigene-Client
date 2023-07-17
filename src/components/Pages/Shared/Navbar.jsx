import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify } from 'react-icons/fa';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
    <>
      <div className="flex justify-between items-center p-4 sm:px-8 md:px-20 py-4 shadow-xl font-semibold text-xl">
        <Link to="/">
            <img className="w-52" src={logo} alt="" />
        </Link>
        <nav className="space-x-8 hidden md:block">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/aboutUs"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/baas"
          >
            BaaS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/decipher"
          >
            Decipher
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#007EB1]" : "white"
            }
            to="/contact"
          >
            Blog
          </NavLink>
          <NavLink
            className="btn-primary"
            to="/contact"
          >
           Schedule a call
          </NavLink>
        </nav>
        
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FaAlignJustify className="h-6 w-6 text-primary"></FaAlignJustify>
        </button>
      </div>
      <div className="md:hidden">
        {open && (
          <nav className="shadow-xl p-4">
            <div className="flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded "
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/class"
              >
                Classes
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/program"
              >
                Programs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/page"
              >
                Pages
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </div>
            <div className="mt-2">
              <Link className=" px-3 py-2 bg-primary rounded text-white">
                APPOINTMENT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </>
    );
};

export default Navbar;