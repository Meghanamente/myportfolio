import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" style={{ background: "#05050f", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "20%", left: "0%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(109,40,217,0.05) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "0%", right: "0%", width: "30%", height: "40%", background: "radial-gradient(ellipse, rgba(236,72,153,0.04) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7c3aed" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>Background</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
            Education &<br /><span style={{ color: "#7c3aed" }}>Certifications</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="grid-cols-1 lg:grid-cols-2">
          {/* Left: Education + Language */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: 20, padding: "32px 36px", background: "#07071a", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.2)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 1, background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)" }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 20px rgba(124,58,237,0.35)", fontSize: 18 }}>🎓</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 800, color: "#f1f5f9", margin: 0, lineHeight: 1.3 }}>B.Tech — Information Technology</h3>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 99, background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)", whiteSpace: "nowrap", flexShrink: 0 }}>2018 – 2022</span>
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#7c3aed", fontWeight: 600, marginBottom: 10 }}>Swarnandhra College of Engineering & Technology</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.8, color: "#475569", margin: 0 }}>Completed B.Tech in Information Technology, building a strong foundation in software engineering, databases, and modern programming paradigms.</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: 20, padding: "28px 36px", background: "#07071a", border: "1px solid rgba(255,255,255,0.05)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; }}
            >
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>Languages</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { lang: "English", level: "Professional Proficiency", pct: 95, color: "#34d399" },
                  { lang: "Telugu", level: "Native Speaker", pct: 100, color: "#a78bfa" },
                ].map(item => (
                  <div key={item.lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#e2e8f0" }}>{item.lang}</span>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#334155", marginLeft: 10 }}>{item.level}</span>
                      </div>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.pct}%</span>
                    </div>
                    <div style={{ height: 2, borderRadius: 99, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                      <div style={{ width: `${item.pct}%`, height: "100%", borderRadius: 99, background: item.color, boxShadow: `0 0 8px ${item.color}60` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Certifications */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#334155", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Certifications & Training</p>
            </motion.div>

            {[
              {
                emoji: "🏆",
                title: "Kore AI — Beginner & Advanced",
                org: "Kore.ai Platform",
                date: "June 2023",
                tags: ["Beginner", "Advanced", "Kore.ai"],
                color: "#fbbf24",
                delay: 0.1,
              },
              {
                emoji: "📘",
                title: ".NET and Angular Development",
                org: "Professional Training Course",
                date: "July 6, 2022",
                tags: [".NET", "Angular", "TypeScript"],
                color: "#60a5fa",
                delay: 0.2,
              },
            ].map(cert => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: cert.delay, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderRadius: 20, padding: "28px 32px", background: "#07071a", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}25`; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${cert.color}10`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 1, background: `linear-gradient(90deg, transparent, ${cert.color}45, transparent)` }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${cert.color}12`, border: `1px solid ${cert.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>{cert.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 800, color: "#f1f5f9", margin: "0 0 4px", lineHeight: 1.3 }}>{cert.title}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: cert.color, fontWeight: 600, margin: "0 0 2px" }}>{cert.org}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#334155", margin: "0 0 14px" }}>Completed: {cert.date}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {cert.tags.map(tag => (
                        <span key={tag} style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 99, background: `${cert.color}0f`, color: cert.color, border: `1px solid ${cert.color}25`, letterSpacing: "0.05em" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
              style={{ borderRadius: 20, padding: "24px 28px", background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.05))", border: "1px solid rgba(124,58,237,0.15)", display: "flex", alignItems: "center", gap: 14 }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", flexShrink: 0, boxShadow: "0 0 12px rgba(74,222,128,0.8)", animation: "pulse 2s infinite" }} />
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#e2e8f0", margin: "0 0 3px" }}>Open to New Opportunities</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#475569", margin: 0 }}>Available for full-time roles, freelance & consulting in frontend development.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }`}</style>
    </section>
  );
}
