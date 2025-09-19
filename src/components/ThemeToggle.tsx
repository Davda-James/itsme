
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
  className={`relative w-11 h-11 flex items-center justify-center rounded-full bg-transparent shadow-lg transition-all duration-400 outline-none focus:outline-none focus:ring-0 border-0 ${theme === "dark" ? "hover:bg-zinc-800/70" : "hover:bg-zinc-200/70"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ minWidth: 44 }}
    >
      <span className="flex items-center justify-center w-full h-full">
        {/* Animate icon change with scale and fade */}
        <span className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
          <Moon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </span>
        <span className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
          <Sun className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />
        </span>
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
