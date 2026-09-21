import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmpLogin =()=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    if (username === "ITES-022" && password === "Clin35gh8") {
  const sessionId = Date.now(); // simple timestamp
  const expires = new Date(Date.now() + 15 * 60 * 1000).toUTCString();

  document.cookie = `session_user=employee; expires=${expires}; path=/`;
  localStorage.setItem("session_user", "employee");
  localStorage.setItem("session_id", sessionId);

  navigate("/empcore");
}

    // // Replace this check with your desired credentials
    // if (username === "employee" && password === "rjr123") {
    //   // Set session cookie for 15 minutes
    //   const expires = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
    //   document.cookie = `session_user=employee; expires=${expires}; path=/`;

    //   // Redirect to employee portal
    //   navigate("/portal/empcore/emp-port");
    // } 
    else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const sessionCookie = cookies.find((c) => c.startsWith("session_user="));
    if (sessionCookie && sessionCookie.includes("employee")) {
      navigate("/empcore");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Team Login</h2>
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
export default EmpLogin;