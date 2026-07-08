import { useState } from "react";

export default function AppointmentBooking() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    session: "Online",
    days: "",
    time: "",
    concern: "",
    source: "",
    note: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (!form.consent) {
      alert("Please accept consent to continue");
      return;
    }

    const message = `
📅 Appointment Booking

Name: ${form.name}
Age: ${form.age}
Email: ${form.email}
Phone: ${form.phone}

Session: ${form.session}
Days: ${form.days}
Time: ${form.time}

Area of Concern:
${form.concern}

How did you hear about us?
${form.source}

Note:
${form.note}

Consent: Yes
`;

    // WhatsApp open
    window.open(
      `https://wa.me/919361319855?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Google Form open after WhatsApp
    setTimeout(() => {
      window.open("https://forms.gle/9qJjTz4r3dAWKn6F9", "_blank");
    }, 1500);
  };

  return (
    <div className="appointment-container">
      <h2>Appointment Booking Form</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <select name="session" value={form.session} onChange={handleChange}>
        <option value="Online">Online</option>
      </select>

      <select name="days" value={form.days} onChange={handleChange}>
        <option value="">Preferred Days</option>
        <option value="Mon">Mon</option>
        <option value="Tue">Tue</option>
        <option value="Wed">Wed</option>
        <option value="Thu">Thu</option>
        <option value="Fri">Fri</option>
        <option value="Sat">Sat</option>
      </select>

      <select name="time" value={form.time} onChange={handleChange}>
        <option value="">Preferred Time Slot</option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>

      <textarea
        name="concern"
        placeholder="Area of Concern"
        value={form.concern}
        onChange={handleChange}
      />

      <input
        name="source"
        placeholder="How did you hear about us? (optional)"
        value={form.source}
        onChange={handleChange}
      />

      <textarea
        name="note"
        placeholder="Brief note (optional)"
        value={form.note}
        onChange={handleChange}
      />

      <label className="consent">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
        />
        I understand this is not a crisis service and my information is confidential
      </label>

      <button onClick={handleSubmit}>
        Submit Booking
      </button>
      <button
  type="button"
  onClick={() => window.open("https://forms.gle/9qJjTz4r3dAWKn6F9", "_blank")}
  className="primary-btn"
>
  Continue to Google Form
</button>
    </div>
  );
}