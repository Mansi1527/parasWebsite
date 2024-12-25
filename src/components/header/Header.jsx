import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/img1.avif';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center lg:mt-12 xl:mt-20 md:mt-20 relative'>
    <div className="flex flex-col justify-center items-center ">
        <h5 className='xl:text-2xl lg:text-xl text-light'>Hello I'm</h5>
        <h1 className='xl:text-8xl lg:text-7xl md:text-4.5xl lg:mt-5'>Paras Bhardwaj</h1>
        <h5 className="text-light lg:text-xl xl:text-2xl lg:mt-5">Fresher Security Engineer</h5>
    </div>
        <CTA />
        <HeaderSocials className=""/>
        <div className="my-10 px-20 ">
          <img src={ME} alt="me" width={100} className="w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[60rem] "  />
        </div>
        
      
     
    </header>
  );
};

export default Header;
