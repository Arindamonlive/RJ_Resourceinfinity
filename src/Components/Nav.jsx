import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo1.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const items = [
    ["Home", "/"],
    ["Solutions", "/services"],
    ["Work", "/projects"],
    ["About", "/about"],
    ["Training", "/course"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="rjri-container flex h-[74px] items-center justify-between gap-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="RJR Infinity" className="h-11 w-11 object-contain" />
          <div className="min-w-0">
            <div className="truncate text-lg font-extrabold tracking-tight text-slate-950">RJR Infinity</div>
            <div className="hidden text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500 sm:block">Digital Systems • AI • ERP</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${location.pathname === path ? "bg-slate-100 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="ml-3 rjri-btn-primary !px-4 !py-2.5 text-sm">
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </nav>

        <button className="rounded-xl border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="rjri-container flex flex-col gap-1 py-4">
            {items.map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                {label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rjri-btn-primary">
              Start a Project <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
