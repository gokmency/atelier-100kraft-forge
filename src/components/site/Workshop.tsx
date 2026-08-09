import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";
import workshop from "@/assets/workshop.jpg";

const equipment = [
  ["Additive", "FDM · SLA · SLS printers"],
  ["Materials", "PA12, ASA, PC, TPU, resin, carbon-filled"],
  ["Metrology", "Calipers, gauges, 3D scanning"],
  ["Finishing", "Sanding, vapour smoothing, painting, anodising"],
];

export function Workshop() {
  const { t } = useLanguage();
  const equipment = t.workshop.equipment;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="workshop"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-ink py-28 text-background md:py-40"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex items-baseline gap-4">
          <span className="label-technical text-accent">{t.workshop.label}</span>
          <span className="label-technical text-background/50">{t.workshop.title}</span>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.4rem]">
                {t.workshop.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 text-lg leading-relaxed text-background/60">{t.workshop.desc}</p>
            </Reveal>

            <div className="mt-12 divide-y divide-background/15 border-y border-background/15">
              {equipment.map((eq, i) => (
                <Reveal key={eq.title} delay={0.05 * i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 py-5">
                    <span className="label-technical text-background/45">{eq.title}</span>
                    <span className="text-sm text-background/80">{eq.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden">
              <motion.img
                style={{ y }}
                src={workshop}
                alt="100KRAFT fabrication laboratory with 3D printers, materials and engineering tools"
                loading="lazy"
                width={1600}
                height={1008}
                className="absolute inset-0 h-[116%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
