import React from "react";
import { ArrowUpRight, Bot, ExternalLink, HeartPulse, School, UsersRound } from "lucide-react";
import img1 from "../assets/1.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";

const productWork = [
  { icon: School, title: "Academic ERP", category: "Education", description: "A school-focused ERP built to bring institutional operations into a connected digital system." },
  { icon: UsersRound, title: "Contract Staffing Software", category: "Workforce", description: "A dedicated software direction for managing contract staffing workflows and operational coordination." },
  { icon: Bot, title: "AI Agents for Healthcare", category: "Healthcare AI", description: "AI-agent solutions focused on healthcare use cases and practical digital assistance." },
];

const portfolio = [
  { title: "Institutional Website — SVIST", description: "Responsive institutional website covering academic information, news, events, faculty and admissions resources.", image: img10, tags: ["Education", "Institutional"] , live: "https://svist.org/"},
  { title: "Digital Health-Care", description: "Full-stack development and comprehensive testing for a digital healthcare service.", image: img1, tags: ["Healthcare", "Full-stack"], live: "https://www.raxa.io/raxaDesktop/" },
  { title: "Android Health-Care", description: "End-to-end service testing and development for an Android healthcare application.", image: img6, tags: ["Healthcare", "Android"], live: "https://play.google.com/store/apps/details?id=com.raxa.EMR&hl=en_IN" },
  { title: "Custom Apparel E-commerce", description: "On-demand apparel platform with customisation, order management and payment workflows.", image: img11, tags: ["E-commerce", "Digital"] , live: "https://garagemerch.in/"},
  { title: "ScienceTech Academy", description: "Digital learning platform with courses, resources and assessments for higher education.", image: img12, tags: ["Education", "Learning"], live: "https://www.sciencetechacademy.in/" },
  { title: "Arpan Steel Furniture", description: "E-commerce experience for a premium steel furniture business.", image: img13, tags: ["E-commerce", "Business"], live: "https://www.arpansteelfurniture.in/" },
  { title: "EMR / Bhamni Integration", description: "Integration work connecting EMR-based facilities into a healthcare service environment.", image: img8, tags: ["Healthcare", "Integration"] },
  { title: "API Auto-Documentation", description: "Automated API documentation for consistent developer reference.", image: img7, tags: ["API", "Engineering"] },
  { title: "Conference / Seminar / Journal", description: "Unified digital platform for conferences, seminars and journal publishing.", image: img3, tags: ["Academic", "Publishing"] },
  { title: "Apartment Management", description: "A solution-oriented digital system for apartment and society management.", image: img4, tags: ["Management", "Community"] },
];

const Projects = () => (
  <main className="bg-slate-50">
    <section className="bg-white py-20">
      <div className="rjri-container">
        <span className="rjri-eyebrow">Selected work</span>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">Products, platforms and digital systems built for real organisations.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">The portfolio now leads with the areas RJR Infinity is actively building: education software, staffing systems, healthcare technology and business digitalisation.</p>
      </div>
    </section>

    <section className="rjri-container py-16">
      <div className="grid gap-5 lg:grid-cols-3">
        {productWork.map(({ icon: Icon, title, category, description }) => (
          <div key={title} className="rjri-card glow relative overflow-hidden p-7">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-50 blur-2xl" />
            <div className="relative"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon size={22} /></div><div className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-blue-700">{category}</div><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-600">{description}</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500">Featured capability <ArrowUpRight size={16} /></div></div>
          </div>
        ))}
      </div>
    </section>

    <section className="rjri-container pb-20">
      <div className="mb-9 flex items-end justify-between gap-6"><div><div className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">Portfolio</div><h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">A broader view of our work.</h2></div><div className="hidden text-sm text-slate-500 md:block">Web • Healthcare • Education • Commerce • Integrations</div></div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.10)]">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100"><img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-6"><div className="flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">{t}</span>)}</div><h3 className="mt-4 text-xl font-extrabold text-slate-950">{p.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>{p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">View live project <ExternalLink size={15} /></a>}</div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-slate-950 py-20 text-white"><div className="rjri-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><div className="text-sm font-bold uppercase tracking-[.18em] text-blue-300">Have a requirement?</div><h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight">Let’s turn your workflow into a product.</h2></div><a href="/contact" className="rjri-btn-primary !bg-blue-600 hover:!bg-blue-500">Start a conversation <ArrowUpRight size={18} /></a></div></section>
  </main>
);

export default Projects;
