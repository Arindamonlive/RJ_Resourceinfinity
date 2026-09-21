import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://end.tripuradurgapuja.com/api/login/", {
        username,
        password,
      });

      if (res.data.message === "admin") {
        localStorage.setItem("user", "admin");
        navigate("/portal/admincore");
      } else if (res.data.message === "adminextend") {
        localStorage.setItem("user", "adminextend");
        navigate("/portal/adminextend");
      } else {
        setError("Unexpected response");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  // If already logged in, redirect directly
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "admin") {
      navigate("/portal/admincore");
    } else if (user === "adminextend") {
      navigate("/portal/adminextend");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
