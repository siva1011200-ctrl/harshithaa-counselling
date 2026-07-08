import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import AppointmentBooking from "./components/AppointmentBooking";

import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <Hero />
      </section>

      <section id="about" className="fade-in">
        <div className="container card">
          <About />
        </div>
      </section>

      <section id="services" className="fade-in">
        <div className="container">
          <Services />
        </div>
      </section>

      <section id="booking">
        <div className="container card">
          <BookingForm />
        </div>
      </section>

      <section id="contact" className="fade-in">
        <div className="container card">
          <h2>Contact Details</h2>
          <p>📧 harshithaajanu@gmail.com</p>
          <p>📞 9361319855</p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/appointment" element={<AppointmentBooking />} />

      {/* GitHub Pages fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}