import { about, identity, marquee } from "@/content/profile";
import { Icon } from "../icons";
import { SectionHeading, delay } from "../ui";

export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-surface py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-8">
        {row.map((word, i) => (
          <span
            key={i}
            aria-hidden={i >= marquee.length}
            className="font-display flex items-center gap-8 whitespace-nowrap text-[1.7rem] italic text-ink-soft md:text-[2rem]"
          >
            {word}
            <Icon name="sparkle" size={16} className="text-velvet/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading tag={about.tag} title={about.title} />
          <p
            data-reveal
            style={delay(160)}
            className="font-display mt-7 text-[1.35rem] leading-relaxed text-ink"
          >
            {lead}
          </p>
        </div>

        <div>
          {rest.map((p, i) => (
            <p key={i} data-reveal className="text-[1.05rem] text-ink-soft">
              {p}
            </p>
          ))}

          <p
            data-reveal
            className="mt-12 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-faint"
          >
            Cách mình làm việc
          </p>
          <ol className="relative mt-5 space-y-4">
            <span
              aria-hidden
              className="absolute bottom-10 left-[2.15rem] top-10 w-px border-l border-dashed border-velvet/30"
            />
            {about.process.map((s, i) => (
              <li
                key={s.step}
                data-reveal
                style={delay(i * 120)}
                className="glass card-hover relative flex items-center gap-5 rounded-[26px] p-5"
              >
                <span className="font-display grid size-[3.1rem] shrink-0 place-items-center rounded-full bg-mist text-xl italic text-velvet">
                  {s.step}
                </span>
                <span>
                  <span className="font-display block text-[1.35rem] text-ink">{s.title}</span>
                  <span className="block text-[0.95rem] text-ink-soft">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Identity() {
  // Bố cục bento: thẻ rộng – hẹp xen kẽ
  const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
  return (
    <section id="identity" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading tag={identity.tag} title={identity.title} className="max-w-2xl" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {identity.cards.map((card, i) => (
            <article
              key={card.title}
              data-reveal
              style={delay((i % 2) * 120)}
              className={`glass card-hover group relative overflow-hidden rounded-[30px] p-7 md:p-8 ${spans[i]}`}
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 size-48 rounded-full bg-[var(--glow-1)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
              />
              <div className="relative flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-mist text-velvet transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon name={card.icon} size={24} />
                </span>
                <span className="font-display text-sm italic text-ink-faint">0{i + 1}</span>
              </div>
              <h3 className="font-display relative mt-8 text-[1.65rem] leading-tight text-ink">
                {card.title}
              </h3>
              <p className="relative mt-3 max-w-[520px] text-[0.98rem] text-ink-soft">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
