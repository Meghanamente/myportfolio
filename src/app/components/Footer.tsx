import { Mail, Phone, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    { Icon: Mail, href: "mailto:meghana.mente@gmail.com", label: "Gmail" },
    { Icon: Phone, href: "tel:+9163030164364", label: "Phone" },
  ];

  return (
    <footer style={{ background: "#05050f", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative" }}>
      {/* Top gradient rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.5) 40%, rgba(99,102,241,0.4) 60%, transparent 100%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 32px" }}>
        {/* Main row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="grid-cols-1 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(124,58,237,0.35)" }}>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, fontFamily: "Inter, sans-serif" }}>M</span>
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#e2e8f0" }}>Meghana Mente</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#334155", marginTop: 1 }}>Senior Frontend Developer</div>
              </div>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.8, color: "#334155", maxWidth: 260 }}>
              Building enterprise-grade web applications with React.js & TypeScript at Endava.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={s.label}
                  style={{ width: 34, height: 34, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#334155", textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)"; (e.currentTarget as HTMLElement).style.color = "#a78bfa"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "#334155"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                >
                  <s.Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#1e293b", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>Navigation</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(l => (
                <li key={l.id}>
                  <button onClick={() => scroll(l.id)} style={{ background: "none", border: "none", padding: 0, fontFamily: "Inter, sans-serif", fontSize: 13, color: "#334155", fontWeight: 500, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c4b5fd")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#1e293b", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>Quick Info</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Company", val: "Endava" },
                { label: "Stack", val: "React.js + TypeScript" },
                { label: "Phone", val: "+91 XXXXX XXXXX" },
                { label: "Experience", val: "4+ Years" },
                { label: "Status", val: "Open to Opportunities" },
              ].map(item => (
                <div key={item.label}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#1e293b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</span>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#475569", fontWeight: 500, marginTop: 1 }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#1e293b", display: "flex", alignItems: "center", gap: 5, margin: 0 }}>
            © {new Date().getFullYear()} Meghana Mente. Built with <Heart size={10} style={{ color: "#7c3aed", fill: "#7c3aed" }} /> using React & TypeScript.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "7px 14px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#334155", fontWeight: 500, transition: "all 0.2s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)"; (e.currentTarget as HTMLElement).style.color = "#c4b5fd"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#334155"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
