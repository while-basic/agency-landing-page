import { Brain, ChevronDown } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DataMind AI</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium" href="#services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium" href="#security">
                  Security
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium" href="#portfolio">
                  Case Studies
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium" href="#contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => scrollToSection('technology')}>
                Technology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('about')}>
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('portfolio')}>
                Case Studies
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('services')}>
                Services
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('security')}>
                Security
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('resources')}>
                Resources
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}