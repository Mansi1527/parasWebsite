import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
    return (
        <section id="services" className='flex flex-col  text-center mb-20'>
            <h5 className="text-lg xl:text-2xl">What I Know</h5>
            <h2 className="mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10">Learning and Achievement</h2>

            <div className="container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* start Mô tả chi tiết */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Information Assurance Learning Path</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Computer Networking</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Open Source Platform and Network Administration</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Risk Management in Information Systems</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Web Security</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Network Forensics</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Ethical Hacking and Offensive Security</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Incident Response and Management</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Vulnerability Assessment and Penetration Testing</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* start Mô tả chi tiết */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent  duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Achieve</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <a href="https://www.coursera.org/account/accomplishments/specialization/CZJ6HU2VDKJH" className="text-white underline">
                                <b>Google Cybersecurity Professional: </b> Certificate by Google
                            </a>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <a href="https://www.coursera.org/account/accomplishments/certificate/PH77QBUGLMZR" className="text-white underline">
                                <b>WireShark for Basic Network Security Analysis: </b> Certificate by Coursera
                            </a>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <a href="https://coursera.org/share/04db555a861030e1d39ab80ec1ddcbb5" className="text-white underline">
                                <b>Linux Basics The Command Line Interface: </b> Certificate by Dartmouth College
                            </a>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <a href="https://coursera.org/share/ca682c0554cac536035f5ae86b5988b3" className="text-white underline">
                                <b>Automate Cyber Security Tasks with Python: </b> Certificate by Google
                            </a>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* Mô tả chi tiết */}
                <article className="service bg-bg-variant rounded-b-lg border border-primary transition-all hover:bg-transparent  duration-700 hover:border-primary-variant">
                    <div className="service__head bg-primary p-8 rounded-b-lg shadow-xl">
                        <h3 className="text-bg text-xl text-center">Research Platform</h3>
                    </div>
                    <ul className="service__list p-8">
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Windows 7, 8 and 10</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Windows Server 2012 R2</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Kali Linux</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Ubuntu</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>ParrotOS</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Burp Suite</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Metasploit Framework</p>
                        </li>
                        <li className="flex gap-4 mb-3">
                            <BsCheckLg className="service__list-icon text-primary mt-0.5" />
                            <p>Android/IOS</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}
            </div>
        </section>
    );
};

export default Services;
