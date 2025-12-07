import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const options = {
      threshold: 0.15, // 15% عنصر وارد دید شود
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0)";
          el.dataset.revealed = "true";

          observer.unobserve(el); // فقط یک بار انیمیشن اجرا شود
        }
      });
    }, options);

    // استایل اولیه
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.filter = "blur(6px)";
      el.style.transition =
        "opacity .7s ease-out, transform .7s ease-out, filter .7s ease-out";

      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}