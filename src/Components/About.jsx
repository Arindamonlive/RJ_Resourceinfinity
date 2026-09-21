import React from "react";
import { ArrowUpRight, Globe2, Lightbulb, Target } from "lucide-react";
import founder from "../assets/CEO.png";
import benulal from "../assets/benulal.png";
import bindia from "../assets/bg.png";
import amit from "../assets/amit.png";
import kaushik from "../assets/km.png";
import somnath from "../assets/somnathdas.png";

const team = [
  [benulal, "Mr. Benulal Chakraborty", "Co-Founder", "Institutional knowledge, operational discipline and public-sector experience."],
  [bindia, "Mrs. Bindia Goswami Chakraborty", "Chief Financial Officer", "Financial planning, resource optimisation and data-driven decision-making."],
  [amit, "Mr. Amit Kumar Das", "Chief Marketing Officer", "Brand strategy, public engagement and marketing growth."],
  [kaushik, "Mr. Kaushik Majumdar", "Chief Business Officer & International Relationship Consultant", "Global business strategy, enterprise relationships and international consulting."],
  [somnath, "Dr. Somnath Das", "Head of Strategic Planning & Growth Initiatives", "Strategic planning, innovation advocacy and institutional growth initiatives."],
];

const About = () => (
  <main className="bg-slate-50">
    <section className="bg-white py-20">
      <div className="rjri-container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl"><img src={founder} alt="Dipali Chakraborty" className="w-full object-cover" /></div>
        <div><span className="rjri-eyebrow">Leadership</span><h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950">Technology should feel useful, not complicated.</h1><div className="mt-6 text-lg leading-8 text-slate-600"><p>At <strong className="text-slate-950">RJR Infinity</strong>, we focus on building practical digital solutions tailored to how organisations actually work.</p><p className="mt-4">Led by <strong className="text-slate-950">Dipali Chakraborty</strong>, Director, the company brings together software engineering, digital product development and applied AI to solve business and institutional problems.</p></div>
        <a href="/contact" className="rjri-btn-secondary">Contact RJR Infinity</a></div>
      </div>
    </section>

    <section className="rjri-container py-16"><div className="grid gap-5 md:grid-cols-3"><div className="rjri-card p-7"><Target className="text-blue-700" /><h2 className="mt-5 text-xl font-black">Purpose</h2><p className="mt-2 leading-7 text-slate-600">Make useful technology accessible through clear, outcome-focused digital products.</p></div><div className="rjri-card p-7"><Lightbulb className="text-blue-700" /><h2 className="mt-5 text-xl font-black">Approach</h2><p className="mt-2 leading-7 text-slate-600">Start from the workflow and user need, then choose the right technical solution.</p></div><div className="rjri-card p-7"><Globe2 className="text-blue-700" /><h2 className="mt-5 text-xl font-black">Reach</h2><p className="mt-2 leading-7 text-slate-600">An India-based team building digital products for institutions and businesses across markets.</p></div></div></section>

    <section className="bg-slate-950 py-20 text-white"><div className="rjri-container"><span className="rjri-eyebrow !border-white/10 !bg-white/5 !text-blue-200">The team</span><h2 className="mt-5 text-4xl font-black sm:text-5xl">People behind the work.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{team.map(([image, name, role, bio]) => <div key={name} className="rounded-3xl border border-white/10 bg-white/[.04] p-5"><img src={image} alt={name} className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-white/10" /><h3 className="mt-5 text-center text-base font-bold">{name}</h3><p className="mt-1 text-center text-xs font-semibold text-blue-300">{role}</p><p className="mt-4 text-center text-sm leading-6 text-slate-400">{bio}</p></div>)}</div></div></section>
  </main>
);

export default About;
