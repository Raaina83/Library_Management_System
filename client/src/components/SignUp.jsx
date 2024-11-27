import React, { useState } from "react";
import './SignUp.css';
// import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userType: "student", // default type
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    branch: "",
    year: "",
    profile: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // try {
    //   const response = await axios.post("/api/signup", formData);
    //   setSuccess(response.data.message); // Assuming your backend sends a message in response
    // } catch (err) {
    //   setError(err.response?.data?.message || "Signup failed");
    // }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="librarian">Librarian</option>
          </select>
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {formData.userType === "student" && (
          <>
            <label>
              Branch:
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Year:
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </label>
            <br />
          </>
        )}
        {formData.userType === "staff" && (
          <>
            <label>
              Profile:
              <input
                type="text"
                name="profile"
                value={formData.profile}
                onChange={handleChange}
              />
            </label>
            <br />
          </>
        )}
        {formData.userType === "librarian" && (
          <>
            <label>
              Profile:
              <input
                type="text"
                name="profile"
                value={formData.profile}
                onChange={handleChange}
              />
            </label>
            <br />
          </>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
