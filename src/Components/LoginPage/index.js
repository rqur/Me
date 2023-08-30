import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

import React from "react";
function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(name, email);
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        {
          name,
          email, //withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log("Login successful:", response.data);
      // Handle successful login, navigate to search page
      history.push("/searchpage");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const HandleClick = () => {
    <Link to="/searchpage"></Link>;
  };
  return (
    <div className="login-container">
      <h1 className="login-heading">Fetch Dog Adoption</h1>
      <form id="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={HandleClick} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
