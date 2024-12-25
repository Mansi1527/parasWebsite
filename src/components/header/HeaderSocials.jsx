import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub,FaWhatsapp,FaMedium } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/paras-bhardwaj-579671209/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/mazer0P" target="_blank"><FaGithub /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B918077431603&text&type=phone_number&app_absent=0" target="_blank" ><FaWhatsapp /></a>
            <a href="https://medium.com/@bhardwajparas001"><FaMedium /></a>
            
        </div>
    )
}

export default HeaderSocials