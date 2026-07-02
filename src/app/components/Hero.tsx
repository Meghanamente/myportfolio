import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// Resolve image at runtime via `new URL(..., import.meta.url)` to avoid import type issues
const profileImg = new URL("../../imports/IMG_7877.jpeg", import.meta.url).href;
const ROLES = ["Senior Frontend Developer", "React.js Specialist", "TypeScript Expert", "UI/UX Engineer"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    const delay = del ? 35 : (text.length === full.length ? 2200 : 80);
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 2000);
      } else {
        const next = text.slice(0, -1);
        setText(next);
        if (next === "") { setDel(false); setIdx(i => (i + 1) % ROLES.length); }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="text-purple-400 font-inter">
      {text}<span className="animate-pulse">|</span>
    </span>
  );
}

const socials = [
  { icon: <Mail size={15} />, href: "mailto:meghana.mente@gmail.com", label: "Gmail" },
  { icon: <Phone size={15} />, href: "tel:+9163030164364", label: "Phone" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent" />
        <div className="absolute top-[-10%] left-[-5%] w-[55%] h-[70%] bg-radial-gradient from-purple-600/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] w-[45%] h-[60%] bg-radial-gradient from-indigo-600/10 to-transparent rounded-full blur-3xl" />

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[rgba(5,5,15,0.8)]" />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 40px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }} className="lg:grid-cols-[1fr_auto] grid-cols-1">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}
            >
              <span style={{ display: "inline-block", width: 32, height: 1, background: "#7c3aed" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Frontend Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-6xl md:text-8xl lg:text-9xl leading-tight mb-6 text-slate-100"
            >
              Meghana<br />
              <span className="gradient-text">
                Mente
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2.2vw, 1.25rem)", fontWeight: 400, color: "#475569", marginBottom: 28, minHeight: "1.8em" }}
            >
              <Typewriter />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.85, color: "#475569", maxWidth: 520, marginBottom: 40 }}
            >
              Senior Frontend Developer at <span style={{ color: "#94a3b8", fontWeight: 600 }}>Endava</span> with{" "}
              <span style={{ color: "#c4b5fd", fontWeight: 600 }}>4+ years</span> crafting enterprise-grade React.js & TypeScript applications. Focused on scalable architecture, rich user experiences, and pixel-perfect implementation.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 44 }}
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "12px 28px", borderRadius: 12, border: "none",
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600,
                  boxShadow: "0 0 32px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 40px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.12)"; }}
              >
                View Projects →
              </button>
              <a
                href="/Meghana_Mente_CV.pdf"
                download
                style={{
                  padding: "12px 24px", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#94a3b8", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7,
                  transition: "all 0.25s ease", backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,181,253,0.3)"; (e.currentTarget as HTMLElement).style.color = "#c4b5fd"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                <Download size={14} /> Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                    color: "#475569", textDecoration: "none", transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)"; (e.currentTarget as HTMLElement).style.color = "#c4b5fd"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#475569"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            className="hidden lg:block float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", width: 340, flexShrink: 0 }}
          >
            {/* Outer decorative ring */}
            <div style={{ position: "absolute", inset: -24, borderRadius: "50%", border: "1px solid rgba(124,58,237,0.12)" }} />
            <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: "1px dashed rgba(124,58,237,0.08)" }} />

            {/* Photo container */}
            <div style={{ width: 340, height: 340, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(124,58,237,0.2)", boxShadow: "0 0 80px rgba(109,40,217,0.3), 0 0 0 1px rgba(255,255,255,0.04)", position: "relative" }}>
              <ImageWithFallback
                src={profileImg}
                alt="Meghana Mente"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(5,5,15,0.5))" }} />
            </div>

            {/* Stats chips */}
            {[
              { val: "4+", sub: "Yrs Exp", pos: { top: 24, right: -28 } },
              { val: "10+", sub: "Projects", pos: { bottom: 60, left: -32 } },
              { val: "15+", sub: "Tech Stack", pos: { bottom: 20, right: -16 } },
            ].map(chip => (
              <motion.div
                key={chip.val}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
                style={{
                  position: "absolute", ...chip.pos,
                  background: "rgba(10,10,24,0.95)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  backdropFilter: "blur(16px)",
                  borderRadius: 14, padding: "10px 16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#c4b5fd", lineHeight: 1 }}>{chip.val}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#475569", fontWeight: 500, marginTop: 3, whiteSpace: "nowrap" }}>{chip.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "#1e293b" }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
