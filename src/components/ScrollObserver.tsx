"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll(".reveal-on-scroll");
      revealElements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check after DOM renders completely
    const timer = setTimeout(observeElements, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
