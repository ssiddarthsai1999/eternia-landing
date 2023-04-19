import React from "react";
import "./Navbar.css";
import blobred from "../../assets/blobred.png";
import circle2 from "../../assets/blobred.png";
import { useState, useEffect } from "react";

function Nav() {
    const [toggleButtonShow, settoggleButtonShow] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [showContent, setShowContent] = useState(false);
    const isMobile = viewportWidth < 640;
    function onbuttonclick() {
        setShowContent(!showContent);
    }
    function showToggleButton() {
        if (window.innerWidth < 640) {
            settoggleButtonShow(true);
        }
    }
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="block">
            <div className="mt-5 flex align-middle items-center  justify-between p-2 mr-10 relative">
                <div className="lg:ml-10">
                    <h1 className="  font-medium tracking-wide text-4xl text-white  z-10">
                        Eternia.ai
                    </h1>
                    <img
                        alt="blob"
                        className="absolute top-[-600px] left-[-600px]  "
                        src={blobred}
                    />
                </div>

                {isMobile ? (
                    <div className="cursor-pointer">
                        <i
                            onClick={onbuttonclick}
                            class="fa-solid fa-bars fa-xl"
                        ></i>
                    </div>
                ) : (
                    <div className=" navright sm:flex  font-medium text-2xl ">
                        <ul className="flex gap-10 leading-tight  items-center align-middle justify-center">
                            <a href="#features">
                                <li>Create Account</li>
                            </a>
                            <button className="linearbutton rounded-lg px-[40px] py-3 font-medium">
                                Login
                            </button>
                        </ul>
                    </div>
                )}
            </div>
            {showContent && isMobile && (
                <div className="w-full  justify-center items-center align-middle p-2">
                    <ul className="block gap-10 leading-tight  items-center align-middle justify-center mb-2">
                        <li className="text-center  cursor-pointer hover:bg-[#2c152a] p-2 text-lg">
                            Create Account
                        </li>

                        <li className="text-center cursor-pointer hover:bg-[#2c152a] p-2 text-lg">
                            Login
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Nav;
