'use client';

import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Chauhan Computer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted computer and laptop store in Jaipur since 2010. Quality products, professional repairs, and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition">Home</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition">Products</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary transition">Reviews</Link></li>
              <li><a href="mailto:info@chauhiancomputer.com" className="text-muted-foreground hover:text-primary transition">Email Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Jaipur, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition">+91 9876 543 210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@chauhiancomputer.com" className="text-muted-foreground hover:text-primary transition">info@chauhan.com</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon - Sat: 10 AM - 8 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 Chauhan Computer. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
