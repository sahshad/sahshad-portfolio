"use client";

import { useState } from "react";

const steps = [
  { n: "01", title: "Reach Out", desc: "Send a message with your idea — a sentence is enough. No decks, no paperwork, just the spark." },
  { n: "02", title: "Talk It Through", desc: "We'll map the goals, scope, and the fastest path that actually makes sense for you." },
  { n: "03", title: "Build", desc: "I ship working software in tight loops, so you see real progress — not just promises." },
];

const offerings = [
  "SaaS & Web Apps",
  "APIs & Backend Systems",
  "Real-time Applications",
];

export function ContactSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-16 pb-8 md:pt-28 md:pb-20 px-2 sm:px-6 lg:px-8"
    >
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-5">Contact</p>
          <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1]">
            Got something worth building?
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have an idea, a product, or a problem to solve? Let’s talk through it, find the right direction, and turn it into something useful, reliable, and built to last.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 lg:max-w-5xl lg:mx-auto grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-14 lg:gap-16 lg:items-end">
          {/* Left: timeline */}
          <div className="lg:self-center">
            {/* Desktop: horizontal path */}
            <div className="relative hidden lg:block px-2">
              <div className="relative flex justify-between">
                {steps.map((step, i) => {
                  const active = hovered === i;
                  return (
                    <div
                      key={step.n}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative flex-1 flex flex-col items-center text-center px-4 cursor-default"
                    >
                      {i < steps.length - 1 && (
                        <span className="absolute left-1/2 top-2 h-px w-full bg-foreground/25"></span>
                      )}
                      <span
                        className={`relative z-10 grid place-items-center w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          active
                            ? "bg-primary border-primary shadow-[0_0_18px_var(--primary)] scale-125"
                            : "bg-background border-foreground/40"
                        }`}
                      />
                       <span className="mt-4 font-serif text-2xl font-bold text-muted-foreground">
                         {step.n}
                       </span>
                       <h3 className="mt-1 font-semibold text-foreground">
                         {step.title}
                       </h3>
                       <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                     </div>
                   );
                 })}
               </div>
             </div>

            {/* Mobile / tablet: vertical path */}
            <div className="relative lg:hidden">
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={step.n} className="relative pl-12">
                    {i < steps.length - 1 && (
                      <span className="absolute left-6 -translate-x-1/2 top-5 bottom-[-2.5rem] w-px bg-foreground/25"></span>
                    )}
                    <span className="absolute left-6 -translate-x-1/2 top-1 grid place-items-center w-4 h-4 rounded-full border-2 border-foreground/40 bg-background transition-all duration-300 hover:scale-125 hover:border-primary hover:bg-primary hover:shadow-[0_0_18px_var(--primary)]"></span>
                    <span className="font-serif text-2xl font-bold text-primary">{step.n}</span>
                    <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: editorial contact block (desktop only) */}
          <div className="hidden lg:block lg:pl-2">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              What Can We Build?
            </p>
            <ul className="mt-5 space-y-3">
              {offerings.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-[15px] text-foreground/90"
                >
                  <span className="text-primary text-[10px] leading-none">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 mb-7 h-px w-40 bg-border/60"></div>
            <a
              href="mailto:sahshad.dev@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a conversation
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Mobile: centered CTA only */}
        <div className="mt-12 flex justify-center lg:hidden">
          <a
            href="mailto:sahshad.dev@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a conversation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}