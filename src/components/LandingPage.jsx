import React from 'react'
import Typewriter from 'typewriter-effect';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import Footer from './Footer';
import Projects from './Projects';

const LandingPage = ({ aboutSectionRef, resumeSectionRef, homeSectionRef , projectSectionRef }) => {
    const facebookProfileUrl = "https://www.facebook.com/profile.php?id=100010944973798&mibextid=ZbWKwL";
    const linkdlnUrl = "https://www.linkedin.com/in/adeel-naveed-508830205/";
    const twitterUrl = "https://twitter.com/Adeel17125056?t=eZpNYBASa-2d0k2xnI_B2w&s=09";
    const instaUrl = "https://instagram.com/adeel7566?igshid=NGExMmI2YTkyZg==";
    const githubUrl = "https://github.com/Adew487";

    return (
        <>
            <section className='home' id='home' ref={homeSectionRef}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className='content-item'>
                                <p style={{ color: "#eaa62e", fontWeight: "700" }}>Hello! I AM</p>
                                <h1 className='mb-3'>
                                    <Typewriter
                                        className="my-5" // Add your desired class here
                                        options={{
                                            strings: ['Adeel Naveed', 'Front-End Web Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                                <p>Building simple and beautiful things for complex
                                    interfaces is what I enjoy most about my work. I am also interested in
                                    crafting beautiful minimal products and exploring new worlds.</p>
                                <div className='social-icons d-flex mt-4'>
                                    <ul>
                                        <li>
                                            <Link to={facebookProfileUrl} target="_blank" rel="noopener noreferrer" className='ms-0'><BiLogoFacebook className="icon" /></Link>
                                        </li>
                                        <li>
                                            <Link to={instaUrl} target="_blank" rel="noopener noreferrer"><BsInstagram className="icon" /></Link>
                                        </li>
                                        <li>
                                            <Link to={twitterUrl} target="_blank" rel="noopener noreferrer"><BsTwitter className="icon" /></Link>
                                        </li>
                                        <li>
                                            <Link to={linkdlnUrl} target="_blank" rel="noopener noreferrer"><BiLogoLinkedin className="icon" /></Link>
                                        </li>
                                        <li>
                                            <Link to={githubUrl} target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='shape1'>
                                    <img
                                        src={require('./images/shape1png.png')}
                                        alt="logo"
                                    />
                                </div>
                                <div className='shape2'>
                                    <img
                                        src={require('./images/shape2.png')}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-lg-0 mt-md-5 mt-4">
                            <div className='text-center'>
                                <img
                                    src={require('./images/adeel6.png')}
                                    alt="logo"
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About id="aboutme" aboutSectionRef={aboutSectionRef} />
            <Profile id="summary" resumeSectionRef={resumeSectionRef} />
            <Projects id="project" projectSectionRef={projectSectionRef} />
            <Footer/>
        </>
    )
}

export default LandingPage
