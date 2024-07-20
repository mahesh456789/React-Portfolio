import React from 'react';
import './Contact.css'
function Contact() {
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
                    <h1>Contact Me</h1>
                    <p>Feel free to reach out to me using the contact information below. I'll get back to you as soon as possible!</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:nagamaheshkavuri@gmail.com">nagamaheshkavuri@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:8688793503">8688793503</a></p>
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Mahesh's Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
