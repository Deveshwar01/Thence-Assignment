// Importing necessary dependencies and assets
import 'tailwindcss/tailwind.css';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../assets/Vector.png';
import Image from 'next/image';
import { CircleX } from 'lucide-react';
import RegisterHeading from '../assets/Registration Form.png';

// Registration component definition
const Registration = () => {
  // Initializing router and state variables
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  // Function to handle email input change
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
    setIsFormValid(emailValue !== '' && name !== '' && emailError === '');
  };

  // Function to handle name input change
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsFormValid(event.target.value !== '' && email !== '' && emailError === '');
  };

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate email before submission
    if (emailError) {
      console.log('Invalid email:', emailError);
      return;
    }
    // Log submitted email and name, and redirect to success page
    console.log('Email submitted:', email);
    console.log('Name submitted:', name);
    router.push('/success');
  };

  // Function to validate email format
  const validateEmail = (emailValue: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailValue)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Rendering the component JSX
  return (
    <div className='px-20 py-10'>
      {/* Header section with logo and close button */}
      <div className='flex flex-row items-center justify-between'>
        <Image src={Logo} alt='' />
        <button onClick={() => router.push('/')}>
          <CircleX size={55} color="#000000" strokeWidth={0.5} />
        </button>
      </div>

      {/* Main registration form section */}
      <div className='flex flex-col items-center justify-center p-20'>
        <Image src={RegisterHeading} alt='' className='w-[150px]' />
        <h1 className='text-4xl font-medium w-[350px]'>
          Start your success <span className='pl-10'>Journey here!</span>
        </h1>
        {/* Registration form */}
        <form onSubmit={handleSubmit} className='max-w-sm mx-auto mt-8'>
          <div className='flex flex-col gap-5'>
            {/* Name input field */}
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Enter your name'
              required
              className='border  rounded-[50px] py-3 px-10 w-[300px]  bg-gray-100'
            />
            {/* Email input field */}
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='Enter your email'
              required
              className='border  rounded-[50px] py-3 px-10 w-[300px]  bg-gray-100'
            />
            {/* Error message for invalid email */}
            {emailError && <p className='text-red-500'>{emailError}</p>}
          </div>
          {/* Submit button */}
          <div className='pt-10'>
            <button
              type='submit'
              className={`border rounded-[50px] py-3 px-10 w-[300px] ${isFormValid ? 'bg-gray-300 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
