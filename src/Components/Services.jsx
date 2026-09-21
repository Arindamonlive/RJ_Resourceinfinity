import React, { useState } from "react";
import axios from "axios";
import { ArrowRight, Bot, CloudCog, Code2, GraduationCap, HeartPulse, Layers3, UsersRound, X } from "lucide-react";

const solutionData = [
  { icon: GraduationCap, title: "Academic ERP", tag: "Education", text: "Custom ERP software for schools and educational institutions, designed around day-to-day administrative and academic workflows." },
  { icon: UsersRound, title: "Contract Staffing Software", tag: "Workforce", text: "Digital systems for contract staffing operations, helping organisations replace scattered manual processes with a connected workflow." },
  { icon: Bot, title: "AI Agents for Healthcare", tag: "Healthcare", text: "AI-agent solutions for healthcare-oriented workflows, information handling and operational assistance." },
  { icon: Code2, title: "Custom Business Software", tag: "Enterprise", text: "Purpose-built web applications, portals and internal systems for business-specific requirements." },
  { icon: CloudCog, title: "Cloud, API & Deployment", tag: "Engineering", text: "Backend, API integration, deployment and cloud infrastructure for production-ready digital products." },
  { icon: Layers3, title: "Web & E-commerce", tag: "Digital", text: "Responsive websites and commerce platforms that turn a business idea into a usable digital experience." },
];

const packages = [
  ['FlexiWeb Pro', 'Web application', '₹1,499+', 'Static or dynamic web applications'],
  ['Quickflex Android', 'Android application', '₹3,499+', 'Static or dynamic mobile applications'],
  ['CodeSync Pro', 'Backend + API + database', '₹16,499+', 'Application backend and integration services'],
  ['UniFlex Suite', 'Web + Android + backend', '₹46,499+', 'End-to-end digital product bundle'],
  ['ConveniShop Pro', 'E-commerce', '₹55,000+', 'Online commerce solution'],
  ['FlowFuse', 'DevOps', '₹2,500+', 'Middleware, deployment and cloud services'],
  ['DataMind Pro', 'AI / ML / Data Science', '₹85,499+', 'AI, ML and data-focused solutions'],
  ['Custom Idea', 'Tailored solution', 'Contact us', 'Built around your requirements'],
];

const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", contact: "", message: "" });

  const openContactForm = (service) => {
    setSelectedService(service);
    setFormData({ name: "", email: "", contact: "", message: "" });
    setStatus("");
    setShowForm(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const payload = new FormData();
    payload.append("service", selectedService);
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
    try {
      await axios.post("https://end.tripuradurgapuja.com/api/contactservice/", payload);
      setStatus("Thanks — your request has been submitted.");
      setTimeout(() => setShowForm(false), 1300);
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again or contact us directly.");
    }
  };

  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="rjri-container">
          <span className="rjri-eyebrow">Solutions</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">From school operations to healthcare AI, we build the system behind the work.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">RJR Infinity combines software engineering with practical domain understanding. Choose a focused solution or bring us a custom requirement.</p>
        </div>
      </section>

      <section className="rjri-container py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutionData.map(({ icon: Icon, title, tag, text }) => (
            <article key={title} className="rjri-card glow group p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white group-hover:bg-blue-600"><Icon size={22} /></div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>
              </div>
              <h2 className="mt-6 text-2xl font-extrabold text-slate-950">{title}</h2>
              <p className="mt-3 min-h-[92px] leading-7 text-slate-600">{text}</p>
              <button onClick={() => openContactForm(title)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Discuss this solution <ArrowRight size={16} /></button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="rjri-container">
          <span className="rjri-eyebrow !border-white/10 !bg-white/5 !text-blue-200">How we work</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">A clear path from requirement to release.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[['01', 'Understand', 'We clarify the business problem, users and workflow.'], ['02', 'Design', 'We shape the product structure and user experience.'], ['03', 'Build', 'We develop, integrate and test the working system.'], ['04', 'Launch', 'We deploy and continue improving as requirements evolve.']].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
                <div className="text-sm font-black text-blue-300">{n}</div><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rjri-container py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="rjri-eyebrow">Packages</span><h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Flexible starting points.</h2></div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Existing package prices are retained from the current site. Final pricing can vary with scope and requirements.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map(([name, type, price, desc]) => (
            <div key={name} className="rjri-card p-6">
              <div className="text-sm font-bold text-blue-700">{type}</div>
              <h3 className="mt-2 text-xl font-extrabold">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              <div className="mt-5 text-lg font-black text-slate-950">{price}</div>
              <button onClick={() => openContactForm(name)} className="mt-5 w-full rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-700">Contact us</button>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-3xl bg-white p-7 shadow-2xl">
            <button onClick={() => setShowForm(false)} className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:text-slate-900"><X size={18} /></button>
            <div className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Project enquiry</div>
            <h2 className="mt-2 text-2xl font-black">{selectedService}</h2>
            <form onSubmit={submit} className="mt-6 space-y-4">
              {[["name", "Your name"], ["email", "Email address"], ["contact", "Phone number"]].map(([name, placeholder]) => <input key={name} name={name} value={formData[name]} onChange={(e) => setFormData({ ...formData, [name]: e.target.value })} placeholder={placeholder} required className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />)}
              <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us what you want to build" rows="5" required className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
              {status && <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{status}</p>}
              <button className="rjri-btn-primary w-full">Send enquiry <ArrowRight size={17} /></button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;
