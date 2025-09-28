import { Home, X , Sun, Moon } from "lucide-react";
import {  SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { useState } from "react";

export default function BottomBar() {
  const [dark, setDark] = useState(false);

  return (
    <div className="fixed left-1/2 bottom-8 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 bg-white/80 dark:bg-zinc-900/80 rounded-full shadow-lg px-6 py-3 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
        <a href="#home" aria-label="Home">
          <Home className="w-5 h-5" />
        </a>
        {/* <span className="h-5 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
        <a href="#blog" aria-label="Blog">
          <BookText className="w-5 h-5" />
        </a> */}
        <span className="h-5 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
        <a href="https://github.com/Davda-James" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <SiGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/james-davda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a href="https://x.com/0xbondj" target="_blank" rel="noopener noreferrer" aria-label="X">
          <X className="w-5 h-5" />
        </a>
        <span className="h-5 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
        <button
          aria-label="Toggle theme"
          onClick={() => {
            setDark((d) => !d);
            document.documentElement.classList.toggle("dark");
          }}
        >
          {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
