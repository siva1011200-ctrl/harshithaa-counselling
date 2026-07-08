import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const navigate = useNavigate();

  return (
    <section id="booking" className="booking">
      <h2>Book Your Session</h2>

      <p>
        Ready to begin your journey towards better mental well-being?
        Click the button below to continue booking.
      </p>

      <button
        className="book-btn"
        onClick={() => navigate("/appointment")}
      >
        Book Appointment
      </button>
    </section>
  );
}

export default BookingForm;