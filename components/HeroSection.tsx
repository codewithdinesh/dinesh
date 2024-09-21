"use client";
import { Button } from "@nextui-org/react";
import AnimatedBeam from './AnimatedBeam';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative  bg-gradient-to-tl from-slate-500 to-slate-700  md:from-slate-900/100 md:to-slate-700/70  py-16 md:py-24 rounded-md glassmorphic-bg bg-opacity-70  cursor-custom    ">


            {/* Background Image */}

            {/* <div className="absolute inset-0 overflow-hidden rounded-md">
                <img
                    src="/images/me_while_coding_in_group.png"
                    alt="Background"
                    className="w-full h-full object-cover rounded-md   glassmorphic-bg bg-opacity-10 cursor-pointer hover:bg-opacity-40"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-md  "></div>
            </div> */}




            {/* Content */}
            <div className="relative p-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Hi, I'm Dinesh Rathod
                </h1>
                <p className="text-xl md:text-2xl my-8">
                    {/* A passionate AI and Data Science student, specializing in creating
                    innovative solutions. */}

                    I'm a full-stack developer with a passion for creating beautiful and functional web applications. I love working with diverse teams to bring ideas to life.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link href="#projects">
                        <Button size="lg" color="primary">View Projects</Button>
                    </Link>
                    <Link href="#contact">
                        <Button size="lg" color="primary" variant="bordered">Contact Me</Button>
                    </Link>
                </div>
            </div>


        </section>


    );
};

export default HeroSection;
