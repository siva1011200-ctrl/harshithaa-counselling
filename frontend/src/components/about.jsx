import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      
      <div className="about-container">

        <p className="about-tag">About Me</p>

        <h2 className="about-title">
          Hi, I'm Harshithaa, a counselling psychologist.
        </h2>

        <div className="about-content">

          <p>
            I started this work because I believe that struggling doesn't have to look a certain way to deserve support. 
            You don't need to be in crisis to reach out. Whether you're feeling stuck, overwhelmed, unsure of yourself, 
            or simply carrying something you haven't been able to put into words yet, that's enough of a reason to begin.
          </p>

          <p>
            My approach is gentle and collaborative. I don't believe in rushing the process or having all the answers 
            handed to you. Instead, we work at your pace, exploring what's going on beneath the surface, understanding 
            your patterns, and finding what actually works for you. I draw from Cognitive Behavioural Therapy (CBT), 
            Person-Centred Therapy, and Gestalt, weaving these together based on what feels most relevant and helpful 
            for you as an individual.
          </p>

          <p>
            My goal is simple: for you to leave each session feeling a little more seen, a little more understood, 
            and a little more equipped to navigate what's ahead.
          </p>

          <p className="highlight">
            This is your space. You set the pace.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;