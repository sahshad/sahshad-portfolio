export interface ContactStep {
  n: string;
  title: string;
  desc: string;
}

export const contactSteps: ContactStep[] = [
  { n: "01", title: "Reach Out", desc: "Send a message with your idea — a sentence is enough. No decks, no paperwork, just the spark." },
  { n: "02", title: "Talk It Through", desc: "We'll map the goals, scope, and the fastest path that actually makes sense for you." },
  { n: "03", title: "Build", desc: "I ship working software in tight loops, so you see real progress — not just promises." },
];

export const contactOfferings: string[] = ["SaaS & Web Apps", "APIs & Backend Systems", "Real-time Applications"];
