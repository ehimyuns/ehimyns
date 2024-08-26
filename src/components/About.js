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
    </section>
  );
}

export default About;
