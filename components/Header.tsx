'use client';

import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="/chauhan-logo.png"
            alt="Chauhan Computer Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground">Chauhan Computer</h1>
            <p className="text-xs text-muted-foreground">Jaipur</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm hover:text-primary transition">Home</Link>
          <Link href="/products" className="text-sm hover:text-primary transition flex items-center gap-1">
            <ShoppingBag size={16} />
            Products
          </Link>
          <Link href="/services" className="text-sm hover:text-primary transition">Services</Link>
          <Link href="/about" className="text-sm hover:text-primary transition">About</Link>
          <Link href="/testimonials" className="text-sm hover:text-primary transition">Reviews</Link>
          <Link href="/contact" className="text-sm hover:text-primary transition">Contact</Link>
          <a href="tel:+919876543210">
            <Button className="bg-primary hover:bg-primary/90">Call Now</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 flex flex-col gap-3 animate-slideInDown">
          <Link href="/" className="text-left text-sm hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/products" className="text-left text-sm hover:text-primary flex items-center gap-1 py-2" onClick={() => setMobileMenuOpen(false)}>
            <ShoppingBag size={16} />
            Products
          </Link>
          <Link href="/services" className="text-left text-sm hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/about" className="text-left text-sm hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/testimonials" className="text-left text-sm hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
          <Link href="/contact" className="text-left text-sm hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <a href="tel:+919876543210" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90">Call Now</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
