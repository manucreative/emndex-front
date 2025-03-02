import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About(){
    const [hoveredBox, setHoveredBox] = useState(null);
    const [activeBox, setActiveBox] = useState(null);

    const handleTouch = (index) => {
        setActiveBox(activeBox === index ? null : index);
    };
    const handleMouseEnter = (index) => setHoveredBox(index);
    const handleMouseLeave = () => setHoveredBox(null);

    const [imageSrc, setImageSrc] = useState(
        window.innerWidth > 992
          ? "/assets/img/services/contact.png"
          : "/assets/img/footer2.jpg"
      );
    
      useEffect(() => {
        const handleResize = () => {
          setImageSrc(
            window.innerWidth > 992
              ? "/assets/img/services/contact.png"
              : "/assets/img/footer2.jpg"
          );
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div>
            <div className="breadcrumb-option tex-center" style={{ backgroundImage: `url('/assets/img/about/banner-long.jpg')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="neon-text neon-image">About Us</h1>
                            <div className="light-blue-text breadcrumb__links animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                                <Link href="#"><i className="fa fa-home"></i> Home</Link>
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <section className="about about--page spad my-bg-2">
           <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="about__pic text-center bg-box">
                    <img src={imageSrc} alt="Contact" />
                    </div>
                </div>
                <div className="col-lg-8 p-5">
                <div className="row">
                     <div className="col-12">
                            <div className="gradient-text-2 section-title">
                                <h2>Who We are and what we do</h2>
                            </div>
                        <p className="text-white">
                        Emndex Solution Ltd is a cutting-edge software development company specializing in Laravel, React, and Magento solutions. We build scalable web applications, custom APIs, and seamless system integrations to help businesses thrive in the digital age. With a passion for innovation, we deliver high-quality, user-friendly, and efficient software tailored to client needs. Our expertise spans e-commerce, fintech, and enterprise applications, ensuring robust and secure solutions. At Emndex, we prioritize excellence, collaboration, and customer satisfaction. Whether you need a custom web platform or advanced API development, we bring your vision to life with precision and creativity. Let’s build the future together!
                        </p>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="bg-box-1" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} onTouchStart={() => handleTouch(1)}>
                                    {hoveredBox === 1 || activeBox === 1 ? (
                                        <>
                                        <h4 className="neon-text-2 mb-2 gradient-underline">Software Development</h4>
                                        <p className="text-white">
                                            We build Scalable web applications from scratch to a big website withing a short period og time
                                            Our customers are happy 
                                        </p>
                                        </>
                                    ) : (
                                    <>
                                        <img src="/assets/img/icons/icon5.png" alt="" height={100}></img>
                                        <h4 className="light-blue-text mt-3">
                                        Software Development🚀
                                        </h4>
                                    </>
                                )}
                                    </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="bg-box-2" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} onTouchStart={() => handleTouch(2)}>
                                    {hoveredBox === 2 || activeBox === 2 ? (
                                        <>
                                        <h4 className="neon-text-2 mb-2 gradient-underline">Data Analisys</h4>
                                        <p className="text-white">
                                            We thourougly analize you application data to make sure everthing is well set. fdskjl sdsduwerwue jdzfouf idsfsoiduf sdufoiuodpoisdwif 
                                        </p>
                                        </>
                                    ) : (
                                    <>
                                        <img src="/assets/img/icons/icon1.png" alt="" height={100}></img>
                                        <h4 className="light-blue-text mt-2">
                                        Data Analisys🚀
                                        </h4>
                                    </>
                                )}
                                    </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="bg-box-3" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} onTouchStart={() => handleTouch(3)}>
                                    {hoveredBox === 3 || activeBox === 3 ? (
                                        <>
                                        <h4 className="neon-text-2 mb-2 gradient-underline">Graphic Design</h4>
                                        <p className="text-white">
                                            We give our best saevice in graphic design, from Logo creation, banners, image inhancement, motion graphjics
                                        </p>
                                        </>
                                    ) : (
                                        <>
                                    <img src="/assets/img/icons/icon8.png" alt="" height={100}></img>
                                        <h4 className="light-blue-text mt-2">
                                        Graphic Design🚀
                                        </h4>
                                        </>
                                    )}
                                    </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="bg-box-4" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} onTouchStart={() => handleTouch(4)}>
                                    {hoveredBox === 4 || activeBox === 4 ? (
                                        <>
                                            <h4 className="neon-text-2 mb-2 gradient-underline">Website Design</h4>
                                            <p className="text-white">
                                                We give our best saevice in graphic design, from Logo creation, banners, image inhancement, motion graphjics
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <img src="/assets/img/icons/icon4.png" alt="" height={100}></img>
                                            <h4 className="light-blue-text mt-2">
                                            Web Design🚀
                                            </h4>
                                        </>
                                    )}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section className="contact spad my-bg-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact__address">
                        <div className="section-title gradient-text">
                            <h2>Contact info</h2>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.</p>
                        <ul>
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <h5 className="gradient-text-2">Address</h5>
                                <p className="text-white">Los Angeles Gournadi, 1230 Bariasl</p>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                <h5 className="gradient-text-2">Hotline</h5>
                                <span className="text-white">1-677-124-44227</span>
                                <span className="text-white">1-688-356-66889</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <h5 className="gradient-text-2">Email</h5>
                                <p className="text-white">Support@gamail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact__form">
                        <div className="section-title gradient-text">
                            <h2>Get in touch</h2>
                        </div>
                        <p className="text-white">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <div className="contact-form-container">
                            <form action="#" className="neon-form">
                                <div className="input__list">
                                <input type="text" placeholder="Name" className="neon-input" />
                                <input type="text" placeholder="Email" className="neon-input" />
                                <input type="text" placeholder="Website" className="neon-input" />
                                </div>
                                <textarea placeholder="Comment" className="neon-textarea"></textarea>
                                <button type="submit" className="neon-border-btn">Send Message</button>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default About;