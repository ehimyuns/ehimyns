import React, { useEffect } from 'react';
import './About.css';
import AboutImage from './image.png'; // Make sure to replace with your image path

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = document.querySelector('.image-container');
      if (window.scrollY > 0) {
        imageContainer.classList.add('scrolled');
      } else {
        imageContainer.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about">
      <div className="image-container">
        <img src={AboutImage} alt="About" className="about-image" />
      </div>
      <div class="text">
        <p>I’ve spent a couple of decades creating brands and digital products and obsessing over what makes them
          fly. I have a creative studio called <u>The Workshop</u> and invest in early-stage ventures.</p>
        <p id="text-bold">I partner with visionary founders and design-led capital on the ideas that shape our collective future.</p>
        <p>My work helps companies make strategic decisions in their foundational stages and leverage their position in the market.
          Over the past two years, I've helped build four startups leading to over $55M in investment.</p>
      </div>
      <div class="Boxes">
        <h1 id="text-new">Here’s what you can expect from me...</h1>
        <h2 id="one">I’ll bring years of experience, big energy and fresh thinking.</h2>
        <h2 id="two">Listen, challenge and reconnect the dots — joining your team with conviction and openness.</h2>
        <h2 id="three">Bridge the gap between creative and commercial objectives — speaking both languages.</h2>
        <h2 id="four">Recognise potential — pushing brands to become better than you ever thought possible.</h2>
        <h2 id="five">Giving you the foundations to scale — from world-class design and advisory to building your future team.</h2>
        <h2 id="six">Teach teams to move at velocity and have a hell of a lot of fun doing it.</h2>
      </div>
    </section>
  );
}

export default About;
