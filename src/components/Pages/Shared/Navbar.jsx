import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { UserContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex justify-between items-center px-5 md:px-10 py-5 shadow-xl font-semibold text-xl">
        <Link to="/">
          <img className="w-60" src={logo} alt="" />
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
            to="/blogs"
          >
            Blog
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#007EB1]" : "white"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          )}
          <NavLink className="btn-primary" to="/">
            Schedule a call
          </NavLink>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FaAlignJustify className="w-8 h-8 text-white"></FaAlignJustify>
        </button>
      </div>
      <div className="md:hidden">
        {open && (
          <nav className="shadow-xl px-8 py-4">
            <div className="flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/"
                onClick={()=>setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/aboutUs"
                onClick={()=>setOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/baas"
                onClick={()=>setOpen(false)}
              >
                BaaS
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/decipher"
                onClick={()=>setOpen(false)}
              >
                Decipher
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/faq"
                onClick={()=>setOpen(false)}
              >
                FAQ
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#007EB1]" : "white"
                }
                to="/blogs"
                onClick={()=>setOpen(false)}
              >
                Blog
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#007EB1]" : "white"
                  }
                  to="/dashboard"
                  onClick={()=>setOpen(false)}
                >
                  Dashboard
                </NavLink>
              )}
              <button className="btn-primary">Schedule a call</button>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
