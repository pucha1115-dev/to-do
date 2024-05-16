/* eslint-disable react/prop-types */
// PasswordResetConfirmForm.js

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordResetConfirmPage = ({ token }) => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!isPasswordValid(newPassword)) {
      console.log("not valid");
      setMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/password-reset-confirm/", {
        token,
        new_password: newPassword,
      });
      setMessage(
        "Password has been reset successfully. Redirecting to Login Page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="password-reset-container">
        <h2>Password Reset Confirmation</h2>
        <div className="task-field">
          <input
            className="input-field"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            className="task-entry-button"
            disabled={newPassword === "" ? true : false}
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
        <p className="mt-3 text-danger">{message}</p>
      </div>
    </>
  );
};

export default PasswordResetConfirmPage;
