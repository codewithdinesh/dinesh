"use client";

import React, { useState, useEffect, useRef } from "react";
import { educationIcon, GithubIcon, LinkedinIcon, locationIcon, titleIcon, TwitterIcon, InstaIcon } from "../icons";
import SidebarItem from "./SidebarItem";
import SocialIcon from "./SocialIcon";

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

    const Details = {
        name: "Dinesh Rathod",
        email: "dineshrathod0198@gmail.com",
        title: "Full Stack Developer | Data Scientist  | AI Engineer",
        location: "Pune, India",
        education: "Bachelor of Engineering in Artificial Intelligence and Data Science",
        links: {
            github: "https://www.github.com/codewithdinesh",
            linkedin: "https://www.linkedin.com/in/dineshrathod03",
            twitter: "https://www.twitter.com/codewithdinesh",
            instagram: "https://www.instagram.com/dineshrathod.ai",
            discord: "https://discord.gg/8uJ8J2b",
            huggingface: "https://huggingface.co/dineshrathod",
            kaggle: "https://www.kaggle.com/dineshrathod",
            medium: "https://dineshrathod.medium.com",
            dev: "https://dev.to/dineshrathod",
            youtube: "https://www.youtube.com/c/codewithdinesh",

        },

    }
    return (
        <div className="relative z-40 md:relativ m-2 rounded-md ">
            {/* Sidebar Toggle Button for Mobile */}
            <div className="fixed top-0 left-0 p-4 md:hidden z-50">
                <button
                    id="toggleSidebar"
                    className="text-white bg-slate-700  rounded-full p-2 px-3 transition-transform duration-300"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                // bg-gradient-to-tl rounded-md from-slate-500 to-slate-700 glassmorphic-bg bg-opacity-20  text-white p-4 w-68 w-72 md:w-4/4 h-full transition-transform duration-300 overflow-y-auto scrollbar
                className={`bg-gradient-to-tl from-slate-500 to-slate-700  md:from-slate-500/20 md:to-slate-700/20 rounded-md glassmorphic-bg md:bg-opacity-20  text-white p-4 w-68 w-72 md:w-4/4 h-full transition-transform duration-300 overflow-y-auto scrollbar
                    ${open ? "block" : "hidden md:block"} md:static fixed top-0 left-0`}
            >
                {/* Close Button inside Sidebar for Mobile */}
                <div className="md:hidden text-right">
                    <button
                        className="text-white p-2"
                        onClick={() => setOpen(false)}
                    >
                        ✖
                    </button>
                </div>

                {/* Profile Card */}
                <div className="mt-4 p-4 glassmorphic-bg rounded-lg hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer">
                    <img
                        alt="Dinesh Rathod"
                        className="w-32 h-32 mx-auto rounded-full mb-2"
                        src="/images/profile_img_bg.jpg"
                    />
                    <h2 className="text-2xl font-semibold text-white text-center tracking-widest">
                        DINESH RATHOD
                    </h2>
                </div>

                {/* Profile Details */}
                <div className="block">
                    <SidebarItem icon={titleIcon} title={Details.title} />
                    <SidebarItem icon={educationIcon} title={Details.education} />
                    <SidebarItem icon={locationIcon} title={Details.location} />
                </div>

                {/* Profile Links */}
                <div className="flex justify-center mt-4">
                    <SocialIcon icon={GithubIcon} link={Details.links.github} />
                    <SocialIcon icon={LinkedinIcon} link={Details.links.linkedin} />
                    <SocialIcon icon={TwitterIcon} link={Details.links.twitter} />
                    <SocialIcon icon={InstaIcon} link={Details.links.instagram} />
                </div>

                {/* Quotes */}
                <div className="mt-8 p-4 glassmorphic-bg rounded-lg overflow-clip">
                    <h2 className="text-lg md:text-xl text-white text-center font-semibold">
                        Quotes
                    </h2>
                    <p className="text-sm text-white text-center" id="joke">
                        Loading quote...
                    </p>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
