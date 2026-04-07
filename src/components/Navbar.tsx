import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Check if we're on the form page
    if (window.location.pathname === '/form') {
      // Navigate to home page with the hash
      window.location.href = '/' + href;
    } else {
      // We're on the home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#5392d5]/20 shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center group"
          >
            <img
              src="/thelyft-logo.png"
              alt="thelyft"
              className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-[#4A4A4A] hover:text-[#151515] transition-all duration-300 relative group font-heading"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5392d5]/0 via-[#5392d5]/10 to-[#f0c831]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
            <a
              href="/form"
              className="ml-4 px-6 py-3 bg-[#f0c831] text-[#151515] rounded-lg font-semibold hover:bg-[#e3b721] hover:shadow-lg hover:shadow-[#f0c831]/40 transition-all duration-300 transform hover:-translate-y-0.5 font-heading"
            >
              Connect With Us
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#151515] hover:bg-[#5392d5]/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#5392d5]/20 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 text-[#4A4A4A] hover:text-[#151515] hover:bg-[#5392d5]/10 rounded-lg transition-all duration-300 font-heading"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/form"
              className="block px-4 py-3 bg-[#f0c831] text-[#151515] rounded-lg font-semibold text-center hover:bg-[#e3b721] hover:shadow-lg hover:shadow-[#f0c831]/40 transition-all duration-300 font-heading"
            >
              Connect With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
