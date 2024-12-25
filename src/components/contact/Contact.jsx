import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import {FaWhatsapp  } from 'react-icons/fa';

import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2brvanj', 'template_p4sk9mg', form.current, 'sNz_VSNuRThkAWwL6')
            .then((result) => {
                alert("message sent successfully")
                console.log("email successfully sent",result.text);
            }, (error) => {
                alert("message delivery failed")
                console.log("email sending error",error.text);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>bhardwajparas001@gmail.com</h5>
                        <a href="mailto:bhardwajparas001@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                    <FaWhatsapp  className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>Paras Bhardwaj</h5>
                        <a href="https://api.whatsapp.com/send/?phone=%2B918077431603&text&type=phone_number&app_absent=0" target="_blank">Send a message </a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Paras bhardwaj</h5>
                        <a href="https://www.linkedin.com/in/paras-bhardwaj-579671209/" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Raymond Rhodes' required />
                    <input type="email" name='email' placeholder='example@example.com' required />
                    <textarea name='message' rows="7" placeholder='Hi Vu, I have a question...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact