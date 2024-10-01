"use client";
import { Button } from "@nextui-org/react";
import AnimatedBeam from './AnimatedBeam';
import Link from 'next/link';
import { useRef } from "react";

const HeroSection = () => {




    return (
        <section className="relative  bg-gradient-to-tl from-slate-500 to-slate-700  md:from-slate-900/100 md:to-slate-700/70  py-16 md:py-24 rounded-md glassmorphic-bg bg-opacity-70  cursor-custom    ">

            {/* <section className="relative  bg-gradient-to-tl from-slate-500 to-slate-700  md:from-slate-900/100 md:to-slate-700/70  py-16 md:py-24 rounded-md glassmorphic-bg bg-opacity-70  cursor-custom    "> */}
            {/* Content */}
            <div className="relative p-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-green-400">
                    Hi, I&apos;m <span className="text-neon font-extrabold">Dinesh Rathod</span>
                </h1>
                <p className="text-lg md:text-xl my-6 text-gray-300">
                    <span className="text-neon-green">Full-stack developer</span> specializing in building <span className="text-neon-yellow font-bold">beautiful</span> and <span className="text-neon-blue font-bold">functional</span> web applications. Passionate about collaborating with <span className="text-neon-orange font-bold">diverse teams</span> to bring ideas to life.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link href="/projects" >
                        <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black font-semibold transform hover:scale-105 transition-all">
                            View Projects
                        </Button>
                    </Link>
                    <Link href="#contact" >
                        <Button size="lg" className="border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-black font-semibold transition-all">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;
