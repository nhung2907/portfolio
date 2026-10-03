import Image from "next/image";
import { projects, type Project } from "@/content/profile";
import { Icon } from "../icons";
import { SectionHeading } from "../ui";

/** Một ảnh lớn; nếu có ảnh thứ hai thì đặt chồng lệch ở góc như ảnh polaroid */
function PhotoStack({ photos }: { photos: Project["photos"] }) {
  const [main, extra] = photos;
  return (
    <div className={`relative ${extra ? "pb-16 pr-10 sm:pb-20 sm:pr-14" : ""}`}>
      <div className="overflow-hidden rounded-[26px] border border-line bg-bg-2 shadow-deep">
        <Image
          src={main.src}
          alt={main.alt}
          placeholder="blur"
          sizes="(min-width: 1024px) 540px, 92vw"
          className="h-auto w-full transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
        />
      </div>
      {extra && (
        <div className="absolute bottom-0 right-0 w-[42%] rotate-[4deg] overflow-hidden rounded-2xl border-[5px] border-surface-strong shadow-deep transition-transform duration-500 hover:rotate-0">
          <Image
            src={extra.src}
            alt={extra.alt}
            placeholder="blur"
            sizes="240px"
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[600px] max-w-5xl rounded-full bg-[var(--glow-1)] opacity-40 blur-[140px]"
      />
      <div className="container-x">
        <SectionHeading tag={projects.tag} title={projects.title} className="max-w-2xl" />

        <div className="mt-12 space-y-6">
          {projects.items.map((project, i) => (
            <article
              key={project.id}
              data-reveal
              className="glass card-hover grid items-center gap-10 rounded-[36px] p-6 sm:p-9 lg:grid-cols-2 lg:gap-14 lg:p-12"
            >
              <ProjectBody project={project} />
              {/* Thẻ lẻ đặt ảnh bên trái để bố cục so le */}
              <div className={i % 2 ? "lg:order-first" : ""}>
                <PhotoStack photos={project.photos} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="rounded-full border border-velvet/25 bg-mist px-3 py-1 text-[0.75rem] font-semibold text-velvet">
          {project.label}
        </span>
        <span className="text-[0.82rem] text-ink-faint">{project.meta}</span>
      </div>
      <h3 className="font-display mt-5 text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.18] text-ink">
        {project.title}
      </h3>
      <p className="mt-4 text-[0.98rem] text-ink-soft">{project.description}</p>
      <ul className="mt-6 space-y-2.5">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 text-[0.95rem] text-ink-soft">
            <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-mist text-velvet">
              <Icon name="check" size={12} strokeWidth={2.4} />
            </span>
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 text-[0.75rem] text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-8">
        {project.link.href ? (
          <a
            href={project.link.href}
            {...(project.link.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
            className="group inline-flex items-center gap-2 font-semibold text-velvet"
          >
            {project.link.label}
            <Icon
              name="arrowUpRight"
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-[0.9rem] italic text-ink-faint">
            <span className="size-1.5 rounded-full bg-gold" />
            {project.link.label}
          </span>
        )}
      </div>
    </div>
  );
}
