import React from 'react';
import './About.css'; // Import CSS file if needed

const About = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="left">Mahesh's Portfolio</div>
                    <div className="right">
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Services">Services</a></li>
                            <li><a href="/Projects">Projects</a></li>
                            <li><a href="/Contact">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container">
                    <h1>About Mahesh - Web Developer</h1>
                    <img src="/images/myimg1.jpg" alt="Mahesh's Photo" />
                    <br />
                    <br />
                    <p><strong>Introduction:</strong> I am Mahesh, a skilled full stack developer with a strong foundation in programming languages like C, C++, Java, and Python. My proficiency in PHP adds to my versatility, allowing me to create dynamic and robust web applications. My in-depth knowledge of these languages empowers me to tackle a wide range of development challenges with creativity and precision.</p>

                    <br />
                    <p><strong>Skills:</strong></p>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Full Stack Development</li>
                        <li>PHP</li>
                        <li>Data Structures</li>
                        <li>Computer Networks</li>
                        <li>Operating Systems</li>
                        <li>SQL</li>
                    </ul>
                    <br />
                    <p><strong>Achievements:</strong></p>
                    <ul>
                        <li>Rated as 3-star coder in CodeChef</li>
                        <li>Problem Solving Intermediate Certificate in HackerRank</li>
                        <li>TOP 30% in leetcode</li>
                    </ul>
                    <br />
                    <div className="contact">
                        <p>Contact:</p>
                        <p>Phone: <a href="tel:8688793503">8688793503</a></p>
                        <p>Email: <a href="mailto:nagamaheshkavuri@gmail.com">nagamaheshkavuri@gmail.com</a></p>
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Mahesh's Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
