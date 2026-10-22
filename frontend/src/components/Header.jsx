import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "../data/navigation";

/**
 * Header - Swiss Architectural Minimalist Luxury Navigation
 * Combines generous typographic breathing room, precision center-expanding
 * hairline underlines, subtle frosted glass scroll transitions, and refined
 * digital Haute-Horlogerie craftsmanship.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // Never hide navbar if mobile drawer is open
      if (open) return;

      // Keep navbar revealed when near the top of the viewport
      if (currentY <= 50) {
        setHidden(false);
        lastY = currentY;
        return;
      }

      const delta = currentY - lastY;
      // Filter micro-scrolls to prevent jitter
      if (Math.abs(delta) > 6) {
        if (delta > 0 && currentY > 100) {
          // Scrolling down -> smoothly tuck away navbar
          setHidden(true);
        } else if (delta < 0) {
          // Scrolling up -> smoothly reveal navbar
          setHidden(false);
        }
        lastY = currentY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-[#FBFCFE]/90 backdrop-blur-xl border-b border-[#02246A]/8 shadow-[0_4px_24px_rgba(2,36,106,0.04)] py-3 sm:py-3.5"
          : "bg-transparent border-b border-transparent py-4 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        {/* Brand Identity */}
        <Link
          to="/"
          aria-label="Nuvion Technologies home"
          className="shrink-0 flex items-center group transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src="/New_Logos/MAIN_LOGO_TP.png"
            alt="Nuvion Technologies"
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        {/* Architectural Centered Navigation */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              className={({ isActive }) =>
                clsx(
                  "py-1 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 relative group font-mono",
                  isActive ? "text-brand font-bold" : "text-ink-2 hover:text-ink"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1.5">
                    {l.label}
                    {isActive && (
                      <span className="size-1 rounded-full bg-brand" />
                    )}
                  </span>
                  {/* Precision Hairline Underline expanding from center */}
                  <span
                    className={clsx(
                      "absolute bottom-0 left-0 w-full h-[1.5px] bg-brand transition-transform duration-300 origin-center",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action: Bespoke Sculpted Button */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#02246A] hover:bg-[#1456D8] rounded-lg transition-all duration-300 shadow-[0_4px_14px_rgba(2,36,106,0.18)] hover:shadow-[0_6px_20px_rgba(20,86,216,0.28)] active:scale-95 group border border-white/10"
          >
            <span>Book consultation</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden grid place-items-center size-9 rounded-lg bg-ink/5 hover:bg-ink/10 text-ink transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 -z-10 bg-[#FBFCFE]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center px-8",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-4">
          {navLinks.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={clsx(
                "font-display text-3xl font-bold text-ink py-1.5 transition-all duration-400",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#02246A] rounded-lg mt-6 self-start shadow-sm"
          >
            <span>Book consultation</span>
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
