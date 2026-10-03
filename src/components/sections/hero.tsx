import Image from "next/image";
import { profile } from "@/content/profile";
import { publicFileExists } from "@/lib/public-file";
import { Icon } from "../icons";
import { Snowfall, delay } from "../ui";

export function Hero() {
  const words = profile.name.split(" ");
  const last = words.pop();
  const hasAvatar = publicFileExists(profile.avatar);

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Quầng sáng nền */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 size-[620px] rounded-full bg-[var(--glow-1)] opacity-80 blur-[110px]" />
        <div className="absolute -right-40 top-10 size-[560px] rounded-full bg-[var(--glow-2)] opacity-80 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 size-[420px] rounded-full bg-[var(--glow-3)] opacity-70 blur-[110px]" />
      </div>
      <Snowfall />

      <div className="container-x grid min-h-[100svh] items-center gap-16 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-28">
        <div className="text-center lg:text-left">
          <p
            data-reveal
            className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-ink-soft"
          >
            <span className="pulse-dot size-2 rounded-full bg-velvet" />
            {profile.greeting}
          </p>

          <h1
            data-reveal
            style={delay(80)}
            className="font-display mt-6 text-[clamp(3.3rem,9.5vw,6.8rem)] font-[400] leading-[1.04] tracking-[-0.025em] text-ink"
          >
            {words.join(" ")}{" "}
            <span className="block bg-gradient-to-r from-velvet via-velvet-2 to-frost bg-clip-text pb-2 italic text-transparent">
              {last}
              <span className="text-gold">.</span>
            </span>
          </h1>

          <ul
            data-reveal
            style={delay(160)}
            className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-velvet/20 bg-surface-strong/70 px-3.5 py-1.5 text-[0.88rem] font-medium text-velvet"
              >
                {role}
              </li>
            ))}
          </ul>

          <blockquote
            data-reveal
            style={delay(240)}
            className="font-display mx-auto mt-7 max-w-[540px] text-[1.3rem] italic leading-snug text-ink-soft lg:mx-0 lg:border-l-2 lg:border-velvet/40 lg:pl-5"
          >
            “{profile.quote}”
          </blockquote>

          <p
            data-reveal
            style={delay(320)}
            className="mx-auto mt-6 max-w-[600px] text-[1.03rem] text-ink-soft lg:mx-0"
          >
            {profile.intro}
          </p>

          <div
            data-reveal
            style={delay(400)}
            className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <a href="#projects" className="btn btn-primary">
              Xem dự án
              <Icon name="arrowRight" size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Kết nối với mình
            </a>
          </div>
        </div>

        <div
          data-reveal
          style={delay(200)}
          className="relative mx-auto w-full max-w-[400px] lg:mr-6"
        >
          <div className="relative">
            {/* Viền vòm lệch phía sau */}
            <div
              aria-hidden
              className="arch absolute inset-0 translate-x-4 translate-y-4 border border-velvet/30 sm:translate-x-6 sm:translate-y-6"
            />
            <div className="arch relative aspect-[4/5] overflow-hidden border-[6px] border-surface-strong bg-bg-2 shadow-deep">
              {hasAvatar ? (
                <Image
                  src={profile.avatar}
                  alt={`Ảnh chân dung ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-cover"
                />
              ) : (
                <AvatarArt initials={profile.initials} />
              )}
            </div>

            {/* Huy hiệu chữ xoay tròn */}
            <div className="absolute -bottom-6 -left-4 grid size-28 place-items-center rounded-full bg-surface-strong shadow-soft sm:-left-10 sm:size-32">
              <svg
                viewBox="0 0 100 100"
                className="spin-slow absolute inset-0 size-full p-1.5"
                aria-hidden
              >
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-ink-soft text-[8.4px] font-medium uppercase">
                  {/* textLength = chu vi đường tròn, để chữ nối khít một vòng */}
                  <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">
                    {profile.name} ✦ Portfolio ✦ 2026 ✦
                  </textPath>
                </text>
              </svg>
              <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-velvet to-velvet-2 text-on-velvet">
                <Icon name="snowflake" size={20} />
              </span>
            </div>

            {/* Thế mạnh */}
            <div
              className="float glass absolute -right-2 bottom-16 flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.82rem] font-medium text-ink sm:-right-8"
              style={{ animationDelay: "-3.5s" }}
            >
              {profile.heroBadges.map((b, i) => (
                <span key={b} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="size-1 rounded-full bg-velvet/50" />}
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Hình minh hoạ hiển thị khi chưa có public/images/avatar.jpg */
function AvatarArt({ initials }: { initials: string }) {
  return (
    <div className="relative size-full bg-[radial-gradient(circle_at_28%_18%,var(--glow-1),transparent_60%),radial-gradient(circle_at_80%_75%,var(--glow-2),transparent_55%),linear-gradient(165deg,var(--mist),var(--bg-2))]">
      <svg viewBox="0 0 400 500" className="absolute inset-0 size-full" aria-hidden>
        <g className="text-velvet" fill="none" stroke="currentColor" strokeLinecap="round">
          <circle cx="200" cy="215" r="118" strokeOpacity="0.16" />
          <circle cx="200" cy="215" r="150" strokeOpacity="0.1" strokeDasharray="2 7" />
          <path d="M60 470 C 120 380, 280 380, 340 470" strokeOpacity="0.14" />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[8.5rem] leading-none italic text-velvet/85">
          {initials}
        </span>
        <span className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-ink-soft">
          Tuyết · Nhung
        </span>
      </div>
      {[
        [64, 92, 16],
        [318, 120, 12],
        [92, 368, 11],
        [300, 392, 18],
        [340, 260, 9],
      ].map(([x, y, s], i) => (
        <Icon
          key={i}
          name="snowflake"
          size={s}
          className="absolute text-velvet/35"
          style={{ left: `${(x / 400) * 100}%`, top: `${(y / 500) * 100}%` }}
        />
      ))}
    </div>
  );
}
