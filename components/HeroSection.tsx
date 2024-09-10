"use client";

import { Button } from '@nextui-org/react';
import AnimatedBeam from './AnimatedBeam';

const HeroSection = () => {
    return (
        <section className="relative bg-gray-900 text-white py-16 md:py-24 rounded-md ">


            {/* Background Image */}

            <div className="absolute inset-0 overflow-hidden rounded-md">
                <img
                    src="/images/me_while_coding_in_group.png"
                    alt="Background"
                    className="w-full h-full object-cover rounded-md   glassmorphic-bg bg-opacity-10 cursor-pointer hover:bg-opacity-40"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-md  "></div>
            </div>



            {/* Content */}
            <div className="relative px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Hi, I'm Dinesh Rathod
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    A passionate AI and Data Science student, specializing in creating
                    innovative solutions.
                </p>
                <Button size="lg" color="primary" className="mb-4 m-2">
                    View My Work
                </Button>
                <Button size="lg">Contact Me</Button>
            </div>

            <div className="relative z-0">



            </div>


        </section>

    );
};

export default HeroSection;
