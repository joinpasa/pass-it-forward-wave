import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@shared/components/ui/button";
import { scienceConcepts, researchUrl, conceptSlug } from "@/data/science";
import articles from "@/data/scienceArticles.json";

type Article = { title: string; blocks: [string, string][] };
const data = articles as unknown as Record<string, Article>;

const ScienceArticlePage = () => {
  const { slug = "" } = useParams();
  const article = data[slug];
  if (!article) return <Navigate to="/science" replace />;
  const idx = scienceConcepts.findIndex((c) => conceptSlug(c.title) === slug);
  const concept = scienceConcepts[idx];
  const next = scienceConcepts[(idx + 1) % scienceConcepts.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={`${article.title} — The Science of Kindness`} description={concept?.body ?? article.title} />
      <ScrollToTop />
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <article className="mx-auto max-w-3xl">
          <Link to="/science#concepts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> All 12 science concepts
          </Link>
          <p className="eyebrow mt-8 mb-3">{concept?.number} · The Science of Kindness · {concept?.status}</p>
          <h1 className="headline-xl tracking-normal">{article.title}</h1>
          {concept && <p className="body-lg mt-5 text-muted-foreground">{concept.body}</p>}
          <div className="mt-12 space-y-4">
            {article.blocks.map(([type, text], i) =>
              type === "label" ? (
                <p key={i} className="pt-6 text-xs font-semibold uppercase tracking-wider text-secondary">{text}</p>
              ) : type === "heading" ? (
                <h2 key={i} className="pt-2 text-2xl leading-snug">{text}</h2>
              ) : type === "quote" ? (
                <blockquote key={i} className="border-l-4 border-primary pl-5 text-lg italic">{text}</blockquote>
              ) : (
                <p key={i} className="leading-relaxed text-muted-foreground">{text}</p>
              ),
            )}
          </div>
          <div className="mt-16 rounded-lg border border-border bg-card p-6">
            <p className="eyebrow mb-2">Next science concept</p>
            <h3 className="text-2xl">{next.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{next.body}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><Link to={`/science/${conceptSlug(next.title)}`}>Explore concept {next.number} <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><a href={researchUrl} target="_blank" rel="noopener noreferrer">Join the research <ArrowUpRight /></a></Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ScienceArticlePage;
