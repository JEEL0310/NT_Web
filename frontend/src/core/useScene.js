import { useLayoutEffect } from "react";
import { gsap } from "./gsap";

/**
 * Builds a scroll-scrubbed scene inside `scope`.
 * `build({ wide })` runs only when the user allows motion:
 *   wide  = screens ≥ 900px (pinned, cinematic)
 *   !wide = phones/tablets (lighter, no pinning)
 * With reduced-motion, build never runs, so the page shows its natural final layout.
 * All tweens use `scrub`, so they play forward on scroll down and rewind on scroll up.
 */
export default function useScene(scope, build) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scope);
    mm.add(
      {
        wide: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        narrow: "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => build({ wide: !!ctx.conditions.wide })
    );
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
