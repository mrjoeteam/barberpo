import Link from 'next/link';
import { Scissors } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2" aria-label="Barberfolio homepage">
              <Scissors className="w-7 h-7 text-primary" />
              <span className="text-2xl font-bold text-text-primary tracking-tight">Barberfolio</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-secondary">
          <p>&copy; {currentYear} Barberfolio. All rights reserved. Built with ❤️ for the barber community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
