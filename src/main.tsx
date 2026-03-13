import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Smooth scroll behavior
const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            const header = document.querySelector<HTMLElement>('#site-header');
            const headerRect = header?.getBoundingClientRect();
            const offset = headerRect ? Math.ceil(headerRect.bottom) + 12 : 0;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: Math.max(0, elementTop - offset), behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  return <>{children}</>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollWrapper>
        <App />
      </SmoothScrollWrapper>
    </BrowserRouter>
  </StrictMode>
);
