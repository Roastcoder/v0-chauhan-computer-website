'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      description: 'Available Mon-Sat, 9:30 AM - 8:00 PM',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Quick response time',
      value: 'Chat on WhatsApp',
      link: 'https://wa.me/919876543210',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Response within 24 hours',
      value: 'info@chauhan.com',
      link: 'mailto:info@chauhan.com',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Visit Us',
      description: 'Our physical store',
      value: 'Jaipur, Rajasthan',
      link: '#address',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:30 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:30 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Public Holidays', hours: 'Closed' },
  ];

  return (
    <main className="w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">We're here to help. Contact us anytime.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Card className="p-6 h-full card-hover animate-slideInUp cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-center mb-4 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-center mb-1">{method.title}</h3>
                  <p className="text-xs text-muted-foreground text-center mb-3">{method.description}</p>
                  <p className="text-sm font-semibold text-primary text-center">{method.value}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <Card className="p-6">
                <ContactForm />
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slideInRight space-y-8">
              {/* Address */}
              <div id="address">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="text-primary" size={24} />
                  Address
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Shop No B-5, Girdhar Marg<br />
                  Near Indian Bank, Ashok Vihar<br />
                  Sector 11, Malviya Nagar<br />
                  Jaipur, Rajasthan 302017<br />
                  India
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{item.day}:</span>
                      <span className="font-semibold text-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Phone className="text-primary" size={24} />
                  Phone
                </h3>
                <a href="tel:+919876543210" className="text-primary hover:underline font-semibold">
                  +91 98765 43210
                </a>
                <p className="text-sm text-muted-foreground mt-2">Available during business hours</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Mail className="text-primary" size={24} />
                  Email
                </h3>
                <a href="mailto:info@chauhan.com" className="text-primary hover:underline font-semibold">
                  info@chauhan.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Find Us On Map</h2>
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg animate-slideInUp">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8851408486166!2d75.81268!3d26.88677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4c2c9c9c9c9%3A0x5c0c9c9c9c9c9c9c!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chauhan Computer Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is your response time for service requests?',
                a: 'We typically respond within 2-4 hours during business hours and 24 hours during off-hours.',
              },
              {
                q: 'Do you offer pickup and delivery services?',
                a: 'Yes, we offer free pickup and drop service for repairs within Jaipur city.',
              },
              {
                q: 'What warranty do you provide on repairs?',
                a: 'All repairs come with a 6-month warranty on parts and labor.',
              },
              {
                q: 'Can I get a quote before repair?',
                a: 'Yes! We provide free diagnosis and detailed quotes before starting any repair work.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">Reach out to us today - we're ready to help!</p>
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
