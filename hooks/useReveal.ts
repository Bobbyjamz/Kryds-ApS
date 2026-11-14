"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveals = el.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 90);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return ref;
}
