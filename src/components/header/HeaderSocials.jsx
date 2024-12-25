import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaWhatsapp, FaMedium } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials ">
      <a href="https://www.linkedin.com/in/paras-bhardwaj-579671209/" target="_blank" rel="noreferrer">
        <BsLinkedin className='lg:size-6 md:size-4 xl:size-7 '/>
      </a>
      <a href="https://github.com/mazer0P" target="_blank" rel="noreferrer">
        <FaGithub className='lg:size-6 md:size-4 xl:size-7'/>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B918077431603&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className='lg:size-6 md:size-4 xl:size-7'/>
      </a>
      <a href="https://medium.com/@bhardwajparas001" target="_blank" rel="noreferrer">
        <FaMedium className='lg:size-6 md:size-4 xl:size-7'/>
      </a>
    </div>
  );
};

export default HeaderSocials;
