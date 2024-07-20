import React from 'react';
import './Projects.css'
function Projects() {
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
                    <h1>Projects</h1>
                    <div className="project">
                        <h2>Career Guidance Platform</h2>
                        <p>An online platform developed with HTML, CSS, Bootstrap, and JavaScript, and PHP (backend) to provide career guidance resources.</p>
                        <a href="https://github.com/mahesh456789/Career-Guidance/">View Project</a>
                    </div>
                    <div className="project">
                        <h2>Chat-Application</h2>
                        <p>A Chat-Application built using HTML, CSS,Js,Jquery,bootstrap,and firebase technologies.</p>
                        <a href="https://github.com/mahesh456789/Chat-Application">View Project</a>
                    </div>
                    <div className="project">
                        <h2>E-commerce Website</h2>
                        <p>A shopping website developed with HTML, CSS, and JavaScript only frontend.</p>
                        <a href="https://github.com/mahesh456789/Ecommerce">View Project</a>
                    </div>
                    <div className="project">
                        <h2>Length Converter</h2>
                        <p>A length converter tool created using HTML, CSS, and JavaScript.</p>
                        <a href="https://github.com/mahesh456789/LengthConverter1/">View Project</a>
                    </div>
                    <div className="project">
                        <h2>BMI Calculator</h2>
                        <p>A BMI (Body Mass Index) calculator built using React for frontend and JavaScript for calculations.</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Mahesh's Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Projects;
