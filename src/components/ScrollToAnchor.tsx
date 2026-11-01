import { useEffect } from "react";
import { useLocation } from "@/lib/router-compat";

export default function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(tryScroll, 150);
      }
    };
    setTimeout(tryScroll, 100);
  }, [location.pathname, location.hash, location.key]);

  return null;
}