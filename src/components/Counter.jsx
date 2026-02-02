import { useEffect, useRef, useState } from "react";

export default function Counter({
  end = 100,
  duration = 1500,
  prefix = "",
  suffix = "",
  startOnView = true,
}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    const start = () => {
      if (started.current) return;
      started.current = true;

      const startTime = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = Math.round(end * eased);
        setValue(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    if (!startOnView) return start();

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && start()),
      { threshold: 0.35 }
    );

    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, [duration, end, startOnView]);

  return (
    <span ref={elRef}>
      {prefix}{value}{suffix}
    </span>
  );
}
