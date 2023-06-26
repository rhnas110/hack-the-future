import React from 'react';
import './about.css'; // Import the CSS file
import aboutImg from "./Assets/img1.svg"

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-left-section">
                <h2 className='about-heading'>Welcome to our exhilarating hackathon!</h2>
                <p>
                    This is your chance to showcase your skills, push your limits, and create groundbreaking solutions.
                    Whether you're a coding aficionado, a design guru, or a visionary problem-solver, our hackathon
                    provides the perfect platform to unleash your creativity and make a lasting impact.
                </p>
                <p>
                    Our hackathon brings together a diverse community of developers, designers, and entrepreneurs who
                    share a common passion for technology and a drive for positive change. During this intense and
                    immersive event, you'll have the opportunity to work on real-world challenges, tackle cutting-edge
                    technologies, and collaborate with like-minded individuals.
                </p>
                <p>
                    We believe in the power of teamwork and encourage participants to form interdisciplinary teams. This
                    enables the blending of various skill sets and perspectives, fostering innovation and creating an
                    environment where you can learn from one another. Through teamwork, mentorship, and constant
                    support, you'll be able to transform your ideas into tangible prototypes or even fully functional
                    solutions.
                </p>
                <p>
                    Our hackathon also provides access to industry experts, mentors, and sponsors who will be available
                    to guide you throughout the event. You'll have the opportunity to gain valuable insights, expand
                    your professional network, and receive feedback on your projects. Additionally, there will be
                    workshops and speaker sessions covering the latest trends, technologies, and best practices.
                </p>
                <p>
                    Whether you're a seasoned hackathon veteran or a first-timer, we welcome you to join us for an
                    unforgettable experience. Together, let's create, innovate, and inspire!
                </p>
            </div>
            <div className="about-right-section">
                <img src={aboutImg} alt="Hackathon-Image" className="hackathon-image"/>
            </div>
        </div>
    );
};

export default AboutSection;
