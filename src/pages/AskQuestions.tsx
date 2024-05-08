import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Importing images
import SpellImage from '../assets/What’s on your mind.png';
import VectorImage from '../assets/Union.png';

// Data for accordion items
const accordionItems = [
    {
        question: "Do you offer freelancers?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        question: "What’s the guarantee that I will be satisfied with the hired talent?",
        answer: "Yes. It comes with default styles that matches the other components' aesthetic."
    },
    {
        question: "Can I hire multiple talents at once?",
        answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        question: "Why should I not go to an agency directly?",
        answer: "Yes. It's animated by default, but you can disable it if you prefer."
    },
    {
        question: "Who can help me pick a right skillset and duration for me?",
        answer: "Yes. It's animated by default, but you can disable it if you prefer."
    }
];

const AskQuestions = () => {
    return (
        <div className='px-10 py-10'>
            <div className='flex bg-custombg px-20 py-10 rounded-[40px] gap-36 item-center justify-evenly'>
                {/* Section with image and title */}
                <div className='flex flex-col gap-5'>
                    <Image src={SpellImage} className='w-[150px]' alt="Spell" />
                    <h1 className='text-2xl font-medium'>ASK QUESTIONS</h1>
                    <Image className='w-[300px]' src={VectorImage} alt="Vector" />
                </div>
                {/* Section with FAQ accordion */}
                <div className='w-[600px]'>
                    <Accordion type="single" collapsible className="w-full">
                        {/* Mapping accordion items */}
                        {accordionItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default AskQuestions;
