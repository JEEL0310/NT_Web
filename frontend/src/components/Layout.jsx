import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import Backdrop from "./Backdrop";
import Header from "./Header";
import Footer from "./Footer";
import useSmoothScroll from "../core/useSmoothScroll";
import { ScrollTrigger } from "../core/gsap";

export default function Layout() {
  const { pathname } = useLocation();
  useSmoothScroll();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
    // let the new page mount, then recalc every scroll animation
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <Preloader />
      <Backdrop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
