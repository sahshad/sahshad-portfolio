import Link from "next/link";
import { socials } from "@/data/socials";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 ">
          {/* Brand */}
          <div className="flex flex-col">
            <Link
              href="#home"
              className="font-serif font-black text-5xl tracking-tight text-foreground transition-colors duration-300 hover:text-primary sm:text-6xl"
            >
              Sahshad
            </Link>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {siteConfig.role}
            </p>

            {/* Socials */}
            <div className="mt-auto pt-10 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Big typographic statement */}
          <div className="hidden lg:block lg:self-center lg:text-right">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">A Simple Approach</p>
            <p className="font-serif font-black text-4xl leading-[1.05] sm:text-5xl">
              <span className="block text-foreground/25">MAKE</span>
              <span className="block text-foreground/25">SOMETHING</span>
              <span className="block text-accent">USEFUL.</span>
            </p>
          </div>
        </div>

        {/* Bottom row */}
        {/* <div className="mt-5 flex flex-col gap-2 border-t border-border/60 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            Kerala, India
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </p>
        </div> */}
      </div>
    </footer>
  );
}
