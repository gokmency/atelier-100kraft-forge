import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { ServiceCard } from "./ServiceCard";

export type Service = {
  id: string;
  title: string;
  description: string;
  meta: string;
  visual: "form" | "cad" | "print" | "proto" | "mold" | "consult";
};

const serviceKeys = [
  { id: "01", visual: "form" as const },
  { id: "02", visual: "cad" as const },
  { id: "03", visual: "print" as const },
  { id: "04", visual: "proto" as const },
  { id: "05", visual: "mold" as const },
  { id: "06", visual: "consult" as const },
];

export function ProcessVisual({ kind, active }: { kind: Service["visual"]; active: boolean }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.7,
  } as const;

  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: { duration: 0.9, delay, ease: "easeInOut" as const },
  });

  return (
    <svg viewBox="0 0 100 60" className="h-full w-full text-accent">
      {kind === "form" && (
        <>
          <motion.path
            d="M18 44 C18 20 42 12 58 20 C72 27 78 40 70 46 C60 52 30 54 18 44 Z"
            {...stroke}
            {...draw(0)}
          />
          <motion.path d="M26 44 C30 30 44 24 56 28" {...stroke} {...draw(0.2)} />
        </>
      )}
      {kind === "cad" && (
        <>
          <motion.path d="M28 18 H68 V44 H28 Z" {...stroke} {...draw(0)} />
          <motion.path d="M28 18 L40 10 H80 L68 18" {...stroke} {...draw(0.15)} />
          <motion.path d="M68 44 L80 36 V10" {...stroke} {...draw(0.3)} />
        </>
      )}
      {kind === "print" && (
        <>
          <motion.path d="M24 46 H76" {...stroke} {...draw(0)} />
          <motion.path d="M34 46 V34 H66 V46" {...stroke} {...draw(0.15)} />
          <motion.path d="M42 34 V24 H58 V34" {...stroke} {...draw(0.3)} />
          <motion.path d="M50 8 V20" {...stroke} {...draw(0.45)} />
        </>
      )}
      {kind === "proto" && (
        <>
          <motion.path d="M22 40 H44 V16 H22 Z" {...stroke} {...draw(0)} />
          <motion.path d="M52 46 H78 V22 H52 Z" {...stroke} {...draw(0.2)} />
          <motion.path d="M44 28 H52" {...stroke} {...draw(0.4)} />
        </>
      )}
      {kind === "mold" && (
        <>
          <motion.path d="M20 12 H80 V28 H20 Z" {...stroke} {...draw(0)} />
          <motion.path d="M20 32 H80 V48 H20 Z" {...stroke} {...draw(0.15)} />
          <motion.path d="M44 28 H56 V32 H44 Z" {...stroke} {...draw(0.3)} />
          <motion.path d="M50 4 V12" {...stroke} {...draw(0.45)} />
        </>
      )}
      {kind === "consult" && (
        <>
          <motion.path d="M18 46 H82" {...stroke} {...draw(0)} />
          <motion.path d="M18 46 L36 32 L52 38 L70 14" {...stroke} {...draw(0.2)} />
          <motion.circle cx="70" cy="14" r="3" {...stroke} {...draw(0.5)} />
        </>
      )}
    </svg>
  );
}

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionLabel index={t.services.label} title={t.services.title} />
          <Reveal>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t.services.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((s, i) => (
            <Reveal key={s.id} delay={0.04 * i}>
              <ServiceCard s={s as Partial<Service>} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
