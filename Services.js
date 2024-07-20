import React from 'react';

function Services() {
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
                    <p>
                        Welcome! I am Mahesh, a passionate web developer dedicated to crafting stunning and functional websites.
                        With a solid foundation in programming languages like C, C++, Java, and Python, combined with expertise in PHP and SQL,
                        I bring creativity and precision to every project.
                        My goal is to create dynamic, user-friendly web experiences that exceed expectations and drive success for my clients.
                    </p>
                    <p><strong>Services:</strong></p>
                    <ul>
                        <li>Website Development</li>
                        <li>Web Application Development</li>
                        <li>E-commerce Solutions</li>
                        <li>Content Management Systems (CMS)</li>
                        <li>Web Hosting and Maintenance</li>
                    </ul>

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

export default Services;
