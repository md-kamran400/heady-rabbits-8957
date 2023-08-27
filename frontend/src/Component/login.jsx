
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Signup from "./signup";

 import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://projectapi-by-anurag.onrender.com/users/login",
        { email, password }
      );

      // Assuming the API returns an authentication token
      const authToken = response.data.token;
      setAuthToken(authToken);
      setError("");
      // navigate("/"); 
      // console.log(authToken);
    } catch (error) {
      setError("Invalid email or password.");
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    setAuthToken(null);
  };

  return (
    <div className="login-container">
      {!authToken ? (
        <div className="login-form">
          <div className="form-heading">
            <b className="specal-text">LOGIN</b>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="input-label">
              EMAIL:
              <br />
              <input
                className="input-field"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="input-label">
              PASSWORD:
              <br />
              <input
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="submit-button" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "LOGIN"}
            </button>
            {error && <p className="error-text">{error}</p>}
          </form>
          {/* <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>.
          </p> */}
        </div>
      ) : (
        <div>
          <h1>Welcome! You're logged in.</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;