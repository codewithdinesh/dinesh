"use client";

import React, { useState, useEffect, useRef } from "react";
import { educationIcon, GithubIcon, LinkedinIcon, locationIcon, titleIcon, TwitterIcon, InstaIcon } from "../icons";
import SidebarItem from "./SidebarItem";
import SocialIcon from "./SocialIcon";
import { UserDetails as Details } from "@/config/sidebar";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Handle screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Close sidebar on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="fixed z-40 md:relative m-2 rounded-md  w-full md:w-3/12 h-fit md:h-full ">

            {/* Sidebar Toggle Button for Mobile */}

            {!open &&
                <div className="fixed top-0 left-0 p-4 md:hidden z-50">
                    <button
                        id="toggleSidebar"
                        className="text-green-500 bg-slate-900 border border-green-500 rounded-full p-2 px-3 transition-transform duration-300"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "" : "☰"}
                    </button>
                </div>
            }

            {/* Sidebar */}

            <aside
                ref={sidebarRef}
                className={`bg-gradient-to-tl from-slate-500 to-slate-700 md:from-slate-500/20 font-semibold md:to-slate-700/20 rounded-md glassmorphic-bg md:bg-opacity-20  p-4  md:w-full h-full transition-transform duration-300 overflow-y-auto scrollbar
                    ${open ? "block" : "hidden md:block"} md:static fixed top-0 left-0`}
            >
                {/* Close Button inside Sidebar for Mobile */}
                <div className="md:hidden text-right">

                    <button
                        id="toggleSidebar"
                        className="text-green-500 bg-slate-900 border border-green-500 rounded-full p-2 px-3 transition-transform duration-300"
                        onClick={() => setOpen(!open)}
                    >

                        ✖
                    </button>
                </div>

                {/* Profile Card */}
                <div className="mt-4 p-4  rounded-lg hover:bg-slate-900/40 cursor-pointer">
                    <img
                        alt="Dinesh Rathod"
                        className="w-32 h-32 md:w-52 md:h-52 mx-auto rounded-full mb-2 border border-green-500"
                        src="/images/profile_img_bg.jpg"
                    />
                    <h2 className="text-2xl font-semibold text-green-400 text-center tracking-widest glow-effect">
                        DINESH RATHOD
                    </h2>
                </div>


                {/* Profile Details */}
                <div className="block mt-4">
                    <SidebarItem icon={titleIcon} title={Details.title} />
                    <SidebarItem icon={educationIcon} title={Details.education} />
                    <SidebarItem icon={locationIcon} title={Details.location} />
                </div>

                {/* Profile Links */}
                <div className="flex justify-center mt-6 space-x-4">
                    <SocialIcon icon={GithubIcon} link={Details.links.github} />
                    <SocialIcon icon={LinkedinIcon} link={Details.links.linkedin} />
                    <SocialIcon icon={TwitterIcon} link={Details.links.twitter} />
                    <SocialIcon icon={InstaIcon} link={Details.links.instagram} />
                </div>

                {/* Quotes */}
                <div className="mt-8 p-4 bg-slate-900/80 rounded-lg overflow-clip">
                    <h2 className="text-lg md:text-xl text-green-400 text-center font-semibold glow-effect">
                        Quotes
                    </h2>
                    <p className="text-sm text-green-300 text-center">
                        Loading quote...
                    </p>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
