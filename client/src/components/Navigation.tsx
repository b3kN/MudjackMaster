import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-brand-blue">Solid Foundation</h1>
                <p className="text-xs text-neutral-gray">Mudjacking Services</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`px-3 py-2 font-medium transition-colors ${
                      isActiveLink(item.href)
                        ? "text-brand-blue"
                        : "text-neutral-gray hover:text-brand-blue"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Call Now Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-brand-orange hover:bg-orange-600 text-white"
            >
              <a href="tel:555-123-4567">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (555) 123-4567
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={`block px-3 py-2 font-medium transition-colors ${
                          isActiveLink(item.href)
                            ? "text-brand-blue"
                            : "text-neutral-gray hover:text-brand-blue"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <Button 
                    asChild 
                    className="bg-brand-orange hover:bg-orange-600 text-white mt-4"
                  >
                    <a href="tel:555-123-4567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
