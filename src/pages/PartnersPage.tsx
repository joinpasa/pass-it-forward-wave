import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Building2,
  HeartHandshake,
  Landmark,
  HandHeart,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Pillar {
  id: string;
  icon: LucideIcon;
  title: string;
  titleEs: string;
  body: string;
  bodyEs: string;
}

const PILLARS: Pillar[] = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate",
    titleEs: "Corporativo",
    body: "Companies and brands that sponsor the movement, activate kindness in the workplace, and align their name with measurable community impact.",
    bodyEs: "Empresas y marcas que patrocinan el movimiento, activan la bondad en el trabajo y alinean su nombre con impacto comunitario medible.",
  },
  {
    id: "spiritual",
    icon: HeartHandshake,
    title: "Spiritual",
    titleEs: "Espiritual",
    body: "Churches, faith communities, and spiritual organizations that mobilize their congregations and ground the movement in service.",
    bodyEs: "Iglesias, comunidades de fe y organizaciones espirituales que movilizan a sus congregaciones y fundamentan el movimiento en el servicio.",
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government",
    titleEs: "Gobierno",
    body: "Municipalities, agencies, and civic leaders who declare a Kindness Season in their city and support public service activations.",
    bodyEs: "Municipios, agencias y líderes cívicos que declaran una Temporada de Bondad en su ciudad y apoyan activaciones de servicio público.",
  },
  {
    id: "nonprofits",
    icon: HandHeart,
    title: "Nonprofits",
    titleEs: "Organizaciones",
    body: "Mission-aligned nonprofits and community organizations that co-host activations and share kindness resources with their communities.",
    bodyEs: "Organizaciones sin fines de lucro alineadas con la misión que co-organizan activaciones y comparten recursos de bondad con sus comunidades.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    titleEs: "Educación",
    body: "Schools, universities, and educators who bring kindness into the classroom with age-appropriate prompts and student leadership opportunities.",
    bodyEs: "Escuelas, universidades y educadores que llevan la bondad al salón con consignas apropiadas para cada edad y liderazgo estudiantil.",
  },
];

const PLACEHOLDERS = ["Partner Name", "Partner Name", "Partner Name"];

export default function PartnersPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const t = (en: string, es: string) => (isEs ? es : en);

  return (
    <div className="min-h-screen bg-warm-cream">
      <SEO
        title={t("Our Partners | Pásalo Pa'lante", "Nuestros Socios | Pásalo Pa'lante")}
        description={t(
          "Meet the corporate, spiritual, government, nonprofit, and education partners behind the Pásalo Pa'lante kindness movement.",
          "Conoce a los socios corporativos, espirituales, gubernamentales, sin fines de lucro y educativos detrás del movimiento Pásalo Pa'lante."
        )}
        path="/partners"
      />
      <Navbar />
      <main className="pt-32 pb-20 section-padding">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow">Pásalo Pa'lante</p>
          <h1 className="headline-xl text-warm-earth mt-3 mb-4">
            {t("Our Partners", "Nuestros Socios")}
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-14 max-w-2xl">
            {t(
              "A global wave of kindness is only possible together. These are the partners standing with us across five pillars — corporate, spiritual, government, nonprofits, and education.",
              "Una ola global de bondad solo es posible juntos. Estos son los socios que nos acompañan en cinco pilares: corporativo, espiritual, gobierno, organizaciones y educación."
            )}
          </p>

          <div className="space-y-16">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <section key={pillar.id} aria-labelledby={`pillar-${pillar.id}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warm-earth/10 text-warm-earth">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h2 id={`pillar-${pillar.id}`} className="font-display text-2xl md:text-3xl text-warm-earth">
                        {t(pillar.title, pillar.titleEs)}
                      </h2>
                      <p className="text-foreground/70 leading-relaxed mt-1 max-w-2xl">
                        {t(pillar.body, pillar.bodyEs)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {PLACEHOLDERS.map((name, i) => (
                      <div
                        key={`${pillar.id}-${i}`}
                        className="flex items-center gap-4 rounded-2xl border border-dashed border-warm-earth/25 bg-white/50 p-5"
                      >
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-warm-cream border border-warm-earth/15">
                          <span className="font-display text-xl text-warm-earth/50">?</span>
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground/70">{name}</p>
                          <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">
                            {t("Coming soon", "Próximamente")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-warm-earth text-warm-cream p-8 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Become a partner", "Hazte socio")}
            </h2>
            <p className="text-warm-cream/80 leading-relaxed max-w-xl mx-auto mb-6">
              {t(
                "Want to join one of our five pillars? We'd love to hear from you.",
                "¿Quieres unirte a uno de nuestros cinco pilares? Nos encantaría saber de ti."
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-warm-cream text-warm-earth px-8 py-3 font-medium hover:opacity-90 transition"
            >
              {t("Get in touch", "Contáctanos")} →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
