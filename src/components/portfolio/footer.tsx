import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant">
            <HardHat className="h-5 w-5" />
          </span>
          <div>
            <div className="text-sm font-bold">Er. Suman Khadka</div>
            <div className="text-xs text-muted-foreground">Civil Engineer · Nepal</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Er. Suman Khadka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
