'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Wrench, Cpu, Smartphone, Zap, Headphones, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Laptop Repair',
      description: 'Professional repair services for all laptop brands including Apple, HP, Dell, Lenovo, and more. Screen replacement, keyboard repair, battery issues, and motherboard repairs.',
      price: 'Starting from ₹500',
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Printer Repair',
      description: 'Expert printer maintenance and repair services. We handle inkjet, laser, and multifunction printers with quick turnaround times.',
      price: 'Starting from ₹300',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Computer Repair',
      description: 'Complete desktop and laptop troubleshooting and repairs. Software issues, hardware failures, and system optimization.',
      price: 'Starting from ₹400',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Software Installation',
      description: 'Professional software installation and configuration. Operating systems, drivers, antivirus, and all essential software.',
      price: 'Starting from ₹200',
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Hardware Upgrade',
      description: 'RAM upgrade, SSD installation, storage expansion, and performance optimization to boost your device speed.',
      price: 'Variable',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Data Recovery',
      description: 'Recover lost data from damaged drives safely and securely. Hard drive failure, accidental deletion, and corruption recovery.',
      price: 'Starting from ₹1000',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Diagnosis',
      description: 'Free assessment of your device issue',
    },
    {
      step: 2,
      title: 'Quote',
      description: 'Transparent pricing before any repair',
    },
    {
      step: 3,
      title: 'Repair',
      description: 'Expert repair by certified technicians',
    },
    {
      step: 4,
      title: 'Testing',
      description: 'Quality assurance and testing',
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'Device delivered to you in perfect condition',
    },
  ];

  const benefits = [
    'Free diagnosis for all devices',
    'Certified technicians with 5+ years experience',
    'Original spare parts only',
    '6-month warranty on repairs',
    '24-48 hour turnaround time',
    'Onsite support available',
    'Pickup and drop service',
    'Transparent pricing',
  ];

  return (
    <main className="w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Services</h1>
          <p className="text-lg text-muted-foreground">Expert repair and support for all your devices</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Complete Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 h-full flex flex-col card-hover">
                  <div className="flex justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <p className="text-sm font-semibold text-primary text-center">{service.price}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((item, index) => (
              <div key={index} className="relative animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary rotate-45"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-slideInLeft" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-slideInRight" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Time */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <Clock className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Quick Turnaround Time</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Most repairs completed within 24-48 hours. Emergency services available for urgent needs. Free pickup and drop service for major repairs.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Book Service Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">Call us or use WhatsApp for quick service</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919876543210">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg px-8 py-6">
                WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
