'use client'
import React, { useState } from "react";
import Image from 'next/image';
import AskQuestions from "./AskQuestions";
import { ArrowRight } from 'lucide-react';

// Importing images
import SuccessImage from '../assets/Success stories.png'
import RocketImage from '../assets/Framee.png'
import SparkleImage from '../assets/spark, sparkle, 26.png'
import GirlImage from '../assets/Mask group.png'

const HomePage = () => {
    // State for controlling the active index of carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle dot click in carousel
    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/* Main content */}
            <div className="flex flex-col gap-10 items-center pt-2">
                {/* Success image and heading */}
                <div>
                    <Image src={SuccessImage} alt="Success" />
                    <h1 className="text-2xl w-[400px] pt-2 font-bold ">Every success journey we’ve encountered.</h1>
                </div>
                {/* Grid layout containing various components */}
                <div className="grid grid-cols-2 gap-[200px] item-center h-[450px] ">
                    <div>
                        {/* Girl image */}
                        <div>
                            <Image
                                src={GirlImage}
                                className="rounded-[40px] w-[380px] h-[406px] "
                                alt=""
                            />
                        </div>
                        {/* Percentage button */}
                        <button
                            className="flex flex-col shadow-2xl gap-2 bg-white hover:bg-gray-100 border p-2 rounded-[15px] relative top-[-260px] right-[60px] w-36 h-[130px]"
                        >
                            <p className="font-bold text-4xl pl-3 mt-4">40%</p>
                            <p className="text-[10px] font-light">
                                Achieved reduction in project execution time by optimising team availability
                            </p>
                        </button>
                        {/* Sparkle image */}
                        <Image src={SparkleImage} className="relative top-[-410px] w-[80px] right-[75px]" alt="" />
                        {/* Rocket button */}
                        <button
                            className="flex  gap-2 bg-white hover:bg-gray-100 border px-4 py-2 rounded-[50px] relative top-[-300px] right-[60px] w-[160px]"
                        >
                            <Image src={RocketImage} alt="" />
                            <div>
                                <h1 className="font-bold">10 DAYS</h1>
                                <p className="text-[10px]">Staff Deployment</p>
                            </div>
                        </button>
                        {/* Million dollar button */}
                        <button
                            className="flex-col gap-2 p-5 rounded-[15px] relative top-[-380px] right-[-280px] h-[150px] bg-custombg2 text-white"
                        >
                            <span className="flex gap-3">
                                <p className="font-bold text-4xl pl-3">$0.5 </p>
                                <p className="relative top-4 font-thin">MILLION</p>
                            </span>
                            <p className="w-36 text-[13px] font-light">
                                Reduced client expenses by saving on hiring and employee costs.
                            </p>
                        </button>
                    </div>
                    {/* Carousel content */}
                    <div className="flex  flex-col relative top-[80px] gap-20">
                        <div>
                            <h1 className=" font-medium w-[250px] text-2xl pb-10"></h1>
                            <div className="relative">
                                {/* Carousel items */}
                                <div className="w-full">
                                    <div className="flex">
                                        {/* Carousel content */}
                                        {["Enhance fortune 50 company’s insights teams research capabilities",
                                            "Strengthen the research of Fortune 50 companies' insights units.",
                                            "Augment the research  within corporations' insights divisions."].map((content, index) => (
                                                <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : 'hidden'} font-medium w-[250px] text-2xl pb-10`}>
                                                    {content}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                {/* Carousel dots */}
                                <div className="absolute bottom-0 right-[320px] flex justify-center">
                                    {[0, 1, 2].map((index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDotClick(index)}
                                            className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Explore more button */}
                        <button className=" flex gap-4 border p-5 w-[236px] rounded-[50px] px-10 bg-black text-white hover:bg-custombg3">
                            Explore more
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            {/* AskQuestions component */}
            <AskQuestions />
        </>
    );
};

export default HomePage;
