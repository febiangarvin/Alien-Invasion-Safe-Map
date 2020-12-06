import React, { Fragment } from 'react';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa"
import "../../css/home/disclaimer.css";
import pern from "../../img/pern.png"

const Disclaimer = () => {
    return (
        <Fragment>
            <div className="about">
                <h2>DISCLAIMER!</h2>
                <h4>THIS IS A PROTOTYPE WEBSITE. NOT A REAL WORLD LIVE MAP/DATA APPPLICATION.</h4>
                <br />
                <p>
                    I have, in no way, intent to steal nor to edit a data, image, locations, maps, etc. This is just a website for the developer's portfolio. Please use at your own risk.
                </p>
                <br />
            </div>

            <div className='mouse-center'>
                <div className='mouse-layout' />
                <p className='mouse-text'>Scroll Down</p>
            </div>

            <div className="about">
                <h2>GET TO KNOW THE DEVELOPER</h2>
                <br />
                <h4>
                    HELLO WORLD! My name is Febian Garvin Abidin!
                </h4>
                <p>
                    "Work hard, smart, and sincerely" has always been my principle. I graduated from University of Indonesia in 2018 and received a bachelor's degree in Geography in the focus of geographical information systems. Upon graduating, I have worked for private city development companies in a position on geographical information systems engineer and land surveys.
                    <br /><br />
                    In 2019, I have elevated my skills through a programming school. I learned the fundamentals of becoming a web & mobile developer and beyond. And on to this day, I am a full-time web developer and has made coding a hobby. However, I will never stop learning and will try to appreciate my life and always strive to be the best version of myself.
                <br /><br />
                </p>

                <div className="id-card">
                    <span className="id-surface"></span>
                    <h1>Febian Garvin Abidin</h1>
                    <h3>Hover Me!</h3>
                    <a className='fab fa-social' href='https://www.linkedin.com/in/febian-garvin-abidin-182a79171/'><FaLinkedin /></a>
                    <a className='fab fa-social' href='https://github.com/febiangarvin'><FaGithubSquare /></a>
                    <a className='fab fa-social' href="mailto:garvin.abidin@gmail.com"><FaEnvelope /></a>
                </div>

                <br />
            </div>

            <div className='timeline-container'>
                <h2>My Career</h2>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Jul 2018</h3>
                        <p>Geography Information Systems Engineer - PT. Shiddiq Sarana Mulya</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Oct 2018</h3>
                        <p>Geography Information Systems Engineer - PT. Handal Selaras</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Jan 2019</h3>
                        <p>Research and Development - PT. Buka Media Teknologi</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Jul 2020</h3>
                        <p>Web Developer - PT. Infimap Geospatial Sistem</p>
                    </div>
                </div>
            </div>

            <div className='timeline-container'>
                <h2>My Education</h2>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Elementary</h3>
                        <p>SDN Beji 06</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Junior Highschool</h3>
                        <p>SMPIT Ummul Quro</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Highschool</h3>
                        <p>SMAN 02 Depok (Science)</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Undergraduate - Bachelor of Science</h3>
                        <p>Geography, University of Indonesia</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Web and Mobile Programming Studies</h3>
                        <p>Purwadhika Digital Technology School</p>
                    </div>
                </div>
            </div>

            <div className='mouse-center'>
                <div className='mouse-layout' />
                <p className='mouse-text'>Scroll Down</p>
            </div>

            <div className="about">
                <h2>About the Website</h2>
                <h4>This website is best viewed in a screen resolution of 1920 x 1080. There might be some dislocations or errors when viewed in a different screen resolution.</h4>
                <br />
                <h4>
                    This project is built on a PERN Stack and was deployed in December 2020.
                </h4>
                <img src={pern} alt='' />
                <br /><br />

                <p>
                    There is also an admin page. The purpose of the admin is to add, edit, and delete areas that are in 3 different area types.
                    <br />
                    To become an admin, email me at <a href="mailto:garvin.abidin@gmail.com">garvin.abidin@gmail.com</a> to receive the admin's credentials.
                    </p>
                <br />
                <div className='glowing-button'>
                    <a href='/'>Back to Home</a>
                </div>
                <br /><br />
            </div>

        </Fragment>
    )
}

export default Disclaimer