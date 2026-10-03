"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

type Props = {
  items: { id: string; label: string }[];
  initials: string;
  brand: string;
};

export function Navbar({ items, initials, brand }: Props) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    const top = document.getElementById("top");
    if (top) observer.observe(top);
    return () => observer.disconnect();
  }, [items]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-velvet via-velvet-2 to-frost"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
        <div className="container-x">
          <nav
            aria-label="Điều hướng chính"
            className={`glass flex items-center justify-between gap-3 rounded-full bg-surface-strong/85 py-2 pl-2 pr-2 transition-shadow duration-500 sm:pl-2.5 ${
              scrolled ? "shadow-deep" : ""
            }`}
          >
            <a
              href="#top"
              className="group flex items-center gap-2.5"
              onClick={() => setOpen(false)}
            >
              <span className="font-display grid size-9 place-items-center rounded-full bg-gradient-to-br from-velvet to-velvet-2 text-[0.95rem] italic text-on-velvet shadow-soft transition-transform duration-500 group-hover:rotate-[-8deg]">
                {initials}
              </span>
              <span className="font-display text-lg tracking-tight text-ink">
                {brand}
                <span className="text-velvet">.</span>
              </span>
            </a>

            <ul className="hidden items-center gap-0.5 lg:flex">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`rounded-full px-3.5 py-2 text-[0.88rem] transition-colors duration-300 ${
                      active === item.id ? "bg-mist text-velvet" : "text-ink-soft hover:text-velvet"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Đổi giao diện sáng / tối"
                className="grid size-10 place-items-center rounded-full border border-line bg-surface-strong text-ink-soft transition-colors hover:text-velvet"
              >
                <Icon name="moon" size={18} className="dark:hidden" />
                <Icon name="sun" size={18} className="hidden dark:block" />
              </button>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Đóng menu" : "Mở menu"}
                aria-expanded={open}
                className="grid size-10 place-items-center rounded-full bg-ink text-bg lg:hidden"
              >
                <Icon name={open ? "close" : "menu"} size={18} />
              </button>
            </div>
          </nav>

          <div
            className={`glass mt-2 overflow-hidden rounded-[28px] bg-surface-strong/95 transition-all duration-500 lg:hidden ${
              open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <ul className="p-3">
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline justify-between rounded-2xl px-4 py-3 transition-colors ${
                      active === item.id ? "bg-mist text-velvet" : "text-ink hover:bg-mist"
                    }`}
                  >
                    <span className="font-display text-xl">{item.label}</span>
                    <span className="text-xs text-ink-faint">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
