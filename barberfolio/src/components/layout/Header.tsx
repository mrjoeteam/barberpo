import Link from "next/link";
import { Scissors, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Barberfolio homepage">
          <Scissors className="w-7 h-7 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Barberfolio</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/search" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Find Barbers
          </Link>
          <Link href="/#about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
                Log In
            </Link>
            <Link href="/signup" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Sign Up
            </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-white/10">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
