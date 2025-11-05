import React, { useEffect, useState, useRef } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButton() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const hideTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // detect direction
      if (currentY > lastScrollY.current + 10) {
        setScrollDirection("down");
      } else if (currentY < lastScrollY.current - 10) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentY;

      // show the button when user scrolls
      setVisible(true);

      // reset hide timer
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 1800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  if (!visible) return null;

  const atTop = lastScrollY.current < 40;
  const atBottom =
    window.innerHeight + lastScrollY.current >=
    document.body.scrollHeight - 40;

  if (scrollDirection === "up" && atTop) return null;
  if (scrollDirection === "down" && atBottom) return null;

  return (
    <>
      {scrollDirection === "up" ? (
        <div className="scroll-button right top">
          <button
            className="scroll-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={22} />
          </button>
        </div>
      ) : (
        <div className="scroll-button right bottom">
          <button
            className="scroll-btn"
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
          >
            <ArrowDown size={22} />
          </button>
        </div>
      )}
    </>
  );
}
