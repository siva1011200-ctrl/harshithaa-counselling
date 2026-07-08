import "./Services.css";

function Services() {
  return (
    <section className="services">

      <h2>Services Offered</h2>

      <div className="services-grid">

        <div className="service-card">
          <h3>1-to-1 Individual Sessions</h3>
          <p>
            A dedicated, confidential space just for you. Whether you're working through something specific or simply need a place to think out loud, individual sessions are tailored entirely around your needs and goals.
          </p>
        </div>

        <div className="service-card">
          <h3>Anxiety, Stress & Emotional Wellbeing</h3>
          <p>
            Support for anxiety, overthinking, worry patterns, intrusive thoughts, stress, and building emotional regulation and coping skills for everyday life.
          </p>
        </div>

        <div className="service-card">
          <h3>Self-Worth & Identity</h3>
          <p>
            Exploring self-esteem, self-confidence, identity, gender and sexuality-related concerns, and developing a stronger, clearer sense of who you are.
          </p>
        </div>

        <div className="service-card">
          <h3>Relationships & Interpersonal Challenges</h3>
          <p>
            Navigating attachment patterns, relationship difficulties, family dynamics, interpersonal conflict, and recovering from breakups or painful endings.
          </p>
        </div>

        <div className="service-card">
          <h3>Academic & Career Stress</h3>
          <p>
            Managing performance pressure, burnout, career confusion, and the emotional weight that comes with academic and professional life.
          </p>
        </div>

        <div className="service-card">
          <h3>Life Transitions & Personal Growth</h3>
          <p>
            Support through change, new beginnings, and the in-between spaces, helping you move forward with more clarity and confidence.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;