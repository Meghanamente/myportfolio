import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { calculateExperience, calculateIndustryExperience } from "../utils/experienceCalculator";

function Counter({ end, decimals = 0, suffix = "", start }: { end: number; decimals?: number; suffix?: string; start: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let s: number | null = null;
    const dur = 1800;
    const step = (ts: number) => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(ease * end);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end]);
  return <>{decimals ? val.toFixed(decimals) : Math.floor(val)}{suffix}</>;
}

function getStatsData() {
  const experience = calculateExperience();
  return [
    { label: "Years Experience", end: experience.totalYears, suffix: "+", decimals: 1, color: "#a78bfa" },
    { label: "Projects Delivered", end: 10, suffix: "+", decimals: 0, color: "#67e8f9" },
    { label: "Technologies", end: 15, suffix: "+", decimals: 0, color: "#86efac" },
    { label: "Industries", end: 2, suffix: "", decimals: 0, color: "#fde68a" },
  ];
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const stats = getStatsData();
  const industryExp = calculateIndustryExperience();
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: "#06060f", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "40%", right: 0, width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(79,70,229,0.05) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7c3aed" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>About Me</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
            Crafting experiences<br /><span style={{ color: "#7c3aed" }}>that matter</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, marginBottom: 72, background: "rgba(255,255,255,0.04)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: "32px 28px", background: "#07071a", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 8 }}>
                <Counter end={s.end} suffix={s.suffix} decimals={s.decimals} start={started} />
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#334155", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="grid-cols-1 lg:grid-cols-2">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}>
              <img
                src="https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbCUyMGNvZGUlMjB3b3Jrc3BhY2UlMjBzZXR1cCUyMG1vb2R5fGVufDF8fHx8MTc3MzgzNDQxOHww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Developer workspace"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(109,40,217,0.25) 0%, transparent 50%)" }} />
            </div>
            {/* Accent corner */}
            <div style={{ position: "absolute", bottom: -14, right: -14, width: 80, height: 80, borderRadius: 16, border: "1.5px solid rgba(124,58,237,0.2)", zIndex: -1 }} />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#475569", marginBottom: 20 }}>
              I'm a <span style={{ color: "#c4b5fd", fontWeight: 600 }}>Senior Frontend Developer at Endava</span>, with 4+ years of professional experience building scalable, responsive web applications used by enterprise clients.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#475569", marginBottom: 32 }}>
              My core expertise is in React JS component-based architecture, modern ES6+ JavaScript, TypeScript, and Redux state management — delivering complete frontend solutions from requirements analysis through production deployment.
            </p>

            {/* Industry pills */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#334155", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Industry Experience</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  { label: "Healthcare", dur: industryExp.healthcare.formattedDuration, color: "#ec4899" },
                  { label: "Technology", dur: industryExp.technology.formattedDuration, color: "#22d3ee" },
                  { label: "Recruitment", dur: industryExp.recruitment.formattedDuration, color: "#a78bfa" },
                ].map(item => (
                  <div key={item.label} style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${item.color}25`, background: `${item.color}08`, display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{item.label}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: item.color }}>{item.dur}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core traits */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["Clean Code Architecture", "Performance Optimization", "Agile / Scrum", "UI/UX Sensibility", "API Integration", "End-to-End Delivery"].map(trait => (
                <div key={trait} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontSize: 13, color: "#64748b" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7c3aed", flexShrink: 0, boxShadow: "0 0 6px rgba(124,58,237,0.8)" }} />
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
