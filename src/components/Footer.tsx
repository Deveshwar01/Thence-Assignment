// Importing necessary dependencies and assets
import React from 'react';
import Image from 'next/image';
import Csign from '../assets/Frame.png';

// Header component definition
const Footer: React.FC = () => {
    // Rendering the component JSX
    return (
        <header className='p-5 '>
            {/* Header content */}
            <div className="flex flex-row items-center justify-between border h-[90px] rounded-[30px] p-5 bg-gray-100">
                {/* Company signature */}
                <div className='pl-5 pt-3 flex'>
                    <Image src={Csign} alt="Company Signature" />
                    <p>Talup 2023. All rights reserved</p>
                </div>
                {/* Navigation buttons */}
                <div className='flex gap-10'>
                    {/* Terms & Conditions button */}
                    <button className='border-b  border-black  '>Terms & Conditions</button>
                    {/* Privacy Policy button */}
                    <button className='border-b border-black  '>Privacy Policy</button>
                </div>
            </div>
        </header>
    );
};

export default Footer;
