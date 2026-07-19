import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ type = "text", name, placeholder, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="input-wrapper">
      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
        required
      />

      {isPassword && (
        <span
          className="toggle-eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
}

export default Input;