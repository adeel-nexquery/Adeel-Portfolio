import React from 'react'
import Card from 'react-bootstrap/Card';

const Projects = ({ projectSectionRef }) => {
    return (
        <section id='project' ref={projectSectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='about-item p-5'>
                            <div className='text-center'>
                                <span>Projects</span>
                                <h2 className='mt-2' data-aos='fade-up'
                                    data-aos-duration='800'
                                    data-aos-once='true'
                                    data-aos-delay='200'>Portfolio.</h2>
                            </div>
                        </div>
                        <div className='projects row gy-4'>
                            <div className="col-lg-4 col-md-6 col-12 px-3">
                                <Card className='cdHeight' data-aos='zoom-in'
                                    data-aos-duration='800'
                                    data-aos-once='true'
                                    data-aos-delay='200'>
                                    <div className='cd-img'>
                                        <video autoPlay muted>
                                            <source src={require('./images/chess.mp4')} type="video/mp4" />
                                        </video>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Great Knights Chess</Card.Title>
                                        <Card.Text>
                                            GreatKnightsChess.com is your one-stop destination
                                            for booking chess learning appointments. Whether you're
                                            a beginner or an experienced player, this platform offers
                                            personalized lessons from skilled instructors. Elevate
                                            your chess skills, strategy, and tactics while experiencing
                                            a user-friendly interface. Visit the website now to embark
                                            on an exciting journey of mastering the game of kings.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 px-3">
                                <Card className='cdHeight' data-aos='zoom-in'
                                    data-aos-duration='800'
                                    data-aos-once='true'
                                    data-aos-delay='300'>
                                    <div className='cd-img'>
                                        <img
                                            src={require('./images/Animation2.gif')}
                                            alt="logo"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Fantasy Senses</Card.Title>
                                        <Card.Text>
                                            FantasySenses.com is your ultimate online clothing store,
                                            offering a seamless shopping experience. Discover a vast
                                            collection of trendy and comfortable apparel for all occasions.
                                            With a user-friendly interface, browse through the latest
                                            fashion trends, from casual wear to formal attire, and find
                                            your perfect style. Visit the website now and indulge in a
                                            world of fashion at your fingertips.
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 px-3">
                                <Card className='cdHeight' data-aos='zoom-in'
                                    data-aos-duration='800'
                                    data-aos-once='true'
                                    data-aos-delay='400'>
                                    <div className='cd-img'>
                                        <video autoPlay muted>
                                            <source src={require('./images/Untitled.mp4')} type="video/mp4" />
                                        </video>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Journal</Card.Title>
                                        <Card.Text>
                                            Journal is your go-to e-commerce site, offering an extensive
                                            range of products to satisfy all your shopping needs. From
                                            fashion and beauty to electronics and home essentials, it's
                                            a one-stop destination for convenient online shopping. With
                                            a user-friendly interface and secure transactions, explore
                                            a diverse selection of high-quality items and shop with
                                            confidence.
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
