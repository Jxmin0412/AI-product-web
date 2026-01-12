import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Zap, LayoutDashboard, BarChart3, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/dashboard/user", label: "Product Search", icon: LayoutDashboard },
  { to: "/dashboard/business", label: "Analytics", icon: BarChart3 },
  { to: "/admin/users", label: "Users", icon: Users },
];

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight">PriceCurator</span>
              <span className="text-[10px] text-muted-foreground -mt-1 font-medium">
                AI-POWERED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link key={item.to} to={item.to}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-9 gap-2 font-medium transition-all",
                      isActive
                        ? "bg-primary/10 text-primary hover:bg-primary/15"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="h-9 font-medium">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="h-9 font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="pb-6">
                <SheetTitle className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Zap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span>PriceCurator</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-3 h-11 font-medium",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground",
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
                <div className="pt-4 mt-4 border-t flex flex-col gap-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full h-11 font-medium"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-11 font-medium">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
