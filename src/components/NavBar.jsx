import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };
    const activeStyle = "text-cyan-500  "
    const inActiveStyle = "hover:text-yellow-300 cursor-pointer transition-all duration-300"

    return (
        <div className="w-full bg-slate-900 h-16 fixed top-0 left-0 z-20 shadow-lg">
            <div className="flex items-center px-2 sm:px-8 py-3 md:justify-around justify-between">
                <Logo />

                <div className="hidden lg:flex">
                    <ul className="flex gap-6 items-center text-white text-lg">
                        <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                            <li>
                                Home
                            </li>
                        </NavLink>

                        <NavLink to={`/Quote`} className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                            <li >
                                Quote
                            </li>
                        </NavLink>
                        <NavLink to={`/Restaurant`} className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)} >
                            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                Restaurant
                            </li>
                        </NavLink>
                        <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                            Food
                        </li>
                        <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                            Contact
                        </li>
                    </ul>
                </div>

                {/* chote screen ke liye hamburger menu */}
                <div >
                    <button className="h-8 w-8 md:hidden " onClick={menuToggle}>
                        <img src={hamburger} />
                    </button>
                </div>

                <div className="hidden md:flex">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 hover:cursor-pointer transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            {/* burger dikhane ya chupane ke liye */}
            {
                isMenuOpen && (
                    <div className="md:hidden bg-slate-800 w-full h-auto rounded-xl">
                        <ul className="flex flex-col gap-4 items-center text-white py-4">
                            <NavLink to={`/`} className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to={`/Quote`} className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                    Quote
                                </li>
                            </NavLink>
                            <NavLink to={`/Restaurant`} className={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}>
                                <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                    Restaurant
                                </li>
                            </NavLink>
                            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                Food
                            </li>
                            <li className="hover:text-yellow-300 cursor-pointer transition-all duration-300">
                                Contact
                            </li>
                        </ul>
                    </div>
                )
            }
        </div >
    );
};

export default NavBar;
