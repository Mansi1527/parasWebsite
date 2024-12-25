import React from 'react';
import ME from '../../assets/me-about.jpeg';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <div id="about" className="mt-5 mb-20 md:mt-20 px-4">
            <h5 className="text-lg text-light xl:text-2xl">Get To Know</h5>
            <h2 className="mt-5 text-4xl lg:text-5xl xl:text-6xl text-[#A68F97]">About Me</h2>
            <div className="grid gap-6 mt-10 md:grid-cols-[45%,40%] xl:grid-cols-[35%,50%] lg:grid-cols-[35%,50%] sm:grid-cols-1">
                {/* Image container: Hidden on mobile screens */}
                <div className="p-3 aspect-square rounded-lg bg-gradient-to-r from-transparent via-primary to-black grid place-items-center bg-[#A68F97] hidden sm:block">
                    <div className="overflow-hidden rounded-lg h-full md:w-[20rem] lg:w-96 lg:h-96 transform rotate-12 transition-transform hover:rotate-0 duration-700">
                        <img src={ME} alt="About Me" className="w-full h-full object-cover " />
                    </div>
                </div>

                <div className="space-y-6 lg:space-x-10">
                    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <FaAward className="mb-4 text-xl text-primary" />
                            <h5 className="text-sm font-semibold">Level</h5>
                            <small className="text-xs text-light">Fresher</small>
                        </div>
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <TbCertificate className="mb-4 text-xl text-primary" />
                          
                            <h5 className="text-sm font-semibold">Certificate</h5>
                            <small className="text-xs flex text-light mt-1">+11 Certificates</small>
                        
                            
                        </div>
                        <div className="p-6 text-center transition border rounded-lg bg-bg-variant border-transparent hover:bg-transparent hover:border-primary">
                            <VscFolderLibrary className="mb-4 text-xl text-primary" />
                            <h5 className="text-sm font-semibold">Projects</h5>
                            <small className="text-xs text-light block mt-1">+4 Completed</small>
                            <small className="text-xs text-light block mt-1">+1 Ongoing</small>
                        </div>
                    </div>
                    <p className="text-light md:text-sm md:ml-5 md:text-left text-center">
                        I am a cautious and perfectionist person. Desire to be a member of the Pentest Team. In the next 5
                        years, I will be a Professional Pentester and have CEH, and CISSP certificates. I own multiple
                        certifications from online learning platforms like Coursera, Google, IBM . . . and a few soft skills
                        certificates.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
