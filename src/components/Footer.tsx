import { Phone, Mail, MapPin } from "lucide-react";
import footerLogo from "@/assets/hcmeta-logo-icon.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Technology", href: "/technology" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <footer className="py-12 lg:py-16 bg-bg-hero-dark border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="HC Meta" className="h-8 w-auto object-contain brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight font-display text-white">HC META</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6 text-white/70">
              A leading optoelectronic semiconductor company delivering
              cutting-edge high-speed VCSEL and high-performance 3D vision
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 font-display text-white letter-spacing-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 font-display text-white letter-spacing-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <a href="tel:+86075586572384" className="hover:text-white transition-colors">
                  +86 0755-86572384
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <a href="mailto:info@hcmeta.net" className="hover:text-white transition-colors">
                  info@hcmeta.net
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
                <span>
                  1 MARINA BOULEVARD, #28-00,
                  <br />
                  ONE MARINA BOULEVARD,
                  <br />
                  SINGAPORE 018989
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-center text-white/50">
            &copy; {new Date().getFullYear()} HC meta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;