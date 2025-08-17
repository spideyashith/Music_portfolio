import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, Twitter, Music2, Music } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Music2, href: "#", label: "Spotify" },
];

const footerLinks = [
  {
    title: "Music",
    links: [
      { name: "Albums", href: "#music" },
      { name: "Singles", href: "#music" },
      { name: "Playlists", href: "#" },
      { name: "Lyrics", href: "#" }
    ]
  },
  {
    title: "Connect",
    links: [
      { name: "Events", href: "#events" },
      { name: "News", href: "#news" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Copyright", href: "#" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Music className="h-8 w-8 text-primary mr-3" />
              <span className="text-2xl font-bold gradient-text">Lloyd Rego</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creating musical experiences that transcend boundaries and connect souls through rhythm and melody.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="border-border/50 hover:border-primary hover:bg-primary/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/30 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive updates about new releases, tour dates, and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-gold hover:opacity-90 text-black-pure px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Lloyd Rego. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with ♥ for music lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};