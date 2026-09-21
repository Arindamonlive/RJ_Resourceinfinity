import { useState } from "react";
import axios from "axios";
import { ArrowRight, Brain, GraduationCap, X } from "lucide-react";

const courses = [
  ["Algorithm for MNC", "DSA, Problem Solving, Aptitude", "80 hrs", 2500, 999],
  ["Web Development", "MongoDB, React, Django", "80 hrs", 2500, 999],
  ["Machine Learning", "Supervised/Unsupervised Learning, Python", "80 hrs", 2500, 999],
  ["Artificial Intelligence", "AI Concepts, Neural Nets, Logic Programming", "80 hrs", 2500, 999],
];

const paymentLinks = {
  "Algorithm for MNC": "https://rzp.io/rzp/rth7p3dP",
  "Web Development": "https://rzp.io/rzp/IeZU2Fu",
  "Machine Learning": "https://rzp.io/rzp/dpxjI9I",
  "Artificial Intelligence": "https://rzp.io/rzp/05LCU5zz",
  "Final Year Project Assistance": "https://rzp.io/rzp/U5tu0kIW",
};

export default function Courses() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", college: "", department: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault(); setStatus("Preparing payment...");
    try {
      await axios.post("https://end.tripuradurgapuja.com/api/order/", { name: `${form.name} (Phone: ${form.phone})`, phone: form.phone, email: form.email, course_name: selected.title, fee: selected.fee });
      window.location.href = paymentLinks[selected.title];
    } catch (error) { console.error(error); setStatus("Something went wrong. Please try again."); }
  };

  const cards = courses.map(([title, skills, duration, sfee, fee]) => ({ title, skills, duration, sfee, fee }));
  cards.push({ title: "Final Year Project Assistance", skills: "Code, report, documentation and viva preparation", duration: "Online / Remote", sfee: 5000, fee: 2999 });

  return <main className="bg-slate-50"><section className="bg-white py-20"><div className="rjri-container"><span className="rjri-eyebrow">Training & internship</span><h1 className="mt-5 max-w-3xl text-5xl font-black tracking-tight text-slate-950">Practical learning for students building real skills.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Existing training and project-assistance programmes, presented in a clearer and more professional format.</p></div></section><section className="rjri-container py-16"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{cards.map((c) => <article key={c.title} className="rjri-card glow p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white"><Brain size={20}/></div><h2 className="mt-5 text-xl font-black">{c.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600"><strong>Skills:</strong> {c.skills}</p><p className="mt-2 text-sm text-slate-600"><strong>Duration:</strong> {c.duration}</p><div className="mt-5 text-sm text-slate-500 line-through">₹{c.sfee}</div><div className="mt-1 text-2xl font-black text-slate-950">₹{c.fee}<span className="ml-1 text-xs font-semibold text-slate-500">including taxes</span></div><button onClick={() => { setSelected(c); setStatus(""); }} className="mt-6 rjri-btn-primary w-full">{c.title.includes('Project') ? 'Enquire Now' : 'Enroll Now'} <ArrowRight size={16}/></button></article>)}</div></section>{selected && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"><div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-3xl bg-white p-7"><button onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-slate-100 p-2"><X size={18}/></button><GraduationCap className="text-blue-700"/><h2 className="mt-4 text-2xl font-black">{selected.title}</h2><form onSubmit={submit} className="mt-6 space-y-3">{['name','phone','email','college','department'].map((field) => <input key={field} name={field} value={form[field]} onChange={(e) => setForm({...form, [field]: e.target.value})} placeholder={field[0].toUpperCase()+field.slice(1)} required className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/>)}{status && <p className="rounded-xl bg-slate-50 p-3 text-sm font-semibold">{status}</p>}<button className="rjri-btn-primary w-full">Proceed <ArrowRight size={16}/></button></form></div></div>}</main>;
}
