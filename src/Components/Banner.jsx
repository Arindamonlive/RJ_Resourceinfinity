import React from "react";
import { ArrowRight, Bot, Building2, HeartPulse, School, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const solutionCards = [
  { icon: School, label: "Academic ERP", text: "Connected digital operations for schools." },
  { icon: UsersRound, label: "Contract Staffing", text: "Software for staffing and workforce workflows." },
  { icon: HeartPulse, label: "Healthcare AI", text: "AI agents for healthcare-focused workflows." },
];

const Banner = () => (
  <main>
    <section className="rjri-noise relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,.30),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,.16),transparent_30%)]" />
      <div className="rjri-grid absolute inset-0 opacity-20" />
      <div className="rjri-container relative grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-200">
            <Sparkles size={14} /> Digital products • AI • Enterprise software
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            We build digital systems that make <span className="text-blue-400">complex work simpler.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            RJR Infinity builds practical software for organisations — from Academic ERP and contract staffing platforms to healthcare AI agents and custom digital products.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="rjri-btn-primary !bg-blue-600 hover:!bg-blue-500">Explore Solutions <ArrowRight size={18} /></Link>
            <Link to="/projects" className="rjri-btn-secondary !border-white/20 !bg-white/5 !text-white hover:!bg-white/10">View Our Work</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {['Education', 'Healthcare', 'Business Operations', 'Digital Commerce'].map((x) => (
              <span key={x} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{x}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[.06] p-4 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="RJR Infinity" className="h-10 w-10 object-contain" />
                <div><div className="font-bold">RJR Digital Suite</div><div className="text-xs text-slate-400">Solutions built around your workflow</div></div>
              </div>
              <ShieldCheck className="text-blue-300" size={20} />
            </div>
            <div className="mt-5 space-y-3">
              {solutionCards.map(({ icon: Icon, label, text }, i) => (
                <div key={label} className={`rounded-2xl border p-4 ${i === 0 ? 'border-blue-400/30 bg-blue-500/10' : 'border-white/10 bg-white/[.04]'}`}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/10 p-2.5"><Icon size={21} className="text-blue-300" /></div>
                    <div className="flex-1"><div className="font-bold">{label}</div><div className="mt-1 text-sm text-slate-400">{text}</div></div>
                    {i === 0 && <span className="rounded-full bg-blue-400/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-200">Featured</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[.04] p-4"><Building2 size={19} className="text-cyan-300" /><div className="mt-3 text-sm font-semibold">Business Software</div><div className="mt-1 text-xs text-slate-500">Custom workflows</div></div>
              <div className="rounded-2xl bg-white/[.04] p-4"><Bot size={19} className="text-violet-300" /><div className="mt-3 text-sm font-semibold">AI Automation</div><div className="mt-1 text-xs text-slate-500">Agent-led workflows</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-5">
      <div className="rjri-container flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>From idea → product → deployment → ongoing improvement.</span>
        <span className="font-semibold text-slate-800">India-based team • serving digital businesses and institutions</span>
      </div>
    </section>

    <section className="bg-slate-50 py-20">
      <div className="rjri-container">
        <div className="max-w-2xl">
          <span className="rjri-eyebrow">What we build</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Software designed around the real problem.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Instead of leading with a long technology list, the new RJR Infinity story starts with outcomes, industries and the systems you actually need.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [School, 'Education Systems', 'Academic ERP and institutional software built to bring everyday operations into one connected platform.'],
            [UsersRound, 'Workforce & Staffing', 'Contract staffing software and digital workflows that help organisations manage operational processes.'],
            [HeartPulse, 'Healthcare AI', 'AI-agent concepts and software solutions for healthcare-focused digital workflows and services.'],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rjri-card glow p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon size={22} /></div>
              <h3 className="mt-6 text-xl font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Explore <ArrowRight size={16} /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Banner;
