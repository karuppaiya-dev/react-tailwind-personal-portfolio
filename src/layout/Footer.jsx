import { Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  // { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Karuppaiya<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Karuppaiya{" "}
              <Heart className="inline-block w-4 h-4" />. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/karuppaiya-dev" },
              {
                icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/karuppaiya-murugan-881bab30b/",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank" // Recommended for external social links
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />{" "}
                {/* Use className here to control size */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
