
import { useEffect, useState } from "react";

function SunIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const x1 = 10 + Math.cos(angle) * 6.5;
        const y1 = 10 + Math.sin(angle) * 6.5;
        const x2 = 10 + Math.cos(angle) * 8.5;
        const y2 = 10 + Math.sin(angle) * 8.5;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function MoonIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 13.5A6 6 0 0 1 7 4.5a6 6 0 1 0 8.5 9z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className={`relative w-16 h-9 flex items-center rounded-full border border-border shadow-elegant transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${theme === "dark" ? "bg-black" : "bg-neutral-100"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ minWidth: 64 }}
    >
      {/* Sun icon (left) */}
      <span className={`absolute left-2 z-10 transition-colors duration-300 ${theme === "dark" ? "text-neutral-400" : "text-blue-800"}`}>
        <SunIcon />
      </span>
      {/* Moon icon (right) */}
      <span className={`absolute right-2 z-10 transition-colors duration-300 ${theme === "dark" ? "text-blue-500" : "text-neutral-400"}`}>
        <MoonIcon />
      </span>
      {/* Thumb */}
      <span
        className={`absolute top-1 left-1 w-7 h-7 rounded-full transition-transform duration-300 flex items-center justify-center shadow-md
          ${theme === "dark" ? "translate-x-7 bg-black" : "translate-x-0 bg-white"}`}
      >
        {theme === "dark" ? <MoonIcon className="text-white" /> : <SunIcon className="text-blue-700" />}
      </span>
      <span className="sr-only">Toggle theme</span> 
    </button>
  );
}
