import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    accent: "#fbbf24",
    skills: [
      { name: "JavaScript (ES6+)", pct: 93 },
      { name: "TypeScript", pct: 88 },
      { name: "HTML5 / CSS3", pct: 97 },
      { name: "SQL", pct: 72 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "#a78bfa",
    skills: [
      { name: "React.js", pct: 94 },
      { name: "Redux / Thunk", pct: 87 },
      { name: "Angular", pct: 75 },
      { name: "Material UI v4/v5", pct: 90 },
    ],
  },
  {
    title: "Styling",
    accent: "#f472b6",
    skills: [
      { name: "SCSS / SASS", pct: 91 },
      { name: "Styled Components", pct: 88 },
      { name: "Tailwind CSS", pct: 82 },
    ],
  },
  {
    title: "Data & Visualization",
    accent: "#34d399",
    skills: [
      { name: "AG Grid", pct: 88 },
      { name: "ApexCharts", pct: 85 },
      { name: "GraphQL", pct: 78 },
      { name: "WebSockets", pct: 80 },
    ],
  },
  {
    title: "Testing & DevOps",
    accent: "#60a5fa",
    skills: [
      { name: "Jest / RTL", pct: 82 },
      { name: "Webpack 5", pct: 78 },
      { name: "AWS Amplify", pct: 74 },
      { name: "ESLint / SonarQube", pct: 85 },
    ],
  },
  {
    title: "Tools & Auth",
    accent: "#fb923c",
    skills: [
      { name: "Okta Auth", pct: 80 },
      { name: "Axios / REST", pct: 92 },
      { name: "React Router", pct: 91 },
      { name: "React Grid Layout", pct: 83 },
    ],
  },
];

function SkillBar({ name, pct, accent, animate }: { name: string; pct: number; accent: string; animate: boolean }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#94a3b8" }}>{name}</span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: accent }}>{pct}%</span>
      </div>
      <div style={{ height: 3, borderRadius: 99, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: animate ? `${pct}%` : "0%",
            borderRadius: 99,
            background: `linear-gradient(90deg, ${accent}99, ${accent})`,
            boxShadow: `0 0 8px ${accent}60`,
            transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ background: "#05050f", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", bottom: "0%", left: "10%", width: "50%", height: "50%", background: "radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7c3aed" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>Skills</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
            Technical<br /><span style={{ color: "#7c3aed" }}>Expertise</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: 20, padding: 24,
                background: "#07071a",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative", overflow: "hidden",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${cat.accent}25`; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${cat.accent}15`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 1, background: `linear-gradient(90deg, transparent, ${cat.accent}50, transparent)` }} />

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ width: 4, height: 20, borderRadius: 99, background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }} />
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>{cat.title}</h3>
              </div>

              {cat.skills.map(sk => (
                <SkillBar key={sk.name} name={sk.name} pct={sk.pct} accent={cat.accent} animate={animate} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
