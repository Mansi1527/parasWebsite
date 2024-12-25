import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Learning and Achievement</h2>

            <div className="container services__containter">
                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Information Assurance Learning Path</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Computer Networking</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Open Source Platform and Network Administration</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Risk Management in Information Systems</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Web Security</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Network Forensics</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ethical Hacking and Offensive Security</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Incident Response and Management</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Vulnerability Assesement and Penetration Testing</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Achieve</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <a href='https://www.coursera.org/account/accomplishments/specialization/CZJ6HU2VDKJH' style={{color:"white" }}><b style={{textDecoration:"underline"}}>Google Cybersecurity Professional: </b>Certificate by Google</a>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <a href='https://www.coursera.org/account/accomplishments/certificate/PH77QBUGLMZR' style={{color:"white" }}><b style={{textDecoration:"underline"}}>WireShark for Basic Network Security Analysis: </b> Certificate by Coursera</a>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <a href='https://coursera.org/share/04db555a861030e1d39ab80ec1ddcbb5' style={{color:"white" }}><b style={{textDecoration:"underline"}}> Linux Basics The Command line interface : </b> Certificate by DartMouth college</a>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <a href='https://coursera.org/share/ca682c0554cac536035f5ae86b5988b3' style={{color:"white" }}><b style={{textDecoration:"underline"}}> Automate cyber security task with python : </b> Certificate by Google</a>
                        </li>
                        
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Research Platform</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows 7, 8 and 10</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows Server 2012 r2 </p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Kali Linux</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ubuntu</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>ParrotOS</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Burp Suite</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Metasploit Framework</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Android/IOS</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

            </div>
        </section>
    )
}

export default Services