import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from './ProgressBar';


const Profile = ({ resumeSectionRef }) => {

    return (
        <section id='summary' ref={resumeSectionRef}>
            <div className="container" >
                <div className="row">
                    <div className="about-item p-5">
                        <div className='text-center mb-5'>
                            <span>Resume</span>
                            <h2 className='mt-2' data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-delay='200'>A summary of My Resume</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 pe-5">
                        <div className='re-data' id='bdPm' data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='300'
                        >
                            <h2 className='mb-lg-4 mb-md-4 mb-4'>My Education</h2>
                            <div className='border-start border-2 border-primary ps-3'>
                                <h3>Bachelor of Business & Information Technology</h3>
                                <h6 className='mb-0'>University of Engineering and Technology, Lahore</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2019 - 2023</small>
                                <p className='mt-1'>I graduated in 2023 with a Bachelor's in Business Information Technology (BBIT).
                                    During my academic journey from 2019 to 2023, I gained valuable insights into
                                    the world of technology, business processes, and data management, preparing me
                                    for a promising career in the dynamic field of IT and business integration.</p>
                                <hr className='my-4' />
                                <h3>Fsc. Pre Engineering</h3>
                                <h6 className='mb-0'>Govt. M.A.O College, Lahore</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2017 - 2019</small>
                                <p className='mt-1'>I successfully completed my FSc Pre-Engineering from Govt. M.A.O College, Lahore.
                                    Throughout my time at the institution, I acquired a strong foundation in mathematics,
                                    physics, and chemistry, laying the groundwork for my passion in the field of engineering
                                    and paving the way for further academic and professional pursuits..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                        <div className='re-data' id='bdPm' data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='400'>
                            <h2 className='mb-lg-4 mb-md-4 mb-4'>My Experience</h2>
                            <div className='border-start border-2 border-primary ps-3'>
                                <h3>Jr. Front End Developer</h3>
                                <h6 className='mb-0'>NexQuery (Pvt) Ltd</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2022 - Present</small>
                                <p className='mt-1'>As a junior frontend developer, I possess hands-on experience in HTML, CSS,
                                    JavaScript, ReactJS, Bootstrap, Tailwind CSS, and Sass. My skill set enables
                                    me to create engaging and responsive user interfaces, contribute to web development
                                    projects, and continually expand my knowledge to deliver innovative digital solutions.</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="re-data">
                        <h2 className='mb-4' data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                        >My Skills</h2>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 pe-lg-5">
                                <div className='pgbar pe-2' >
                                    <div className='col-12 web' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='300'>
                                        <ProgressBar label="Web Design"
                                            visualParts={[
                                                {
                                                    percentage: "90%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                    <div className='col-12 mt-4 js' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='400'>
                                        <ProgressBar label="Javascript"
                                            visualParts={[
                                                {
                                                    percentage: "70%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                    <div className='col-12 mt-4 react' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='500'>
                                        <ProgressBar label="React Js"
                                            visualParts={[
                                                {
                                                    percentage: "70%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-3 ps-lg-5">
                                <div className='pgbar px-lg-2 px-md-2 pe-2'>
                                    <div className='col-12 html' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='300'>
                                        <ProgressBar label="HTML/CSS"
                                            visualParts={[
                                                {
                                                    percentage: "95%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                    <div className='col-12 mt-4 boot' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='400'>
                                        <ProgressBar label="Bootstrap"
                                            visualParts={[
                                                {
                                                    percentage: "95%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                    <div className='col-12 mt-4 sass' data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='500'>
                                        <ProgressBar label="Sass"
                                            visualParts={[
                                                {
                                                    percentage: "97%",
                                                    color: "#ecbf4f"
                                                }
                                            ]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center wow'>
                    <Nav.Link as="a" download="AdeelNaveed.pdf" href={'AdeelNaveed.pdf'} id="resume">Download Resume</Nav.Link>
                </div>
            </div>
        </section >
    )
}

export default Profile
