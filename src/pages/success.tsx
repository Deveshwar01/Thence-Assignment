// Importing necessary dependencies and assets
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from '../assets/Vector.png';
import Tick from '../assets/Tick + round.png';
import Successs from '../assets/Success Submitted.png';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

// Success component definition
const Success = () => {
    // Initializing router and countdown state
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    // Effect to handle countdown and redirect after countdown ends
    useEffect(() => {
        const redirectTimer = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
        }, 1000);

        // Redirect after countdown ends
        if (countdown === 0) {
            router.push('/');
        }

        // Clear the timer when the component unmounts
        return () => clearInterval(redirectTimer);
    }, [countdown, router]);

    // Rendering the component JSX
    return (
        <>
            {/* Header section with logo */}
            <div className='flex flex-row items-center justify-between p-10'>
                <Image src={Logo} alt='Logo' />
            </div>
            {/* Success message section */}
            <div className='flex flex-col gap-2 items-center justify-center mt-20'>
                <Image src={Tick} className='w-[50px] pb-2' alt='Tick' />
                <Image src={Successs} alt='Success' />
                <h1 className='text-4xl font-medium'>Congratulations</h1>
                <p className='w-[470px] text-xl font-thin'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
                <p className='text-lg text-gray-600 pt-20'>Redirecting you to Homepage in <span className='font-bold'>{countdown} Seconds</span></p>
            </div>
        </>
    );
};

export default Success;
