import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h3>Harshithaa Counselling</h3>
          <p>
            A safe space to heal, grow, and thrive at your own pace.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: harshithaajanu@gmail.com</p>
          <p>Phone: 93613 19855</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Harshithaa Counselling. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;