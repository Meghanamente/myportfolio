import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  period: string;
  domain: string;
  role: string;
  overview: string;
  tech: string[];
  highlights: string[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "polaris",
    num: "01",
    title: "Polaris Client Portal",
    tagline: "Enterprise healthcare service request management system",
    period: "Aug 2024 – Present",
    domain: "Healthcare",
    role: "Senior Developer",
    overview: "A comprehensive client portal built from the ground up enabling 24/7 access, real-time case visibility, advanced analytics dashboards, secure messaging, and role-based access control — serving enterprise healthcare clients.",
    tech: ["React 18", "TypeScript", "Redux Thunk", "AG Grid", "ApexCharts", "Material UI v5", "SCSS", "Styled Components", "Axios", "AWS Amplify", "GraphQL", "WebSockets", "Okta Auth", "Jest", "RTL", "Webpack 5"],
    highlights: [
      "Built entire frontend from scratch — all modules independently architected and delivered",
      "Implemented AG Grid enterprise-level features without an enterprise license",
      "Real-time messaging via WebSockets & GraphQL subscriptions",
      "Multi-part file upload with S3 pre-signed URLs, progress tracking",
      "Configurable notification system with read/unread state and user personalization",
      "Full Okta authentication + role-based UI access control",
      "Ticket, Intent & Tech Build modules with complex dynamic forms & workflow logic",
      "Code splitting via Webpack 5, Redux Thunk for optimized performance",
    ],
    accentColor: "#8b5cf6",
  },
  {
    id: "gxbi",
    num: "02",
    title: "GxBI — Business Intelligence",
    tagline: "Configurable BI dashboards with custom theming & query generation",
    period: "Mar 2023 – Aug 2024 (1 yr 5 mo)",
    domain: "Technology",
    role: "Developer",
    overview: "A Business Intelligence application enabling users to create fully customizable dashboards with configurable panels, drill-down charts, dynamic filters, and a custom query generator. Designed to accelerate data analysis and business decision-making.",
    tech: ["React JS", "JavaScript ES6+", "React ApexCharts", "React Grid Layout", "HTML5", "CSS3", "SCSS"],
    highlights: [
      "Developed custom theming system for consistent branding across all dashboards",
      "Built a dynamic Custom Query Generator UI from scratch",
      "Delivered interactive drill-down data visualizations with React ApexCharts",
      "Implemented drag-and-drop dashboard layouts via React Grid Layout",
      "Received strong stakeholder appreciation for UI quality and consistency",
      "Modular, reusable React component library across the entire application",
    ],
    accentColor: "#22d3ee",
  },
  {
    id: "gxhire",
    num: "03",
    title: "Gx-Hire — Recruitment Platform",
    tagline: "Structured hiring workflow platform for recruiters",
    period: "2022 – 2023",
    domain: "Recruitment",
    role: "Developer",
    overview: "A recruitment and hiring platform streamlining candidate management, job postings, and end-to-end hiring workflows. Built with Angular, integrated with a .NET backend to enable recruiter efficiency through an intuitive, structured UI.",
    tech: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap", ".NET API Integration"],
    highlights: [
      "Designed and implemented wireframes and full UI layouts in Angular",
      "Built reusable component library ensuring cross-platform consistency",
      "Integrated Angular frontend with .NET backend APIs end-to-end",
      "Delivered responsive screens aligned with business & UX requirements",
    ],
    accentColor: "#34d399",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: 24, overflow: "hidden",
        background: "#07071a",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}25`; (e.currentTarget as HTMLElement).style.boxShadow = `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}10`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
    >
      {/* Header strip */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}40)` }} />

      <div style={{ padding: "36px 40px" }}>
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: `${project.accentColor}18`, lineHeight: 1, userSelect: "none" }}>{project.num}</span>
              <div>
                <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 99, background: `${project.accentColor}12`, color: project.accentColor, border: `1px solid ${project.accentColor}25`, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.domain}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: "rgba(255,255,255,0.04)", color: "#475569", border: "1px solid rgba(255,255,255,0.07)", letterSpacing: "0.06em" }}>{project.period}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 800, color: "#f1f5f9", margin: 0, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{project.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#475569", margin: "4px 0 0", fontWeight: 400 }}>{project.tagline}</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, padding: "7px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#334155", whiteSpace: "nowrap" }}>
            {project.role}
          </div>
        </div>

        {/* Overview */}
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.85, color: "#4a5568", marginBottom: 24 }}>{project.overview}</p>

        {/* Tech stack */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#1e293b", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Tech Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tech.map(t => (
              <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 7, background: `${project.accentColor}0c`, color: project.accentColor, border: `1px solid ${project.accentColor}20` }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <button
            onClick={() => setExpanded(v => !v)}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", padding: "0 0 12px", fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#334155", letterSpacing: "0.15em", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = project.accentColor)}
            onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            Key Highlights ({project.highlights.length})
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#4a5568" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: project.accentColor, flexShrink: 0, marginTop: 7, boxShadow: `0 0 6px ${project.accentColor}80` }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ background: "#06060f", padding: "120px 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "30%", right: "0%", width: "35%", height: "50%", background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7c3aed" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.18em", textTransform: "uppercase" }}>Work</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
            Featured<br /><span style={{ color: "#7c3aed" }}>Projects</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
