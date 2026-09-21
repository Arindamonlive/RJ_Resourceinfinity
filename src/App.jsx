import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TermsAndConditions from "./Components/TermsAndConditions";
import Privacy from "./Components/PrivacyPolicy";
import Refund from "./Components/Refund";
import Courses from "./Components/Courses";
import Login from "./Components/Login";
import AdminCore from "./Components/AdminCore";
import EmpLogin from "./Components/Emp-Login";
import Employer from "./Components/Employer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 450); return () => clearTimeout(t); }, []);
  if (loading) return <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white"><div className="flex items-center gap-3 text-sm font-semibold"><LoaderCircle className="animate-spin text-blue-400"/> RJR Infinity</div></div>;
  return <Router><Nav/><Routes><Route path="/" element={<Banner/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="/T&C" element={<TermsAndConditions/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/refund" element={<Refund/>}/><Route path="/course" element={<Courses/>}/><Route path="/login" element={<Login/>}/><Route path="/portal/admincore" element={<AdminCore/>}/><Route path="/empcore-login" element={<EmpLogin/>}/><Route path="/empcore" element={<Employer/>}/></Routes><Footer/></Router>;
}
