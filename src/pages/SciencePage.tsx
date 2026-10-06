import { ArrowDown, ArrowUpRight, Activity, Heart, Globe2, Users, Microscope, Network, BookOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@shared/components/ui/button";
import { scienceConcepts, measurementAreas, researchUrl } from "@/data/science";
import kindnessPhoto from "@/assets/kindness-hug.jpg";

const researchRoles = [
  { title: "Independent Evaluation", body: "Measure outcomes independently.", icon: Microscope },
  { title: "Public-Safety Analysis", body: "Analyze crime, police calls, and community safety.", icon: ShieldCheck },
  { title: "Network Science", body: "Map how kindness spreads through people and communities.", icon: Network },
  { title: "Wellbeing", body: "Measure stress, connection, belonging, and mental wellbeing.", icon: Heart },
  { title: "Cross-Cultural Research", body: "Compare effects across countries, cultures, and communities.", icon: Globe2 },
  { title: "Publication & Replication", body: "Publish findings and test whether results can be repeated.", icon: BookOpen },
];

const sectionClass = "section-padding py-16 md:py-24";

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="The Science of Kindness — Pásalo Pa'lante & Pass Kindness Forward" description="Explore 12 science concepts, the Puerto Rico kindness campaign, and an open invitation to measure the impact of coordinated kindness." path="/science" />
      <Navbar />
      <main className="pt-20">
        <section className="relative isolate overflow-hidden">
          <img src={kindnessPhoto} alt="A moment of connection through a kind embrace" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-foreground/80" />
          <div className="section-padding py-16 md:py-24">
            <div className="mx-auto max-w-6xl">
              <p className="eyebrow !text-warm-gold mb-5">Pásalo Pa’lante · Pass Kindness Forward</p>
              <h1 className="headline-xl max-w-3xl text-primary-foreground tracking-normal">The Science of Kindness</h1>
              <p className="body-lg mt-6 max-w-2xl text-primary-foreground/90">Most people want a safer, healthier, more connected world. Can small, deliberate actions help achieve it?</p>
              <p className="mt-5 max-w-2xl text-primary-foreground/80 leading-relaxed">What if science can help show how deeply interconnected we really are? We are not asking anyone to simply believe. We are inviting you to examine the data.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#concepts">Explore the evidence <ArrowDown /></a></Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={researchUrl} target="_blank" rel="noopener noreferrer">Be part of the science <ArrowUpRight /></a></Button>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary-foreground/25 pt-6 text-primary-foreground/85">
                <span className="font-semibold text-warm-gold">One act</span>
                {["Giver", "Receiver", "Witness", "World"].map((label) => <span key={label} className="flex items-center gap-3"><ArrowUpRight size={16} aria-hidden="true" />{label}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-4">The measurement thesis</p>
            <h2 className="headline-lg tracking-normal max-w-3xl">Can Collective Kindness Become Measurable?</h2>
            <p className="body-md mt-6 max-w-3xl text-muted-foreground">Pásalo Pa'lante is turning the ripples of kindness into coordinated, global action that we can track, study, and optimize. It begins with a simple progression.</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[{ title: "Intention", body: "Focus it", icon: Heart }, { title: "Action", body: "Live it", icon: Users }, { title: "Measurement", body: "Study what changes", icon: Activity }].map(({ title, body, icon: Icon }, i) => (
                <div key={title} className="border-t border-border pt-6"><div className="mb-4 flex items-center justify-between"><Icon className="text-secondary" size={28} /><span className="text-sm text-muted-foreground">0{i + 1}</span></div><h3 className="text-2xl">{title}</h3><p className="mt-2 text-muted-foreground">{body}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} bg-warm-sand`}>
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-4">2025 · Puerto Rico</p>
            <h2 className="headline-lg tracking-normal">One Island Gave Us a Starting Point.</h2>
            <p className="body-md mt-6 max-w-3xl text-muted-foreground">The initial framework was deployed across Puerto Rico to explore coordinated kindness at a societal scale. The campaign established a starting point for participation and further research.</p>
            <dl className="my-10 grid gap-8 sm:grid-cols-3">
              {[ ["1,135,096", "Acts of kindness"], ["78", "Municipalities"], ["270,000+", "Students & educators"] ].map(([value, label]) => <div key={label}><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 text-3xl md:text-4xl font-serif text-primary">{value}</dd></div>)}
            </dl>
            <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <div><p className="eyebrow mb-3">Coherence sensor data</p><h3 className="headline-md">And We Measured More Than Participation.</h3><p className="mt-4 leading-relaxed text-muted-foreground">The campaign reports localized spikes in sensor data alongside concentrations of prosocial activity. Ten random-number generator (RNG) devices were deployed across Puerto Rico; the reported combined island reading reached the highest signal category: white / extreme.</p></div>
              <div className="border-l-4 border-secondary pl-6"><p className="text-sm font-semibold uppercase text-secondary">A proof of possibility</p><p className="my-4 text-3xl font-serif">10 RNGs · One island</p><p className="leading-relaxed text-muted-foreground">These are campaign-reported observations, not proof that kindness caused a physical-system change. Independent analysis, control periods, and replication are essential.</p><Button asChild variant="link" className="mt-3 px-0"><a href={scienceConcepts[4].url} target="_blank" rel="noopener noreferrer">Explore the Puerto Rico findings <ArrowUpRight /></a></Button></div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 md:items-center">
            <div><p className="eyebrow mb-4">2026 · Global Kindness Month</p><h2 className="headline-lg tracking-normal">Now the Experiment Gets Bigger.</h2><p className="body-md mt-5 text-muted-foreground">What happens when intention becomes action — simultaneously, around the world?</p><Button asChild className="mt-6"><Link to="/commit">Join the movement <ArrowUpRight /></Link></Button></div>
            <div className="grid grid-cols-2 gap-6 border-y border-border py-10"><div><p className="text-3xl md:text-4xl font-serif text-primary">1 billion</p><p className="mt-3 text-muted-foreground">Acts of kindness · goal</p></div><div><p className="text-3xl md:text-4xl font-serif text-secondary">200+</p><p className="mt-3 text-muted-foreground">Countries · ambition</p></div></div>
          </div>
        </section>

        <section id="concepts" className={`${sectionClass} bg-warm-sand scroll-mt-24`}>
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-4">The science we are following</p><h2 className="headline-lg tracking-normal">12 Science Concepts</h2>
            <p className="body-md mt-5 max-w-3xl text-muted-foreground">A connected journey from human coherence to the outward ripples of social impact. Explore each finding, or follow the complete journey to see how one intention might scale into global change.</p>
            <h3 className="mt-10 text-2xl">What do we know — and what are we still testing?</h3>
            <div className="my-6 grid gap-6 md:grid-cols-3">
              {[ ["Established Evidence", "Existing methodologies and reported outcomes supported by published research."], ["Emerging Research", "Ongoing studies and approaches in active observation and evaluation."], ["Scientific Opportunity", "New hypotheses and areas for further investigation."] ].map(([title, body]) => <div key={title} className="border-t border-border pt-4"><p className="font-semibold">{title}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}
            </div>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">The labels below reflect the source framework, not a claim of universal scientific consensus. Evidence strength varies; intention-based physical-system claims remain debated and require independent replication.</p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {scienceConcepts.map((concept) => <article key={concept.number} className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-secondary/60"><div className="flex items-center justify-between gap-3"><span className="text-3xl font-serif text-muted-foreground/60">{concept.number}</span><span className={`text-xs font-semibold uppercase ${concept.status === "Established" ? "text-secondary" : concept.status === "Emerging" ? "text-primary" : "text-warm-sky"}`}>{concept.status}</span></div><h3 className="mt-5 text-2xl leading-snug">{concept.title}</h3><p className="mt-3 mb-6 text-sm leading-relaxed text-muted-foreground">{concept.body}</p><Button asChild variant="link" className="mt-auto justify-start px-0"><a href={concept.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore the science: ${concept.title}`}>Explore the science <ArrowUpRight /></a></Button></article>)}
            </div>
          </div>
        </section>

        <section id="measurement" className={`${sectionClass} scroll-mt-24`}>
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-4">From action to data</p><h2 className="headline-lg tracking-normal max-w-3xl">What Happens When We Measure Everything We Can?</h2>
            <p className="body-md mt-5 max-w-3xl text-muted-foreground">A worldwide kindness campaign creates a rare opportunity to observe change at multiple levels at the same time. With research partners, communities, institutions and scientists, measurements can be established before the campaign, monitored during synchronized action, and compared again afterward.</p>
            <div className="my-10 grid grid-cols-3 border-y border-border py-6 text-center">{["Before", "During", "After"].map((phase) => <p key={phase} className="text-xl font-serif text-secondary">{phase}</p>)}</div>
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">{measurementAreas.map((area, i) => <article key={area.title} className="border-t border-border pt-6"><p className="eyebrow mb-3">0{i + 1} / {i === 5 ? "Exploratory physical systems" : ["Human", "Physiological", "Social", "Behavioral", "Community"][i]}</p><h3 className="text-2xl">{area.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{area.body}</p><ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">{area.metrics.map((metric) => <li key={metric} className="flex items-start gap-2"><span className="text-secondary" aria-hidden="true">•</span>{metric}</li>)}</ul></article>)}</div>
            <p className="mt-10 border-l-4 border-secondary pl-5 text-sm leading-relaxed text-muted-foreground">Exploratory measurements test for statistical associations. An unusual signal does not by itself establish that collective intention caused the physical change.</p>
            <h3 className="mt-10 text-2xl">Measure before. Measure during. Measure after. Then let the data tell us what happened.</h3><p className="mt-4 leading-relaxed text-muted-foreground">The opportunity is to establish protocols in advance, invite independent researchers to participate, preserve null results, compare against control periods and historical baselines, and determine which effects replicate across communities and countries.</p>
          </div>
        </section>

        <section className={`${sectionClass} bg-warm-sand`}>
          <div className="mx-auto max-w-6xl"><p className="eyebrow mb-4">An open invitation to the scientific community</p><h2 className="headline-lg tracking-normal">Help Us Test It.</h2><p className="body-md mt-5 max-w-3xl text-muted-foreground">Help design, measure, analyze, replicate, and publish the science of coordinated kindness at global scale.</p><p className="mt-4 font-semibold">Bring your methods. Challenge our assumptions. Help us find out what actually changes.</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild><a href={researchUrl} target="_blank" rel="noopener noreferrer">Join the research <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href="#measurement">View measurement opportunities <ArrowDown /></a></Button></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{researchRoles.map(({ title, body, icon: Icon }) => <div key={title} className="border-t border-border pt-6"><Icon size={26} className="mb-4 text-secondary" /><h3 className="text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}</div></div>
        </section>

        <section className={sectionClass}><div className="mx-auto max-w-4xl text-center"><p className="eyebrow mb-4">The billion acts initiative</p><h2 className="headline-lg tracking-normal">One Act Is Small. A Billion Acts Become Something We Can Study.</h2><p className="body-md mt-6 text-muted-foreground">Explore the science, question our hypotheses, and help us measure the true impact of coordinated global action.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><a href={researchUrl} target="_blank" rel="noopener noreferrer">Join the scientific community <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#concepts">Explore the 12 concepts <ArrowUpRight /></a></Button></div></div></section>
      </main>
      <Footer /><ScrollToTop />
    </div>
  );
}