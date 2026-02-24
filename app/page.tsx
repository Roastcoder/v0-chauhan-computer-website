'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Menu, X, Smartphone, Zap, Award, DollarSign, Wrench, Shield, Cpu, Headphones, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: 'MacBook Air',
      priceRange: '₹60,000 - ₹80,000',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    },
    {
      name: 'MacBook Pro',
      priceRange: '₹1,00,000 - ₹2,00,000',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    },
    {
      name: 'HP Laptops',
      priceRange: '₹40,000 - ₹80,000',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    },
    {
      name: 'Dell Laptops',
      priceRange: '₹35,000 - ₹75,000',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b6e3ac9d?w=400&h=300&fit=crop',
    },
    {
      name: 'Lenovo Laptops',
      priceRange: '₹30,000 - ₹70,000',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
    },
    {
      name: 'Desktops',
      priceRange: '₹25,000 - ₹1,00,000',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
    },
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Laptop Repair',
      description: 'Professional repair services for all laptop brands. Screen replacement, keyboard repair, and more.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Printer Repair',
      description: 'Expert printer maintenance and repair. Keep your printer running smoothly.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Computer Repair',
      description: 'Complete desktop and laptop troubleshooting and repairs with quick turnaround.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Software Installation',
      description: 'Install and configure all software, drivers, and operating systems.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Hardware Upgrade',
      description: 'RAM, SSD, and storage upgrades to boost your device performance.',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Data Recovery',
      description: 'Recover lost data from damaged drives safely and securely.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      review: 'Excellent service! Got my MacBook repaired in just 2 hours. The team is very professional and friendly.',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      review: 'Best laptop prices in Jaipur! I bought my HP laptop here and got great after-sales service.',
      rating: 5,
    },
    {
      name: 'Amit Sharma',
      review: 'Very trustworthy store. Great variety of laptops and genuine parts. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Neha Patel',
      review: 'Had my printer repaired here. Quick service at reasonable prices. Will visit again!',
      rating: 4,
    },
  ];

  const whyChooseUs = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Best prices on laptops and services without compromising quality.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Trusted Local Store',
      description: 'Serving Jaipur for years with consistent quality and service.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Service',
      description: 'Quick repairs and delivery. Most repairs completed within 24-48 hours.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Genuine Parts',
      description: 'Only authentic parts and software. 100% original products guaranteed.',
    },
  ];

  return (
    <main className="w-full bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('products')} className="text-sm hover:text-primary transition">Featured</button>
            <Link href="/products" className="text-sm hover:text-primary transition flex items-center gap-1">
              <ShoppingBag size={16} />
              All Products
            </Link>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-primary transition">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition">Contact</button>
            <a href="tel:+919876543210">
              <Button className="bg-primary hover:bg-primary/90">Call Now</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border p-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('products')} className="text-left text-sm hover:text-primary">Featured</button>
            <Link href="/products" className="text-left text-sm hover:text-primary flex items-center gap-1">
              <ShoppingBag size={16} />
              All Products
            </Link>
            <button onClick={() => scrollToSection('services')} className="text-left text-sm hover:text-primary">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left text-sm hover:text-primary">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-sm hover:text-primary">Contact</button>
            <a href="tel:+919876543210">
              <Button className="w-full bg-primary hover:bg-primary/90">Call Now</Button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Best Laptop & Computer Store in Jaipur
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                ✓ New & Used Laptops
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                ✓ Professional Repair Services
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                ✓ Affordable Pricing
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  onClick={() => scrollToSection('products')}
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  Shop Now
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="px-8"
                >
                  Book Repair
                </Button>
                <a href="tel:+919876543210">
                  <Button 
                    variant="outline"
                    className="px-8"
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-80 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop"
                alt="Premium Laptops"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="w-full py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {['Apple', 'HP', 'Dell', 'Lenovo', 'Asus', 'MSI'].map((brand) => (
              <div key={brand} className="text-lg font-semibold text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Latest and most popular laptops and computers</p>
            </div>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 hidden sm:flex gap-2">
                <ShoppingBag size={18} />
                View All Products
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                onEnquiry={() => scrollToSection('contact')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground mb-8">Professional support for all your device needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground mb-8">What makes us different</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground mb-8">What our happy customers say</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Shop No B-5, Girdhar Marg<br />
                  Near Indian Bank, Ashok Vihar<br />
                  Sector 11, Malviya Nagar<br />
                  Jaipur, Rajasthan 302017
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
                <p className="text-muted-foreground mb-2">
                  📞 <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
                </p>
                <p className="text-muted-foreground">
                  💬 <a href="https://wa.me/919876543210" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 9:30 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Send us a Message</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-foreground text-white py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <p className="text-sm text-gray-300">Trusted computer and laptop store serving Jaipur for years with quality service.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white">Laptop Repair</a></li>
                <li><a href="#services" className="hover:text-white">Printer Repair</a></li>
                <li><a href="#services" className="hover:text-white">Data Recovery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://instagram.com/chauhan_computer_jpr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
                <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-300">
              © 2024 Chauhan Computer. All rights reserved. | Jaipur's Most Trusted Laptop Store
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <FloatingButtons />
    </main>
  );
}
