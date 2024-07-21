"use client";

import { educationIcon, GithubIcon, LinkedinIcon, locationIcon, titleIcon, TwitterIcon, InstaIcon } from "../icons";
import SidebarItem from "./SidebarItem";
import SocialIcon from "./SocialIcon";

const Sidebar = () => {

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
        <div className=" block md:flex">

            <div className="md:hidden flex items-center justify-end p-4">
                <button id="toggleSidebar" className="text-white">
                    &#9776;
                </button>
            </div>


            {/* <!-- Sidebar --> */}
            <aside
                className="bg-gradient-to-tl mb-1 from-slate-500 to-slate-700 rounded text-white p-2 w-16 md:w-1/4 rounded-lg mx-1
        sidebar-closed w-full sidebar hidden md:block" >


                {/* <!-- Profile Card --> */}
                <div className="mt-4 p-4 glassmorphic-bg rounded-lg hover:bg-blue-100 hover:bg-opacity-20 cursor-pointer">
                    <img
                        alt="Dinesh Rathod"
                        className="w-32 h-32 mx-auto rounded-full mb-2"
                        src="/images/profile_img_bg.jpg"
                    />
                    <h2 className="text-2xl font-semibold text-white text-center  tracking-widest ">
                        DINESH RATHOD

                    </h2>
                </div>

                {/* Profile Details */}
                <div className="block ">

                    {/* Title */}
                    <SidebarItem icon={titleIcon} title={Details.title} />

                    {/* Education */}
                    <SidebarItem icon={educationIcon} title={Details.education} />
                    {/* location */}
                    <SidebarItem icon={locationIcon} title={Details.location} />

                </div>



                {/* <!-- Profile Links --> */}

                <div className="flex justify-center">


                    <SocialIcon icon={GithubIcon} link={Details.links.github} />
                    <SocialIcon icon={LinkedinIcon} link={Details.links.linkedin} />
                    <SocialIcon icon={TwitterIcon} link={Details.links.twitter} />

                    <SocialIcon icon={InstaIcon} link={Details.links.instagram} />
                </div>


                {/* Profile Card */}



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
