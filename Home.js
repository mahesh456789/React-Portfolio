// App.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';
function Home() {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editor'],
      typeSpeed: 50,
    });
  }, []);
  
  return (
    <div>
      <header>
        <nav>
          <div className="left">Mahesh's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="Home">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Projects">Projects</a></li>
              <li><a href="/Contact">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {/* Home Page */}
        <section className="firstSection">
          <div className="leftSection">
            <p>Hi, My name is <span className="purple">Mahesh</span> and I am a Passionate</p>
            <span id="element"></span>
            <div className="buttons">
              <a href="https://flowcv.com/resume/7ojk8sjulu"><button className="btn">Download Resume</button></a>
              <a href="https://github.com/mahesh456789"><button className="btn">Visit Github</button></a>
            </div>
          </div>
          <div className="rightSection">
            <img className="pp" src="images/myimg.jpeg" alt="no-text" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far</span>
          <h1>Work Experience</h1>
          <div className="box">
            {/* HTML Developer */}
            <div className="vertical">
              <img src="/images/img2.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                HTML Developer - (2021-2022)
              </div>
              <div className="vertical-desc">
                Proficient in creating semantic and accessible HTML markup for building web pages and applications.
              </div>
            </div>
            {/* CSS Developer */}
            <div className="vertical">
              <img src="/images/img3.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                CSS Developer - (2022-2023)
              </div>
              <div className="vertical-desc">
                Skilled in crafting responsive and visually appealing user interfaces using CSS styling techniques and frameworks.
              </div>
            </div>
            {/* JS Developer */}
            <div className="vertical">
              <img src="/images/img4.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                JS Developer - (2022-2023)
              </div>
              <div className="vertical-desc">
                Experienced in developing interactive and dynamic web experiences using JavaScript, including DOM manipulation and event handling.
              </div>
            </div>
            {/* React Developer */}
            <div className="vertical">
              <img src="/images/img5.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                React Developer - (2022-2023)
              </div>
              <div className="vertical-desc">
                Proficient in developing modern single-page applications (SPAs) and reusable UI components using React library, along with state management solutions like Redux or Context API.
              </div>
            </div>
            {/* Node JS with Express JS */}
            <div className="vertical">
              <img src="/images/img6.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                Node JS with Express JS - (2023-2024)
              </div>
              <div className="vertical-desc">
                Experienced in building scalable and efficient server-side applications using Node.js runtime and Express.js framework for routing and middleware.
              </div>
            </div>
            {/* PHP Developer */}
            <div className="vertical">
              <img src="/images/img7.jpg" alt="No text" className="image-top" />
              <div className="vertical-title">
                PHP Developer - (2023-2024)
              </div>
              <div className="vertical-desc">
                Proficient in server-side scripting with PHP, including building dynamic web pages, handling form submissions, and interacting with databases like MySQL for backend development.
              </div>
            </div>
          </div>

        </section>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Mahesh's Developer Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-third">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-fourth">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-rights">
          <img src="images/img8.jpg" alt="Rights Reserved" />
          <span>Copyright By @mahesh | All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;