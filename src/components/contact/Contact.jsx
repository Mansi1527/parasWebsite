import React, { useRef } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { TbBrandLinkedin } from 'react-icons/tb'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2brvanj', 'template_p4sk9mg', form.current, 'sNz_VSNuRThkAWwL6')
            .then((result) => {
                alert("Message sent successfully");
                console.log("Email successfully sent", result.text);
            }, (error) => {
                alert("Message delivery failed");
                console.log("Email sending error", error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact' className='py-16'>
            <h5 className='text-lg xl:text-2xl'>Get In Touch</h5>
            <h2 className='mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10'>Contact Me</h2>

            <div className="flex flex-col lg:flex-row justify-between items-center px-4">
                <div className="md:w-1/3 space-y-6">
                    <article className="bg-[#79717A] p-6 rounded-xl shadow-md text-center transition hover:bg-transparent hover:border-white hover:border-2 h-full flex flex-col justify-between">
                        <HiOutlineMail className='text-3xl mb-3 text-primary' />
                        <h4 className="text-lg text-white">Email</h4>
                        <h5 className="text-sm text-white">bhardwajparas001@gmail.com</h5>
                        <a href="mailto:bhardwajparas001@gmail.com" className="text-sm text-orange-100 mt-2 inline-block underline" target="_blank">Send a message</a>
                    </article>

                    <article className="bg-[#79717A] p-6  px-[4.5rem] rounded-xl shadow-md text-center transition hover:bg-transparent hover:border-primary hover:border-2 h-full flex flex-col justify-between">
                        <FaWhatsapp className='text-3xl mb-3 text-primary' />
                        <h4 className="text-lg text-white">Whatsapp</h4>
                        <h5 className="text-sm text-white">Paras Bhardwaj</h5>
                        <a href="https://api.whatsapp.com/send/?phone=%2B918077431603&text&type=phone_number&app_absent=0" className="text-orange-100 underline text-sm mt-2 inline-block" target="_blank">Send a message</a>
                    </article>

                    <article className="bg-[#79717A] p-6 px-[4.5rem] rounded-xl shadow-md text-center transition hover:bg-transparent hover:border-primary hover:border-2 h-full flex flex-col justify-between">
                        <TbBrandLinkedin className='text-3xl mb-3 text-primary' />
                        <h4 className="text-lg text-white">Linkedin</h4>
                        <h5 className="text-sm text-white">Paras Bhardwaj</h5>
                        <a href="https://www.linkedin.com/in/paras-bhardwaj-579671209/" className="text-orange-100 text-sm mt-2 inline-block underline" target="_blank">Send a message</a>
                    </article>
                </div>

                {/* Form Section */}
                <div className="lg:w-2/3 mt-8 lg:mt-0 bg-transparent">
                <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-transparent">
    <input
        type="text"
        name='name'
        placeholder='Raymond Rhodes'
        required
        className="w-full p-4 bg-transparent border border-[#A68F97] rounded-md focus:outline-none placeholder:text-light"
    />
    <input
        type="email"
        name='email'
        placeholder='example@example.com'
        required
        className="w-full p-4 bg-transparent border border-[#A68F97] rounded-md focus:outline-none "
    />
    <textarea
        name='message'
        rows="7"
        placeholder='Hi Vu, I have a question...'
        required
        className="w-full p-4 bg-transparent border border-[#A68F97] rounded-md focus:outline-none  resize-none"
    />
    <button
        type='submit'
        className='w-full py-3 bg-primary text-black bg-[#A68F97] rounded-md hover:bg-white transition'
    >
        Send Message
    </button>
</form>


                </div>
            </div>
        </section>
    )
}

export default Contact;
