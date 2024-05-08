// Importing necessary dependencies and assets
import React from 'react';
import Image from 'next/image';
import logo from '../assets/Vector.png';
import Link from 'next/link';

// Header component definition
const Header: React.FC = () => {
  // Rendering the component JSX
  return (
    <header className='p-2'>
      {/* Header content */}
      <div className="flex flex-row items-center justify-between border h-[70px] rounded-[50px] py-1 px-3">
        {/* Logo */}
        <div className='pl-5'>
          <Image src={logo} width={150} height={30} alt="Company Logo" />
        </div>
        {/* Navigation buttons */}
        <div className='flex gap-3'>
          {/* Link to registration page */}
          <Link href="/registration">
            <button className='border rounded-[50px] px-10 py-4 hover:bg-gray-100'>Get Project</button>
          </Link>
          {/* Onboard talent button */}
          <button className='border rounded-[50px] px-10 py-4 bg-black text-white hover:bg-custombg3'>Onboard Talent</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
