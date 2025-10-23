import { useEffect } from "react";
import Lenis from "lenis"; // ✅ updated import

import { ScrollTrigger } from "gsap/all"; // only if you're using GSAP ScrollTrigger
import gsap from "gsap";

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // keep GSAP synced
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: integrate Lenis scroll event with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
