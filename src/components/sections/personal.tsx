import { currently, gallery, interests } from "@/content/profile";
import { publicFileExists } from "@/lib/public-file";
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

const tileLayout = [
  "col-span-2 row-span-2 md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-2",
];

const tileArt = [
  "radial-gradient(circle at 25% 25%, var(--glow-1), transparent 60%), radial-gradient(circle at 80% 85%, var(--glow-2), transparent 55%), var(--bg-2)",
  "linear-gradient(135deg, var(--glow-2), var(--mist))",
  "radial-gradient(circle at 70% 30%, var(--glow-3), transparent 60%), linear-gradient(160deg, var(--mist), var(--bg-2))",
  "radial-gradient(circle at 15% 80%, var(--glow-1), transparent 55%), linear-gradient(120deg, var(--bg-2), var(--glow-2))",
  "linear-gradient(160deg, var(--glow-3), var(--glow-1))",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading tag={gallery.tag} title={gallery.title} className="max-w-xl" />
          <p data-reveal style={delay(160)} className="max-w-md text-ink-soft">
            {gallery.text}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-6">
          {gallery.photos.map((photo, i) => {
            const hasPhoto = publicFileExists(photo.src);
            return (
              <figure
                key={photo.src}
                data-reveal
                style={delay((i % 3) * 100)}
                className={`group relative overflow-hidden rounded-[26px] border border-line shadow-soft ${tileLayout[i % tileLayout.length]}`}
              >
                {hasPhoto ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    style={{ background: tileArt[i % tileArt.length] }}
                  >
                    <Icon
                      name={i % 2 ? "snowflake" : "camera"}
                      size={i === 0 ? 46 : 30}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-velvet/30"
                    />
                  </div>
                )}
                <figcaption
                  className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-sm ${
                    hasPhoto
                      ? "bg-gradient-to-t from-black/55 to-transparent pt-12 text-white"
                      : "text-ink-soft"
                  }`}
                >
                  <span className="font-display text-[1.05rem] italic">{photo.caption}</span>
                  <span className="text-xs opacity-70">0{i + 1}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div
          data-reveal
          className="glass mt-16 flex flex-col gap-6 rounded-[32px] p-7 md:flex-row md:items-center md:justify-between md:p-9"
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
