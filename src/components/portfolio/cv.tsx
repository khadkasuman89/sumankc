import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import cv from "@/assets/suman-cv.pdf.asset.json";

export function CV() {
  return (
    <section id="cv" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Download my latest CV"
          description="Preview the full PDF below or download the most recent version for offline use."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Preview panel */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-2 shadow-card">
            <div className="relative aspect-[1/1.15] w-full overflow-hidden rounded-[1.4rem] bg-muted">
              <iframe
                src={cv.url}
                title="Suman Khadka CV Preview"
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Actions panel */}
          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
              <FileText className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-xl font-bold">Suman Khadka — CV</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Latest professional resume summarizing education, government service, skills, and contact details.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-primary shadow-elegant hover:opacity-90"
              >
                <a href={cv.url} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={cv.url} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" /> Open in New Tab
                </a>
              </Button>
            </div>

            <div className="rounded-2xl bg-muted/50 p-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">File:</span>{" "}
              {cv.original_filename}
              <br />
              <span className="font-semibold text-foreground">Updated:</span>{" "}
              {new Date(cv.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
