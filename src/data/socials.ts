import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { siteConfig } from "./site-config";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

// Edit this list to change the social links in the footer.
export const socials: SocialLink[] = [
  { href: "https://github.com/sahshad", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sahshad", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/sahshad", icon: Twitter, label: "X" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];
