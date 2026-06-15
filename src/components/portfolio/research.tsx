import { FileText, Download, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

export function Research() {
  return (
    <section id="research" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Research" title="Published research" />

        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />

          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <FileText className="h-5 w-5" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Journal Publication · Transportation Engineering
            </div>
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">
            Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making
            Approach Under Fuzzy Environment: A Case Study of Kathmandu
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This study proposes a hybrid Fuzzy AHP–TOPSIS framework to evaluate public bus
            alternatives in Kathmandu, balancing economic, environmental, comfort, and
            operational criteria to support transit decision making.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-5">
            <Quote className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm italic text-muted-foreground">
              Khadka, S. (2018). <span className="font-semibold not-italic text-foreground">Ranking of Public Bus Alternatives Using Hybrid MCDM Approach Under Fuzzy Environment: A Case Study of Kathmandu.</span> Institute of Engineering, Pulchowk Campus, Tribhuvan University.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button className="bg-gradient-primary shadow-elegant hover:opacity-90">
              <Download className="h-4 w-4" /> Download Publication
            </Button>
            <Button variant="outline">View Citation</Button>
          </div>
        </article>
      </div>
    </section>
  );
}
