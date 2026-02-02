// src/components/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // prevent browser restoring old scroll position
  if (typeof window !== "undefined" && window.history && window.history.scrollRestoration) {
    window.history.scrollRestoration = "manual";
  }

  useLayoutEffect(() => {
    // small helper that explicitly clears focus & forces 0,0
    function forceTop() {
      try {
        // blur any focused element (inputs, buttons, etc)
        const active = document.activeElement;
        if (active && typeof active.blur === "function") active.blur();

        // ensure body/html scroll positions set to 0
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {
        // ignore
      }
    }

    // run immediately before paint
    forceTop();

    // run after paint (some browsers may re-apply)
    const t1 = window.setTimeout(forceTop, 40);
    const t2 = window.setTimeout(forceTop, 220);
    const t3 = window.setTimeout(forceTop, 600);

    // in case some library focuses later, keep a small observer for the first second
    let obs;
    try {
      obs = new MutationObserver((mutations) => {
        // if any element gets focus, blur it and force top
        if (document.activeElement && document.activeElement.tagName !== "BODY") {
          forceTop();
        }
      });
      obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["autofocus", "tabindex"] });
    } catch (e) {
      // ignore if MutationObserver not available
    }

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      if (obs) obs.disconnect();
    };
  }, [pathname]);

  return null;
}
