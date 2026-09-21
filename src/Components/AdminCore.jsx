import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tile = ({ title, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white flex-1 mx-2
      flex items-center justify-center font-semibold text-lg
      px-6 py-6 select-none
      ${isOpen ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-white text-gray-800'}
    `}
  >
    <span>{title}</span>
    <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
  </div>
);

const AdminCore = () => {
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openTile, setOpenTile] = useState(null);

  const toggleTile = (tileName) => {
    setOpenTile(openTile === tileName ? null : tileName);
  };

  const fetchData = async () => {
    try {
      const [contactRes, serviceRes, projectRes] = await Promise.all([
        axios.get("https://end.tripuradurgapuja.com/api/contact/"),
        axios.get("https://end.tripuradurgapuja.com/api/contactservice/"),
        axios.get("https://end.tripuradurgapuja.com/api/verifypayment/")
      ]);
      setContacts(contactRes.data);
      setServices(serviceRes.data);
      setProjects(projectRes.data);
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== "admin") {
      window.location.href = "/login";
      return;
    }
    fetchData();

    let idleTimer = setTimeout(() => {
      alert("Session expired due to inactivity. Logging out.");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }, 15 * 60 * 1000);

    const resetTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        alert("Session expired due to inactivity. Logging out.");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }, 15 * 60 * 1000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  // Render expanded content based on which tile is open
  const renderExpandedContent = () => {
    switch (openTile) {
      case 'contact':
        return contacts.length === 0 ? <p className="p-4">No queries found.</p> : (
          <div className="p-4 space-y-4 max-h-[60vh] overflow-auto bg-white rounded-b-xl shadow-inner border-t border-gray-200">
            {contacts.map(contact => (
              <div key={contact.id} className="border-b pb-2">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Contact:</strong> {contact.phone}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <p className="text-sm text-gray-500">{contact.submitted_at}</p>
              </div>
            ))}
          </div>
        );
      case 'services':
        return services.length === 0 ? <p className="p-4">No service requests.</p> : (
          <div className="p-4 space-y-4 max-h-[60vh] overflow-auto bg-white rounded-b-xl shadow-inner border-t border-gray-200">
            {services.map(service => (
              <div key={service.id} className="border-b pb-2">
                <p><strong>Service:</strong> {service.service}</p>
                <p><strong>Name:</strong> {service.name}</p>
                <p><strong>Email:</strong> {service.email}</p>
                <p><strong>Contact:</strong> {service.contact}</p>
                <p><strong>Message:</strong> {service.message}</p>
                <p className="text-sm text-gray-500">{service.submitted_at}</p>
              </div>
            ))}
          </div>
        );
      case 'projects':
        return projects.length === 0 ? <p className="p-4">No training records.</p> : (
          <div className="p-4 space-y-4 max-h-[60vh] overflow-auto bg-white rounded-b-xl shadow-inner border-t border-gray-200">
  {projects.map((proj, i) => {
    // Extract phone number from name string using RegExp
    const phoneMatch = proj.name.match(/\(\*\*Phone-->\s*(.*?)\)/);
    const extractedPhone = phoneMatch ? phoneMatch[1] : "N/A";

    // Clean name (remove the phone from display)
    const cleanName = proj.name.replace(/\s*\(\*\*Phone-->.*?\)/, "").trim();

    return (
      <div key={i} className="border-b pb-2">
        <p><strong>Name:</strong> {cleanName}</p>
        <p><strong>Email:</strong> {proj.email}</p>
        <p><strong>Contact:</strong> {extractedPhone}</p>
        <p><strong>Course:</strong> {proj.course_name}</p>
        <p><strong>Fee:</strong> ₹{proj.fee}</p>
        <p className="text-sm text-gray-500">{proj.date}</p>
      </div>
    );
  })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
        >
          Logout
        </button>
      </div>

      {/* Tiles Row */}
      <div className="flex max-w-7xl mx-auto mb-2">
        <Tile
          title="📩 Write to Us Queries"
          isOpen={openTile === "contact"}
          onClick={() => toggleTile("contact")}
        />
        <Tile
          title="🛠️ Service Requests"
          isOpen={openTile === "services"}
          onClick={() => toggleTile("services")}
        />
        <Tile
          title="🎓 Training & Projects"
          isOpen={openTile === "projects"}
          onClick={() => toggleTile("projects")}
        />
      </div>

      {/* Expanded content below covering full width */}
      <div className="max-w-7xl mx-auto">{renderExpandedContent()}</div>
    </div>
  );
};

export default AdminCore;
