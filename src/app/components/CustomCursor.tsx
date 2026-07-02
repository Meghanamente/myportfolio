import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches);

  useEffect(() => {
    if (isTouch) return;
    let mx = -200, my = -200, ax = -200, ay = -200, raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      }
    };

    const tick = () => {
      ax = lerp(ax, mx, 0.08); ay = lerp(ay, my, 0.08);
      if (auraRef.current) {
        auraRef.current.style.transform = `translate(${ax}px,${ay}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: Event) => {
      const t = e.currentTarget as HTMLElement;
      const tag = t.tagName.toLowerCase();
      if (tag === "a" || tag === "button" || t.dataset.hover) {
        if (auraRef.current) { auraRef.current.style.width = "64px"; auraRef.current.style.height = "64px"; auraRef.current.style.borderColor = "rgba(196,181,253,0.7)"; }
        if (dotRef.current) { dotRef.current.style.opacity = "0"; }
      }
    };
    const onLeave = () => {
      if (auraRef.current) { auraRef.current.style.width = "32px"; auraRef.current.style.height = "32px"; auraRef.current.style.borderColor = "rgba(139,92,246,0.5)"; }
      if (dotRef.current) { dotRef.current.style.opacity = "1"; }
    };

    const attach = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={auraRef} style={{ position: "fixed", top: 0, left: 0, width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(139,92,246,0.5)", pointerEvents: "none", zIndex: 99999, willChange: "transform", transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease" }} />
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: 5, height: 5, borderRadius: "50%", background: "#c4b5fd", pointerEvents: "none", zIndex: 99999, willChange: "transform", transition: "opacity 0.2s ease", boxShadow: "0 0 8px rgba(196,181,253,0.8)" }} />
    </>
  );
}
