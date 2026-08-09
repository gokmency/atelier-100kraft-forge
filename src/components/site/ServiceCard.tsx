import { useRef } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { Service, ProcessVisual } from "./Services";

export function ServiceCard({ s }: { s: Partial<Service> }) {
  const { t } = useLanguage();
  const item = t.services.items[s.id as keyof typeof t.services.items];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      tabIndex={0}
      className="group relative flex h-full min-h-[22rem] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-secondary/60 focus:outline-none md:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="label-technical">{s.id}</span>
        <span
          className={`label-technical transition-opacity duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          {item.meta}
        </span>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-8 top-1/2 -translate-y-1/2 transition-opacity duration-500 md:inset-x-10 ${inView ? "opacity-100" : "opacity-0"}`}
      >
        <div className="h-32">
          <ProcessVisual kind={s.visual} active={inView} />
        </div>
      </div>

      <div>
        <h3 className="font-display text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 group-hover:opacity-40">
          {item.description}
        </p>
      </div>

      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full group-focus:w-full" />
    </div>
  );
}
