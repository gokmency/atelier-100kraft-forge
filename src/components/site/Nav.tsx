import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Links defined inside to use translation

export function Nav() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="/#top" className="flex items-baseline gap-2 z-10">
          <span className="font-display text-xl sm:text-2xl tracking-[-0.04em]">100KRAFT</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {[
            { href: "/#about", label: t("nav.atelier") },
            { href: "/#services", label: t("nav.services") },
            { href: "/#projects", label: t("nav.work") },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-technical transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <TooltipProvider delayDuration={100}>
            <div className="hidden sm:flex items-center gap-3 border-r border-foreground/20 pr-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/100kraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground/70 transition-colors hover:text-foreground"
                    aria-label="100KRAFT Instagram"
                  >
                    <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("nav.instagramAtelier")}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/grainzstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-foreground/70 transition-colors hover:text-foreground"
                    aria-label="GRAINZ STUDIO Instagram"
                  >
                    <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("nav.instagramGrainz")}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <button
            onClick={toggleLanguage}
            className="group relative inline-flex h-[42px] items-center justify-center border border-foreground/20 px-3 bg-background hover:bg-accent hover:text-primary-foreground transition-colors"
            aria-label="Toggle language"
          >
            <span className="label-technical text-foreground font-semibold transition-colors duration-500 group-hover:text-primary-foreground">
              {i18n.language === "en" ? "TR" : "EN"}
            </span>
          </button>
          <Link
            to="/store"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5 bg-background"
          >
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground font-semibold transition-colors duration-500 group-hover:text-primary-foreground">
              {t("nav.store")}
            </span>
          </Link>
          <a
            href="/#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/20 px-5 py-2.5"
          >
            <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="label-technical relative text-foreground transition-colors duration-500 group-hover:text-primary-foreground">
              {t("nav.startProject")}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
