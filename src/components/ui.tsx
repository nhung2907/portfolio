import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./icons";

/** Độ trễ cho hiệu ứng xuất hiện khi cuộn (xem `[data-reveal]` trong globals.css). */
export function delay(ms: number) {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

/** Chữ nằm giữa *dấu sao* được in nghiêng màu nhung. */
export function Emphasis({ text }: { text: string }) {
  return text.split(/\*(.+?)\*/).map((part, i) =>
    i % 2 ? (
      <em key={i} className="font-display italic text-velvet">
        {part}
      </em>
    ) : (
      part
    ),
  );
}

export function SectionHeading({
  tag,
  title,
  className = "",
  children,
}: {
  tag: string;
  title: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className}>
      <span
        data-reveal
        className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-velvet"
      >
        <Icon name="sparkle" size={12} />
        {tag}
      </span>
      <h2
        data-reveal
        style={delay(80)}
        className="font-display mt-5 text-[clamp(2.15rem,4.6vw,3.5rem)] leading-[1.12] text-balance tracking-[-0.015em] text-ink"
      >
        <Emphasis text={title} />
      </h2>
      {children}
    </div>
  );
}

/** Những bông tuyết nhỏ rơi chậm — vị trí cố định để server và client giống nhau. */
export function Snowfall({ count = 22 }: { count?: number }) {
  const rand = (n: number) => {
    const x = Math.sin(n * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        const size = 3 + rand(i) * 6;
        return (
          <span
            key={i}
            className="snowflake"
            style={
              {
                left: `${rand(i + 100) * 100}%`,
                width: size,
                height: size,
                "--dur": `${14 + rand(i + 200) * 16}s`,
                "--delay": `${-rand(i + 300) * 30}s`,
                "--drift": `${(rand(i + 400) - 0.5) * 120}px`,
                "--o": 0.35 + rand(i + 500) * 0.5,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
