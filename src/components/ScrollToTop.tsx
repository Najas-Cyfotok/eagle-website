import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableElement = document.getElementById("scrollable-container"); // Update with your container's ID or class
    if (scrollableElement) {
      scrollableElement.scrollTo(0, 0); // Scroll the container to the top
    } else {
      window.scrollTo(0, 0); // Fallback for the window
    }
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay to ensure content is rendered

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [pathname]);

  return null;
};

export default ScrollToTop;
