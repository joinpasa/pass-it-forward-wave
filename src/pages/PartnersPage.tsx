import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Building2, HeartHandshake, Landmark, HandHeart, GraduationCap } from "lucide-react";
import { useLanguage } from "@shared/contexts/LanguageContext";

const pointers = import.meta.glob<{ url?: string; default?: { url: string } }>(
  "../assets/partners/*.asset.json",
  { eager: true }
);

const assetUrl = (filename: string): string | undefined => {
  const key = Object.keys(pointers).find((k) => k.endsWith(`/${filename}.asset.json`));
  if (!key) return undefined;
  return pointers[key].url ?? pointers[key].default?.url;
};

interface Partner {
  file: string;
  name: string;
}

const pillars: {
  icon: typeof Building2;
  title: [string, string];
  description: [string, string];
  partners: Partner[];
}[] = [
  {
    icon: Building2,
    title: ["Corporate", "Corporativo"],
    description: [
      "Businesses and brands that sponsor kindness activations, match their teams' volunteer hours, and help fund the movement's reach.",
      "Empresas y marcas que patrocinan activaciones de bondad, igualan las horas de voluntariado de sus equipos y ayudan a financiar el alcance del movimiento.",
    ],
    partners: [
      { file: "corporate_animaze", name: "Animaze" },
      { file: "corporate_c-suite-network", name: "C-Suite Network" },
      { file: "corporate_caribbean-cinemas-logo", name: "Caribbean Cinemas" },
      { file: "corporate_eucaforest-logo1b", name: "Eucaforest" },
      { file: "corporate_gdd_goodpop_logo", name: "Good Pop" },
      { file: "corporate_goodnewsnetwork_logo", name: "Good News Network" },
      { file: "corporate_hb-cbc-news", name: "HB CBC News" },
      { file: "corporate_hts", name: "HTS" },
      { file: "corporate_laser101-st-maarteen", name: "Laser 101 St Maarten" },
      { file: "corporate_mone--you", name: "Mone & You" },
      { file: "corporate_platea-pr", name: "Platea PR" },
      { file: "corporate_tv15sxm", name: "TV15SXM" },
      { file: "corporate_the_weather_network_2011", name: "The Weather Network" },
      { file: "corporate_logo-bmedia--color", name: "bMedia" },
    ],
  },
  {
    icon: HeartHandshake,
    title: ["Faith-Based", "Basado en la Fe"],
    description: [
      "Churches, ministries, and faith communities that mobilize their congregations and weave kindness into their service to others.",
      "Iglesias, ministerios y comunidades de fe que movilizan a sus congregaciones y entretejen la bondad en su servicio a los demás.",
    ],
    partners: [
      { file: "faith-based_awaken---michael-krauss", name: "Awaken — Michael Krauss" },
      { file: "faith-based_brahma-kumaris", name: "Brahma Kumaris" },
      { file: "faith-based_iskcon", name: "ISKCON" },
      { file: "faith-based_oneness", name: "Oneness" },
      { file: "faith-based_purity-weaves-destiny-blue-3-1", name: "Purity Weaves Destiny" },
      { file: "faith-based_the-art-of-living", name: "The Art of Living" },
      { file: "faith-based_yoga-vidya", name: "Yoga Vidya" },
    ],
  },
  {
    icon: Landmark,
    title: ["Government", "Gobierno"],
    description: [
      "Municipalities and public agencies that bring the campaign to their cities, proclaim the Kindness Season, and support local activations.",
      "Municipios y agencias públicas que llevan la campaña a sus ciudades, proclaman la Temporada de Bondad y apoyan activaciones locales.",
    ],
    partners: [
      { file: "government_montserrat", name: "Montserrat" },
      { file: "government_wipr6", name: "WIPR" },
    ],
  },
  {
    icon: HandHeart,
    title: ["Nonprofits", "Sin Fines de Lucro"],
    description: [
      "Community organizations that co-host activations, share kindness resources, and connect the movement to the people they serve.",
      "Organizaciones comunitarias que co-organizan activaciones, comparten recursos de bondad y conectan el movimiento con las personas que sirven.",
    ],
    partners: [
      { file: "nonprofits_70e7b25ec4_wedu_logo_navy_web", name: "WEDU" },
      { file: "nonprofits_ad-council.brightspotcdn", name: "Ad Council" },
      { file: "nonprofits_aiesec_logo_black", name: "AIESEC" },
      { file: "nonprofits_coqui-sq-logo-small-2-1", name: "Coquí" },
      { file: "nonprofits_hmi-logo", name: "HMI" },
      { file: "nonprofits_hitn", name: "HITN" },
      { file: "nonprofits_kids-for-peace", name: "Kids for Peace" },
      { file: "nonprofits_main_logo", name: "Main" },
      { file: "nonprofits_million-peacemakers", name: "Million Peacemakers" },
      { file: "nonprofits_pbs_logo_2019", name: "PBS" },
      { file: "nonprofits_rotary-westminster", name: "Rotary Westminster" },
      { file: "nonprofits_wkm_wide", name: "WKM" },
    ],
  },
  {
    icon: GraduationCap,
    title: ["Education", "Educación"],
    description: [
      "Schools, campuses, and educators who bring kindness into classrooms with age-appropriate prompts, activities, and student-led projects.",
      "Escuelas, recintos universitarios y educadores que llevan la bondad a los salones con consignas apropiadas para cada edad, actividades y proyectos liderados por estudiantes.",
    ],
    partners: [
      { file: "education_departamento-educacion-pr", name: "Departamento de Educación PR" },
      { file: "education_mecys", name: "MECYS" },
    ],
  },
];

export default function PartnersPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const t = (en: string, es: string) => (isEs ? es : en);

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
                <section key={pillar.title[0]} aria-labelledby={`pillar-${pillar.title[0]}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-sand text-warm-earth">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h2
                        id={`pillar-${pillar.title[0]}`}
                        className="font-display text-2xl md:text-3xl text-foreground"
                      >
                        {t(pillar.title[0], pillar.title[1])}
                      </h2>
                      <p className="text-foreground/75 leading-relaxed max-w-3xl mt-2">
                        {t(pillar.description[0], pillar.description[1])}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {pillar.partners.map((partner) => {
                      const url = assetUrl(partner.file);
                      if (!url) return null;
                      return (
                        <div
                          key={partner.file}
                          className="flex items-center justify-center rounded-2xl border border-border bg-white/70 px-6 py-8 transition-shadow duration-200 hover:shadow-lg"
                        >
                          <img
                            src={url}
                            alt={partner.name}
                            loading="lazy"
                            className="max-h-16 w-auto max-w-full object-contain"
                          />
                        </div>
                      );
                    })}
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
