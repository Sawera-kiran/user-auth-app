import "../../styles/auth.css";
import "../../styles/Register.css";
import { useState } from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn">Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;