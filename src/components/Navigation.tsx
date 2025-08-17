import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Music, User, Calendar, Camera, Newspaper } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Music },
  { name: "About", href: "#about", icon: User },
  { name: "Music", href: "#music", icon: Music },
  { name: "Events", href: "#events", icon: Calendar },
  { name: "Gallery", href: "#gallery", icon: Camera },
  { name: "News", href: "#news", icon: Newspaper },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text">
          Lloyd Rego
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-lg">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};