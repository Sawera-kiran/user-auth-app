import { useState } from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import "../../styles/Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://user-auth-backend-production-0b6a.up.railway.app/api/login", {
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
        <h2>Login</h2>

        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;