import { contact, footer, profile } from "@/content/profile";
import { CopyEmail } from "../copy-email";
import { Icon } from "../icons";
import { Emphasis, Snowfall, delay } from "../ui";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[40px] bg-[linear-gradient(140deg,#4a1830_0%,#7d3150_45%,#3a2346_100%)] px-6 py-16 text-center text-white shadow-deep sm:px-12 md:py-24"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 size-96 rounded-full bg-[#e58fae] opacity-30 blur-[100px]" />
            <div className="absolute -bottom-32 -right-20 size-[28rem] rounded-full bg-[#7d93c9] opacity-30 blur-[110px]" />
          </div>
          <div className="[--flake:rgb(255_255_255/0.75)]">
            <Snowfall count={16} />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/85">
            <Icon name="sparkle" size={12} />
            {contact.tag}
          </span>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-[clamp(2.6rem,7vw,5rem)] leading-[1.05] tracking-[-0.02em] [&_em]:text-[#f5bfd2]">
            <Emphasis text={contact.title} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] text-white/75">{contact.text}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="btn bg-white text-[#5a1f38] shadow-[0_18px_40px_-16px_rgb(0_0_0/0.5)] hover:bg-[#fff4f8]"
            >
              <Icon name="mail" size={18} />
              {contact.email}
            </a>
            <CopyEmail email={contact.email} />
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {contact.links.map((link, i) => (
              <li key={link.label} data-reveal style={delay(i * 80)}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[0.92rem] text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:text-white"
                >
                  <Icon name={link.icon} size={17} />
                  {link.label}
                  <Icon
                    name="arrowUpRight"
                    size={14}
                    className="opacity-50 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="container-x pb-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center text-sm text-ink-faint md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} <span className="text-ink-soft">{profile.name}</span>.{" "}
          {footer}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-velvet"
        >
          Lên đầu trang
          <span className="grid size-8 place-items-center rounded-full border border-line transition-transform group-hover:-translate-y-0.5">
            <Icon name="arrowUp" size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
}
