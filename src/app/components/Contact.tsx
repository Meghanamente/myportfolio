import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS - Replace with your actual Public Key from https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "service_contact_form";
const EMAILJS_TEMPLATE_ID = "template_contact_form";

const contactItems = [
  { Icon: Phone, label: "Phone", value: "+91 63030164364", href: "tel:+9163030164364", color: "#34d399" },
  { Icon: Mail, label: "Gmail", value: "meghana.mente@gmail.com", href: "mailto:meghana.mente@gmail.com", color: "#a78bfa" },
  { Icon: MapPin, label: "Location", value: "India", href: "#", color: "#f97316" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "meghana.mente@gmail.com",
      });

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setLoading(false);
      setError("Failed to send message. Please try again.");
      console.error("Email error:", err);
    }
  };

  return (
    <section id="contact" style={{ background: "#06060f", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", bottom: 0, right: "10%", width: "45%", height: "60%", background: "radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "10%", left: "0%", width: "35%", height: "50%", background: "radial-gradient(ellipse, rgba(34,211,238,0.03) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7c3aed" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
            Let's build something<br /><span style={{ color: "#7c3aed" }}>great together</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 40, alignItems: "start" }} className="grid-cols-1 lg:grid-cols-[2fr_3fr]">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.8, color: "#475569", marginBottom: 36 }}>
              I'm open to full-time roles, freelance projects, and collaborations. Reach out via any of the channels below, or drop me a message using the form.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 14,
                    background: "#07071a", border: "1px solid rgba(255,255,255,0.05)",
                    textDecoration: "none", transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${item.color}25`; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; (e.currentTarget as HTMLElement).style.background = `${item.color}06`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.background = "#07071a"; }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}12`, border: `1px solid ${item.color}20`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                    <item.Icon size={15} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#94a3b8", marginTop: 1 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <div style={{ borderRadius: 24, padding: "40px 40px", background: "#07071a", border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 30, right: 30, height: 1, background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)" }} />

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 0", textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <CheckCircle size={28} style={{ color: "#34d399" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 800, color: "#f1f5f9", marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 28 }}>Thank you for reaching out. I'll get back to you very soon!</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    style={{ padding: "10px 24px", borderRadius: 10, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "#c4b5fd", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600 }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 800, color: "#f1f5f9", marginBottom: 6 }}>Send a Message</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#334155", marginBottom: 28 }}>I respond to all inquiries within 24 hours.</p>

                  {error && (
                    <div style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", fontFamily: "Inter, sans-serif", fontSize: 13, marginBottom: 20 }}>
                      {error}
                    </div>
                  )}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    {[
                      { key: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                      { key: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{f.label}</label>
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={(form as any)[f.key]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          style={{ width: "100%", padding: "11px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#e2e8f0", fontFamily: "Inter, sans-serif", fontSize: 13, outline: "none", transition: "border-color 0.2s ease, box-shadow 0.2s ease", boxSizing: "border-box" }}
                          onFocus={e => { e.target.style.borderColor = "rgba(124,58,237,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; }}
                          onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Subject</label>
                    <input
                      type="text" required placeholder="Job Opportunity / Project / Collaboration..."
                      value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#e2e8f0", fontFamily: "Inter, sans-serif", fontSize: 13, outline: "none", transition: "border-color 0.2s ease, box-shadow 0.2s ease", boxSizing: "border-box" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(124,58,237,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
                    <textarea
                      required rows={5} placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#e2e8f0", fontFamily: "Inter, sans-serif", fontSize: 13, outline: "none", resize: "none", transition: "border-color 0.2s ease, box-shadow 0.2s ease", boxSizing: "border-box", lineHeight: 1.7 }}
                      onFocus={e => { e.target.style.borderColor = "rgba(124,58,237,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.07)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%", padding: "14px", borderRadius: 12, border: "none",
                      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      boxShadow: "0 0 30px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      transition: "all 0.25s ease", opacity: loading ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.1)"; } }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
                  >
                    {loading ? (
                      <><svg style={{ width: 16, height: 16, animation: "spin 0.8s linear infinite" }} viewBox="0 0 24 24" fill="none"><circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path opacity="0.75" d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/></svg> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
