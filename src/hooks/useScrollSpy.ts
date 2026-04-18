import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds: string[], offset: number = 0) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1;
      let currentSection = "";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};