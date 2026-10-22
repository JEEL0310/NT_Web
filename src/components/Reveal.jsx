import { useRef } from "react";
import { gsap } from "../core/gsap";
import useScene from "../core/useScene";

/**
 * Scroll reveal component matching Home.jsx animation standards.
 * Smoothly cascades content in as it enters the viewport (play)
 * and cleanly rewinds when scrolling back up (reverse).
 */
export default function Reveal({ as: Tag = "div", stagger = false, x = 0, y = 30, className, children, ...rest }) {
  const ref = useRef(null);

  useScene(ref, () => {
    if (!ref.current) return;
    const targets = stagger ? Array.from(ref.current.children) : ref.current;

    gsap.fromTo(
      targets,
      { y, x, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 86%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
