import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
function App() {
  const currentPath = window.location.pathname;
  let navbarComponent;
  if (currentPath === '/Contact') {
    navbarComponent = <Contact />;
  } else if (currentPath === '/About') {
    navbarComponent = <About />;
  }
  else if (currentPath === '/Services') {
    navbarComponent = <Services />;
  }
  else if (currentPath === '/Projects') {
    navbarComponent = <Projects />;
  }
  else{
    navbarComponent = <Home />;
  }
  return (
    <div>
      {navbarComponent}
    </div>
  )
}

export default App;