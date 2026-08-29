import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { siteConfig } from "./site-config";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const socials: SocialLink[] = [
  { href: "https://github.com/sahshad", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammed-sahshad-702379275", icon: Linkedin, label: "LinkedIn" },
  { href: "", icon: Twitter, label: "X" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];
