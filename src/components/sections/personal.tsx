import { currently, interests } from "@/content/profile";
import Image from "next/image";
import { Icon } from "../icons";
import { SectionHeading, Emphasis, delay } from "../ui";

export function Interests() {
  return (
    <section id="interests" className="py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading tag={interests.tag} title={interests.title} />
          {interests.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              style={delay(160 + i * 80)}
              className="mt-5 text-[1.03rem] text-ink-soft"
            >
              {p}
            </p>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {interests.items.map((item, i) => (
            <li
              key={item.label}
              data-reveal
              style={delay((i % 3) * 90)}
              className={`glass card-hover group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[28px] p-5 ${
                i % 3 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              {item.photo && (
                <>
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    style={{ objectPosition: item.photo.position }}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 46vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </>
              )}
              <span
                className={`relative grid size-12 place-items-center rounded-2xl transition-all duration-500 ${
                  item.photo
                    ? "bg-white/80 text-velvet backdrop-blur"
                    : "bg-mist text-velvet group-hover:bg-velvet group-hover:text-on-velvet"
                }`}
              >
                <Icon name={item.icon} size={22} />
              </span>
              <span
                className={`relative font-display text-[1.15rem] leading-snug ${
                  item.photo ? "text-white" : "text-ink"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Currently() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-x">
        <div
          data-reveal
          className="glass flex flex-col gap-6 rounded-[32px] p-7 md:flex-row md:items-center md:justify-between md:p-9"
        >
          <div>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-velvet">
              {currently.tag}
            </span>
            <h3 className="font-display mt-2 text-[1.8rem] leading-tight text-ink">
              <Emphasis text={currently.title} />
            </h3>
          </div>
          <ul className="flex flex-wrap gap-2.5 md:max-w-[560px] md:justify-end">
            {currently.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
