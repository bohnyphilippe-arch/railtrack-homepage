import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Train, Database, Wrench, TrendingUp, Building2, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    {
      name: 'Smart Maintenance 360°',
      href: '#maintenance',
      icon: Wrench,
      description: 'Intelligente Wartungslösungen'
    },
    {
      name: 'railTRACK Insights',
      href: '#insights',
      icon: TrendingUp,
      description: 'Datengetriebene Analysen'
    },
    {
      name: 'Innovation',
      href: '#innovation',
      icon: Database,
      description: 'Zukunftstechnologien'
    },
    {
      name: 'Geschäftsmodell',
      href: '#business',
      icon: Building2,
      description: 'Unsere Services'
    },
    {
      name: 'Kontakt',
      href: '#contact',
      icon: Phone,
      description: 'Sprechen Sie uns an'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
              "hover:bg-blue-50 hover:text-blue-700 text-gray-700",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              mobile ? "w-full justify-start text-left" : "text-sm font-medium"
            )}
          >
            <Icon className="h-4 w-4" />
            <div className={mobile ? "flex flex-col" : "hidden lg:block"}>
              <span>{item.name}</span>
              {mobile && (
                <span className="text-xs text-gray-500 mt-1">{item.description}</span>
              )}
            </div>
          </button>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                railTRACK
              </span>
              <span className="text-xs text-gray-500 -mt-1">AG</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              <NavItems />
            </nav>
          )}

          {/* CTA Button - Desktop */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
              >
                Demo anfragen
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg">
                      <Train className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      railTRACK AG
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  <NavItems mobile />
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  >
                    Demo anfragen
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 text-center">
                    Transforming Rail Infrastructure
                    <br />
                    through Data-Driven Innovation
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;