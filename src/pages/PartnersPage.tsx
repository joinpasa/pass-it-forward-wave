import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Building2, HeartHandshake, Landmark, HandHeart, GraduationCap } from "lucide-react";
import { useLanguage } from "@shared/contexts/LanguageContext";

export default function PartnersPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const t = (en: string, es: string) => (isEs ? es : en);

  const pillars = [
    {
      icon: Building2,
      title: t("Corporate", "Corporativo"),
      description: t(
        "Businesses and brands that sponsor kindness activations, match their teams' volunteer hours, and help fund the movement's reach.",
        "Empresas y marcas que patrocinan activaciones de bondad, igualan las horas de voluntariado de sus equipos y ayudan a financiar el alcance del movimiento."
      ),
    },
    {
      icon: HeartHandshake,
      title: t("Faith-Based", "Basado en la Fe"),
      description: t(
        "Churches, ministries, and faith communities that mobilize their congregations and weave kindness into their service to others.",
        "Iglesias, ministerios y comunidades de fe que movilizan a sus congregaciones y entretejen la bondad en su servicio a los demás."
      ),
    },
    {
      icon: Landmark,
      title: t("Government", "Gobierno"),
      description: t(
        "Municipalities and public agencies that bring the campaign to their cities, proclaim the Kindness Season, and support local activations.",
        "Municipios y agencias públicas que llevan la campaña a sus ciudades, proclaman la Temporada de Bondad y apoyan activaciones locales."
      ),
    },
    {
      icon: HandHeart,
      title: t("Nonprofits", "Sin Fines de Lucro"),
      description: t(
        "Community organizations that co-host activations, share kindness resources, and connect the movement to the people they serve.",
        "Organizaciones comunitarias que co-organizan activaciones, comparten recursos de bondad y conectan el movimiento con las personas que sirven."
      ),
    },
    {
      icon: GraduationCap,
      title: t("Education", "Educación"),
      description: t(
        "Schools, campuses, and educators who bring kindness into classrooms with age-appropriate prompts, activities, and student-led projects.",
        "Escuelas, recintos universitarios y educadores que llevan la bondad a los salones con consignas apropiadas para cada edad, actividades y proyectos liderados por estudiantes."
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-warm-cream">
      <SEO
        title={t("Our Partners — Pásalo Pa'lante", "Nuestros Socios — Pásalo Pa'lante")}
        description={t(
          "Meet the corporate, faith-based, government, nonprofit, and education partners powering Pásalo Pa'lante and the global kindness movement.",
          "Conoce a los socios corporativos, de fe, gubernamentales, sin fines de lucro y educativos que impulsan Pásalo Pa'lante y el movimiento global de bondad."
        )}
        path="/partners"
      />
      <Navbar />
      <main className="pt-32 pb-20 section-padding">
        <article className="max-w-5xl mx-auto">
          <header className="mb-14 text-center">
            <p className="eyebrow">{t("Together We Pass It Forward", "Juntos Lo Pasamos Pa'lante")}</p>
            <h1 className="headline-xl text-foreground mt-3 mb-4">
              {t("Our Partners", "Nuestros Socios")}
            </h1>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              {t(
                "Pásalo Pa'lante moves forward because of the organizations standing behind it. Across five pillars, our partners co-host activations, fund the movement, and carry kindness into every corner of their communities.",
                "Pásalo Pa'lante avanza gracias a las organizaciones que lo respaldan. A través de cinco pilares, nuestros socios co-organizan activaciones, financian el movimiento y llevan la bondad a cada rincón de sus comunidades."
              )}
            </p>
          </header>

          <div className="space-y-14">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <section key={pillar.title} aria-labelledby={`pillar-${pillar.title}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-sand text-warm-earth">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h2 id={`pillar-${pillar.title}`} className="font-display text-2xl md:text-3xl text-foreground">
                        {pillar.title}
                      </h2>
                      <p className="text-foreground/75 leading-relaxed max-w-3xl mt-2">{pillar.description}</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white/50 px-6 py-10 text-center"
                      >
                        <span className="text-sm font-medium tracking-wide uppercase text-foreground/40">
                          {t("Partner Name", "Nombre del Socio")}
                        </span>
                        <span className="mt-2 text-xs text-foreground/35">
                          {t("Coming soon", "Próximamente")}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-16 text-center bg-warm-earth text-warm-cream rounded-2xl p-10">
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t("Become a partner", "Conviértete en socio")}
            </h2>
            <p className="text-warm-cream/85 leading-relaxed max-w-2xl mx-auto mb-6">
              {t(
                "Join the movement and help us pass kindness forward. Tell us about your organization and we'll follow up with next steps.",
                "Únete al movimiento y ayúdanos a pasar la bondad pa'lante. Cuéntanos sobre tu organización y te contactaremos con los próximos pasos."
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-warm-cream px-8 py-3 text-sm font-semibold text-warm-earth transition-transform duration-200 hover:scale-105"
            >
              {t("Get in touch", "Ponte en contacto")}
            </Link>
          </section>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
