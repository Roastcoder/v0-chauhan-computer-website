'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { DollarSign, Award, Zap, Shield, Wrench, Cpu, Smartphone, Headphones, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [contactSuccess, setContactSuccess] = useState(false);

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
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Brands Section */}
      <section className="w-full py-12 bg-white border-y border-border animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {['Apple', 'HP', 'Dell', 'Lenovo', 'Asus', 'MSI'].map((brand) => (
              <div key={brand} className="text-lg font-semibold text-muted-foreground hover:text-primary transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-16 bg-background animate-slideInUp">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Latest and most popular laptops and computers</p>
            </div>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 flex gap-2 whitespace-nowrap">
                <ShoppingBag size={18} />
                View All Products
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="animate-slideInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProductCard
                  {...product}
                  onEnquiry={() => window.location.href = '/contact'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-white border-y border-border animate-slideInUp">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className="text-muted-foreground mb-8">Professional support for all your device needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-background animate-slideInUp">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-muted-foreground mb-8">What makes us different</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center card-hover animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
      <section className="w-full py-16 bg-white border-y border-border animate-slideInUp">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Customer Reviews</h2>
          <p className="text-muted-foreground mb-8">What our happy customers say</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-blue-100 animate-slideInUp">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade or Repair?</h2>
          <p className="text-lg text-muted-foreground mb-8">Get in touch with us today for the best service</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-6">
                Book Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Buttons */}
      <FloatingButtons />
    </main>
  );
}
