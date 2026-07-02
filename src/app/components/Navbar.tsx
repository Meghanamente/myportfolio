import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["contact", "education", "projects", "skills", "about", "home"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <div style={{ margin: "16px 16px 0", borderRadius: 16, overflow: "hidden" }}>
        <nav style={{
          background: scrolled ? "rgba(5,5,15,0.92)" : "rgba(5,5,15,0.6)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled ? "1px solid rgba(139,92,246,0.1)" : "1px solid rgba(255,255,255,0.04)",
          padding: "14px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all 0.4s ease",
        }}>
          {/* Logo */}
          <button onClick={() => go("#home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", padding: 0 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(124,58,237,0.4)",
            }}>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 800, fontFamily: "Inter, sans-serif" }}>M</span>
            </div>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em" }}>Meghana Mente</span>
          </button>

          {/* Desktop nav */}
          <ul style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
            {links.map(l => {
              const isActive = active === l.href.replace("#", "");
              return (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    style={{
                      background: "none", border: "none", padding: "7px 14px",
                      borderRadius: 8, fontFamily: "Inter, sans-serif",
                      fontSize: 13, fontWeight: 500,
                      color: isActive ? "#c4b5fd" : "#64748b",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c4b5fd")}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? "#c4b5fd" : "#64748b")}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href="mailto:meghana.mente@email.com"
              className="hidden md:inline-flex"
              style={{
                padding: "8px 18px", borderRadius: 10,
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#c4b5fd", fontSize: 13, fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.22)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)"; }}
            >
              Hire Me
            </a>
            <button
              className="md:hidden"
              onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", color: "#64748b", padding: 4 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ margin: "4px 16px 0", borderRadius: 14, overflow: "hidden", background: "rgba(5,5,15,0.97)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div style={{ padding: 12 }}>
              {links.map(l => (
                <button key={l.href} onClick={() => go(l.href)} style={{ display: "block", width: "100%", textAlign: "left", padding: "11px 16px", background: "none", border: "none", borderRadius: 8, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#94a3b8", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#c4b5fd")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {l.label}
                </button>
              ))}
              <a href="mailto:meghana.mente@gmail.com" style={{ display: "block", margin: "8px 4px 4px", padding: "11px 16px", borderRadius: 10, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", color: "#c4b5fd", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "Inter, sans-serif", textAlign: "center" }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
