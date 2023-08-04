import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


const projectData = [
    {
        title: 'Great Knights Chess',
        description: "GreatKnightsChess.com is your one-stop destination for booking chess learning appointments. Whether you're a beginner or an experienced player, this platform offerspersonalized lessons from skilled instructors. Elevate your chess skills, strategy, and tactics while experiencing a user-friendly interface. Visit the website now to embark on an exciting journey of mastering the game of kings.",
        videoSrc: require('./images/chess.mp4'),
    },
    {
        title: 'Fantasy Senses',
        description: "FantasySenses.com is your ultimate online clothing store, offering a seamless shopping experience. Discover a vast collection of trendy and comfortable apparel for all occasions.With a user-friendly interface, browse through the latest fashion trends, from casual wear to formal attire, and find your perfect style. Visit the website now and indulge in a world of fashion at your fingertips.",
        imageSrc: require('./images/Animation2.gif'),
    },
    {
        title: 'Journal',
        description: "Journal is your go-to e-commerce site, offering an extensive range of products to satisfy all your shopping needs. From fashion and beauty to electronics and home essentials, it's a one-stop destination for convenient online shopping. With a user-friendly interface and secure transactions, explore a diverse selection of high-quality items and shop with confidence.",
        videoSrc: require('./images/Untitled.mp4'),
    },
    {
        title: 'E-Shopping',
        description: "E-Shopping is an innovative online platform offering a wide range of clothing and footwear options. Our user-friendly website provides customers with a seamless shopping experience, featuring the latest fashion trends and a secure payment system. E-Shopping is your go-to destination for stylish apparel and footwear, available at your fingertips.",
        videoSrc: require('./images/Animation5.mp4'),
    },
    {
        title: 'K & J Burns',
        description: "K & J Burns, a family-owned business led by Ken Timms & Jarrod Burns, offers dual-trade expertise in electrical and refrigeration services. With a strong focus on communication, cleanliness, and quality, we've earned clients' trust and satisfaction for over 30 years. Our 5-Star promise ensures reliability and excellence, making us a top choice in the industry.",
        videoSrc: require('./images/Animation3.mp4')
    },
    {
        title: 'UF Group of Companies',
        description: "UF Group of Companies is committed to tailored solutions that streamline logistics, cut costs, and boost efficiency. With a decade-long track record, we've earned the trust of global industrial leaders, becoming their go-to partners. Our unwavering dedication to excellence fuels your business success, solidifying us as a dependable industry choice.",
        videoSrc: require('./images/Animation4.mp4')
    }
];


const Projects = ({ projectSectionRef }) => {
    const projectPerRow = 3;
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projectData : projectData.slice(0, projectPerRow);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };


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
                            {visibleProjects.map((project, index) => (
                                <div className="col-lg-4 col-md-6 col-12 px-3" key={index}>
                                    <Card className='cdHeight' data-aos='zoom-in'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay={200 * (index + 1)}>
                                        <div className='cd-img'>
                                            {project.videoSrc ? (
                                                <video autoPlay muted>
                                                    <source src={project.videoSrc} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img src={project.imageSrc} alt="logo" />
                                            )}
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                            {projectData.length > projectPerRow && (
                                <div className='d-flex justify-content-center wow mt-5'>
                                    <Nav.Link id="loadMore" onClick={toggleShowAll}>
                                        {showAll ? "Show Less" : "Load More"}
                                    </Nav.Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
