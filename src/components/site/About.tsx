import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";

// stats defined inside

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionLabel index="02" title={t("about.sectionTitle")} />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[8vw] leading-[0.95] sm:text-5xl lg:text-[3.6rem]">
                {t("about.headline")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("about.description1")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("about.description2")}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { value: t("about.stat1Value"), label: t("about.stat1Label") },
                { value: t("about.stat2Value"), label: t("about.stat2Label") },
                { value: t("about.stat3Value"), label: t("about.stat3Label") },
                { value: t("about.stat4Value"), label: t("about.stat4Label") },
              ].map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <div className="bg-background p-8">
                    <div className="font-display text-3xl tracking-[-0.04em]">{s.value}</div>
                    <div className="label-technical mt-3">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
