import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { useLanguage } from "@shared/contexts/LanguageContext";
import { Building2, GraduationCap, HandHeart, HeartHandshake, Landmark } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  /** Some logos need a dark tile instead of the default light one to stay legible (e.g. a white-on-transparent mark). */
  dark?: boolean;
}

interface Pillar {
  id: string;
  icon: typeof Building2;
  name: { en: string; es: string };
  description: { en: string; es: string };
  partners: Partner[];
  municipalities?: Partner[];
}

const PILLARS: Pillar[] = [
  {
    id: "corporate",
    icon: Building2,
    name: { en: "Corporate", es: "Corporativo" },
    description: {
      en: "Businesses and brands that sponsor kindness activations, match their teams' volunteer hours, and help fund the movement's reach.",
      es: "Empresas y marcas que patrocinan activaciones de bondad, igualan las horas de voluntariado de sus equipos y ayudan a financiar el alcance del movimiento.",
    },
    partners: [
      { name: "C-Suite Network", logo: "corporate_c-suite-network.png" },
      { name: "Caribbean Cinemas", logo: "corporate_caribbean-cinemas-logo.png" },
      { name: "Eucaforest", logo: "corporate_eucaforest-logo1b.png" },
      { name: "Good Pop", logo: "corporate_gdd-goodpop-logo.svg" },
      { name: "HB CBC News", logo: "corporate_hb-cbc-news.jpg" },
      { name: "HTS", logo: "corporate_hts.png" },
      { name: "Laser 101 St Maarten", logo: "corporate_laser101-st-maarteen.png" },
      { name: "LovingIs", logo: "corporate_lovingis.png" },
      { name: "Mone & You", logo: "corporate_mone-you.png" },
      { name: "Platea PR", logo: "corporate_platea-pr.png" },
      { name: "TV15SXM", logo: "corporate_tv15sxm.png" },
      { name: "bMedia", logo: "corporate_logo-bmedia-color.svg" },
    ],
  },
  {
    id: "faith-based",
    icon: HeartHandshake,
    name: { en: "Faith-Based", es: "Fe y Espiritualidad" },
    description: {
      en: "Churches, ministries, and faith communities that mobilize their congregations and weave kindness into their service to others.",
      es: "Iglesias, ministerios y comunidades de fe que movilizan a sus congregaciones y tejen la bondad en su servicio a los demás.",
    },
    partners: [
      { name: "Awaken — Michael Krauss", logo: "faith-based_awaken-michael-krauss.jpg" },
      { name: "Oneness", logo: "faith-based_oneness.png" },
      { name: "Yoga Vidya", logo: "faith-based_yoga-vidya.jpg" },
    ],
  },
  {
    id: "government",
    icon: Landmark,
    name: { en: "Government", es: "Gobierno" },
    description: {
      en: "Municipalities and public agencies that bring the campaign to their cities, proclaim the Kindness Season, and support local activations.",
      es: "Municipios y agencias públicas que llevan la campaña a sus ciudades, proclaman la Temporada de Bondad y apoyan activaciones locales.",
    },
    partners: [
      { name: "Montserrat", logo: "government_montserrat.png" },
      { name: "WIPR", logo: "government_wipr6.png" },
    ],
    municipalities: [
      { name: "Adjuntas", logo: "municipality_escudo-de-adjuntas-puerto-rico.svg.png" },
      { name: "Aguada", logo: "municipality_coat-of-arms-of-aguada-puerto-rico.svg.png" },
      { name: "Aguadilla", logo: "municipality_escudo-de-aguadilla-puerto-rico.svg.png" },
      { name: "Aguas Buenas", logo: "municipality_escudo-aguas-buenas.png" },
      { name: "Aibonito", logo: "municipality_escudo-de-aibonito-puerto-rico.svg.png" },
      { name: "Añasco", logo: "municipality_coat-of-arms-anasco-puerto-rico.svg.png" },
      { name: "Arecibo", logo: "municipality_coat-of-arms-of-arecibo-puerto-rico.svg.png" },
      { name: "Arroyo", logo: "municipality_coat-of-arms-official-of-arroyo.svg.png" },
      { name: "Barceloneta", logo: "municipality_escudo-de-barceloneta-puerto-rico.svg.png" },
      { name: "Barranquitas", logo: "municipality_escudo-de-barranquitas-puerto-rico.svg.png" },
      { name: "Bayamón", logo: "municipality_bayamon-coat-of-arms.svg.png" },
      { name: "Cabo Rojo", logo: "municipality_gran-escudo-san-miguel-de-cabo-rojo.png" },
      { name: "Caguas", logo: "municipality_coat-of-arms-of-caguas.svg.png" },
      { name: "Camuy", logo: "municipality_coat-of-arms-of-camuy-puerto-rico.svg.png" },
      { name: "Canóvanas", logo: "municipality_escudo-de-canovanas-puerto-rico.svg.png" },
      { name: "Carolina", logo: "municipality_escudo-de-carolina-puerto-rico.svg.png" },
      { name: "Cataño", logo: "municipality_catano.svg.png" },
      { name: "Cayey", logo: "municipality_escudo-de-cayey-puerto-rico.svg.png" },
      { name: "Ceiba", logo: "municipality_escudo-de-ceiba-puerto-rico.svg.png" },
      { name: "Ciales", logo: "municipality_escudo-de-ciales-puerto-rico.svg.png" },
      { name: "Cidra", logo: "municipality_escudo-de-cidra-puerto-rico.svg.png" },
      { name: "Coamo", logo: "municipality_coamo-escudo.png" },
      { name: "Comerío", logo: "municipality_escudo-de-comerio-puerto-rico.svg.png" },
      { name: "Corozal", logo: "municipality_coat-of-arms-of-corozal-puerto-rico.svg.png" },
      { name: "Culebra", logo: "municipality_coat-of-arms-of-culebra-puerto-rico.svg.png" },
      { name: "Dorado", logo: "municipality_escudo-de-dorado-puerto-rico.svg.png" },
      { name: "Fajardo", logo: "municipality_escudo-de-fajardo-puerto-rico-.svg.png" },
      { name: "Florida", logo: "municipality_blason-ville-florida-porto-rico-.svg.png" },
      { name: "Guayama", logo: "municipality_escudo-de-guayama-puerto-rico.svg.png" },
      { name: "Guayanilla", logo: "municipality_escudo-de-guayanilla-puerto-rico.svg.png" },
      { name: "Guaynabo", logo: "municipality_escudo-de-guaynabo-puerto-rico.svg.png" },
      { name: "Guánica", logo: "municipality_escudo-de-guanica-puerto-rico.svg.png" },
      { name: "Gurabo", logo: "municipality_escudo-de-gurabo-puerto-rico.svg.png" },
      { name: "Hatillo", logo: "municipality_hatillo-coat-of-arms.svg.png" },
      { name: "Hormigueros", logo: "municipality_escudo-de-hormigueros-puerto-rico.svg.png" },
      { name: "Humacao", logo: "municipality_escudo-de-humacao-puerto-rico.svg.png" },
      { name: "Isabela", logo: "municipality_coat-of-arms-of-isabela-puerto-rico.svg.png" },
      { name: "Jayuya", logo: "municipality_escudo-de-jayuya-puerto-rico.svg.png" },
      { name: "Juana Díaz", logo: "municipality_coa-municipio-de-juana-diaz.svg.png" },
      { name: "Juncos", logo: "municipality_coat-of-arms-of-juncos-puerto-rico.svg.png" },
      { name: "Lajas", logo: "municipality_coat-of-arms-of-lajas-pr-.svg.png" },
      { name: "Lares", logo: "municipality_escudo-de-lares-puerto-rico.svg.png" },
      { name: "Las Marías", logo: "municipality_escudo-de-las-marias-puerto-rico.svg.png" },
      { name: "Las Piedras", logo: "municipality_escudo-de-las-piedras-puerto-rico.svg.png" },
      { name: "Loíza", logo: "municipality_escudo-de-loiza-puerto-rico.svg.png" },
      { name: "Luquillo", logo: "municipality_escudo-de-luquillo.svg.png" },
      { name: "Manatí", logo: "municipality_coat-of-arms-of-manati-puerto-rico.svg.png" },
      { name: "Maricao", logo: "municipality_escudo-de-maricao-puerto-rico.svg.png" },
      { name: "Maunabo", logo: "municipality_escudo-de-maunabo-puerto-rico.svg.png" },
      { name: "Mayagüez", logo: "municipality_escudo-de-mayaguez.gif" },
      { name: "Moca", logo: "municipality_escudo-de-moca-puerto-rico.svg.png" },
      { name: "Morovis", logo: "municipality_escudo-de-morovis-puerto-rico.svg.png" },
      { name: "Naguabo", logo: "municipality_escudo-de-naguabo-puerto-rico.svg.png" },
      { name: "Naranjito", logo: "municipality_escudo-de-naranjito-puerto-rico.svg.png" },
      { name: "Orocovis", logo: "municipality_coat-of-arms-of-orocovis-puerto-rico.svg.png" },
      { name: "Patillas", logo: "municipality_escudo-de-patillas-puerto-rico.svg.png" },
      { name: "Peñuelas", logo: "municipality_escudo-de-penuelas-puerto-rico.svg.png" },
      { name: "Ponce", logo: "municipality_coat-of-arms-of-ponce-puerto-rico.svg.png" },
      { name: "Quebradillas", logo: "municipality_escudo-de-quebradillas-puerto-rico.svg.png" },
      { name: "Rincón", logo: "municipality_escudorincon.png" },
      { name: "Río Grande", logo: "municipality_escudo-de-rio-grande-puerto-rico.svg.png" },
      { name: "Sabana Grande", logo: "municipality_escudo-de-sabana-grande-puerto-rico.svg.png" },
      { name: "Salinas", logo: "municipality_escudo-de-salinas-puerto-rico.svg.png" },
      { name: "San Germán", logo: "municipality_escudo-de-san-german-puerto-rico.svg.png" },
      { name: "San Juan", logo: "municipality_escudo-de-san-juan-de-puerto-rico.svg.png" },
      { name: "San Lorenzo", logo: "municipality_escudo-de-san-lorenzo-puerto-rico.svg.png" },
      { name: "San Sebastián", logo: "municipality_escudo-de-san-sebastian-puerto-rico.svg.png" },
      { name: "Santa Isabel", logo: "municipality_escudo-de-santa-isabel-puerto-rico.svg.png" },
      { name: "Toa Alta", logo: "municipality_escudo-de-toa-alta-puerto-rico.svg.png" },
      { name: "Toa Baja", logo: "municipality_escudo-de-toa-baja-puerto-rico.svg.png" },
      { name: "Trujillo Alto", logo: "municipality_coat-of-arms-of-trujillo-alto-puerto-rico.svg.png" },
      { name: "Utuado", logo: "municipality_escudo-de-utuado-puerto-rico.svg.png" },
      { name: "Vega Alta", logo: "municipality_escudo-de-vega-alta-puerto-rico.svg.png" },
      { name: "Vega Baja", logo: "municipality_coat-of-arms-of-vega-baja-puerto-rico.svg.png" },
      { name: "Vieques", logo: "municipality_escudo-de-vieques-puerto-rico.svg.png" },
      { name: "Villalba", logo: "municipality_escudo-de-villalba-puerto-rico.svg.png" },
      { name: "Yabucoa", logo: "municipality_escudo-de-yabucoa-puerto-rico.svg.png" },
      { name: "Yauco", logo: "municipality_escudo-de-yauco-puerto-rico.svg.png" },
    ],
  },
  {
    id: "nonprofits",
    icon: HandHeart,
    name: { en: "Nonprofits", es: "Organizaciones sin Fines de Lucro" },
    description: {
      en: "Community organizations that co-host activations, share kindness resources, and connect the movement to the people they serve.",
      es: "Organizaciones comunitarias que coorganizan activaciones, comparten recursos de bondad y conectan al movimiento con las personas a quienes sirven.",
    },
    partners: [
      { name: "Coquí", logo: "nonprofits_coqui-sq-logo-small-2-1.png" },
      { name: "HITN", logo: "nonprofits_hitn.webp" },
      { name: "HMI", logo: "nonprofits_hmi-logo.png" },
      { name: "JA Worldwide", logo: "nonprofits_ja-worldwide.png" },
      { name: "Kids for Peace", logo: "nonprofits_kids-for-peace.png" },
      { name: "Million Peacemakers", logo: "nonprofits_million-peacemakers.png" },
      { name: "PBS", logo: "nonprofits_pbs-logo-2019.svg" },
      { name: "Rotary Club of Santurce", logo: "nonprofits_rotario-santurce-logo-png.png" },
      { name: "Salzburg Global", logo: "nonprofits_salzburg-global.png" },
      { name: "World Value Day", logo: "nonprofits_world-value-day.png" },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: { en: "Education", es: "Educación" },
    description: {
      en: "Schools, campuses, and educators who bring kindness into classrooms with age-appropriate prompts, activities, and student-led projects.",
      es: "Escuelas, campus y educadores que llevan la bondad a las aulas con actividades y proyectos liderados por estudiantes, adecuados para cada edad.",
    },
    partners: [
      { name: "Anguilla Ministry of Education", logo: "education_anguilla-moe.png" },
      { name: "Capoeira Educação", logo: "education_capoeira-educacao.png" },
      { name: "Departamento de Educación PR", logo: "education_departamento-educacion-pr.png" },
      { name: "Learning Planet Institute", logo: "education_learning-planet-institute-logo.png" },
      { name: "MECYS", logo: "education_mecys.png" },
    ],
  },
];

export default function PartnersPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <div className="min-h-screen bg-warm-cream">
      <SEO
        title="Our Partners — Pásalo Pa'lante"
        description="Meet the corporate, faith-based, government, nonprofit, and education partners powering Pásalo Pa'lante and the global kindness movement."
        path="/partners"
      />
      <ScrollToTop />
      <Navbar />
      <main className="pt-32 pb-20 section-padding">
        <article className="max-w-5xl mx-auto">
          <header className="mb-14 text-center">
            <p className="eyebrow">{isEs ? "Juntos Pasamos la Bondad" : "Together We Pass It Forward"}</p>
            <h1 className="headline-xl text-foreground mt-3 mb-4">{isEs ? "Nuestros Socios" : "Our Partners"}</h1>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? "Pásalo Pa'lante avanza gracias a las organizaciones que lo respaldan. A través de cinco pilares, nuestros socios coorganizan activaciones, financian el movimiento y llevan la bondad a cada rincón de sus comunidades."
                : "Pásalo Pa'lante moves forward because of the organizations standing behind it. Across five pillars, our partners co-host activations, fund the movement, and carry kindness into every corner of their communities."}
            </p>
          </header>

          <div className="space-y-14">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <section key={pillar.id} aria-labelledby={`pillar-${pillar.id}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-sand text-warm-earth">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <div>
                      <h2 id={`pillar-${pillar.id}`} className="font-display text-2xl md:text-3xl text-foreground">
                        {isEs ? pillar.name.es : pillar.name.en}
                      </h2>
                      <p className="text-foreground/75 leading-relaxed max-w-3xl mt-2">
                        {isEs ? pillar.description.es : pillar.description.en}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {pillar.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className={`flex items-center justify-center rounded-2xl border border-border px-6 py-8 transition-shadow duration-200 hover:shadow-lg ${
                          partner.dark ? "bg-warm-earth text-warm-cream" : "bg-warm-sand/80"
                        }`}
                      >
                        <img
                          src={`/partners/${partner.logo}`}
                          alt={partner.name}
                          loading="lazy"
                          className="max-h-16 w-auto max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {pillar.municipalities && (
                    <div className="mt-8">
                      <h3 className="font-display text-xl text-foreground mb-4">
                        {isEs ? "Municipios de Puerto Rico" : "Municipalities of Puerto Rico"}
                      </h3>
                      <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                        {pillar.municipalities.map((m) => (
                          <div key={m.name} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-warm-sand/80 p-3">
                            <img src={`/partners/${m.logo}`} alt={m.name} loading="lazy" className="h-14 w-auto object-contain" />
                            <span className="text-xs text-foreground/75 text-center leading-tight">{m.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <section className="mt-16 text-center bg-warm-earth text-warm-cream rounded-2xl p-10">
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {isEs ? "Conviértete en socio" : "Become a partner"}
            </h2>
            <p className="text-warm-cream/85 leading-relaxed max-w-2xl mx-auto mb-6">
              {isEs
                ? "Únete al movimiento y ayúdanos a pasar la bondad. Cuéntanos sobre tu organización y te contactaremos con los próximos pasos."
                : "Join the movement and help us pass kindness forward. Tell us about your organization and we'll follow up with next steps."}
            </p>
            <a
              href="/partners/apply"
              className="inline-flex items-center justify-center rounded-full bg-warm-cream px-8 py-3 text-sm font-semibold text-warm-earth transition-transform duration-200 hover:scale-105"
            >
              {isEs ? "Contáctanos" : "Get in touch"}
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
