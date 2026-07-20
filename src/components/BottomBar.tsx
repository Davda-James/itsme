import { Home, X, Sun, Moon, BookText } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const iconLinkClass =
  "inline-flex size-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const Divider = () => (
  <span
    aria-hidden
    className="mx-0.5 h-5 w-px shrink-0 bg-zinc-300 dark:bg-zinc-700"
  />
);

const BottomBar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <nav
      aria-label="Quick links"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-0.5 sm:gap-1",
          "rounded-full border border-zinc-200 bg-white/85 px-2 py-1.5 shadow-lg backdrop-blur-md",
          "dark:border-zinc-800 dark:bg-zinc-900/85",
        )}
      >
        <a href="#home" aria-label="Home" className={iconLinkClass}>
          <Home className="size-5" />
        </a>

        <Divider />

        <a href="/blog" aria-label="Blog" className={iconLinkClass}>
          <BookText className="size-5" />
        </a>

        <Divider />

        <a
          href="https://github.com/Davda-James"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={iconLinkClass}
        >
          <SiGithub className="size-5" />
        </a>
        <a
          href="https://linkedin.com/in/james-davda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={iconLinkClass}
        >
          <FaLinkedinIn className="size-5" />
        </a>
        <a
          href="https://x.com/JamesDavda007"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className={iconLinkClass}
        >
          <X className="size-5" />
        </a>

        <Divider />

        <button
          type="button"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleTheme}
          className={iconLinkClass}
        >
          {dark ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </button>
      </div>
    </nav>
  );
};

export default BottomBar;
