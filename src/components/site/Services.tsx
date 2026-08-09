import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { ServiceCard } from "./ServiceCard";
import { Service } from "./ProcessVisual";

const serviceKeys = [
  { id: "01", visual: "form" as const },
  { id: "02", visual: "cad" as const },
  { id: "03", visual: "print" as const },
  { id: "04", visual: "proto" as const },
  { id: "05", visual: "mold" as const },
  { id: "06", visual: "consult" as const },
];

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
