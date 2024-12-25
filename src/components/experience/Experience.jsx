import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience' className='mb-20'>
            <h5 className='text-lg xl:text-2xl'>What Skill I Have</h5>
            <h2 className='mt-5 text-4xl lg:text-5xl xl:text-6xl mb-10'>My Experience</h2>

            <div className="container mt-10 space-y-10 grid md:gap-8 lg:gap-20 xl:gap-20 md:grid-cols-2 ">
            <div className="bg-[#79717A] p-8 rounded-2xl border border-transparent  duration-700 transition-all hover:bg-transparent hover:border-white">

                    <h3 className="text-center mb-6 text-primary">Language</h3>
                    <div className="experience__content grid grid-cols-2 gap-4">
                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Bash</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Practitioner</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of frontend */}

                <div className=" bg-[#79717A]  duration-700  p-8 rounded-2xl border border-transparent transition-all hover:bg-transparent hover:border-white">
                    <h3 className="text-center mb-6 text-primary">Technology and Tool</h3>
                    <div className="experience__content grid grid-cols-2 gap-4">
                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Nmap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Wireshark</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Metasploit</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>BurpSuite</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Github</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Splunk</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>Google Chronicle</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details flex gap-4">
                            <BsPatchCheckFill className="text-primary mt-1" />
                            <div>
                                <h4>SQL Map</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of backend */}
            </div>
        </section>
    )
}

export default Experience
