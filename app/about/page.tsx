'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Users, Target, Heart, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years of Service', icon: <Award /> },
    { number: '10K+', label: 'Happy Customers', icon: <Heart /> },
    { number: '50K+', label: 'Devices Repaired', icon: <TrendingUp /> },
    { number: '100%', label: 'Original Parts', icon: <Target /> },
  ];

  const team = [
    {
      name: 'Rajesh Chauhan',
      role: 'Founder & Director',
      speciality: '20+ years tech experience',
    },
    {
      name: 'Priya Sharma',
      role: 'Service Manager',
      speciality: 'Certified Laptop Technician',
    },
    {
      name: 'Amit Patel',
      role: 'Hardware Specialist',
      speciality: 'Desktop & Server Expert',
    },
    {
      name: 'Neha Singh',
      role: 'Customer Support',
      speciality: 'Customer Satisfaction',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only original parts and ensure every repair meets our high standards.',
    },
    {
      title: 'Customer Trust',
      description: 'Transparent pricing and honest advice. We never oversell unnecessary services.',
    },
    {
      title: 'Fast Service',
      description: 'Quick turnaround time without compromising on quality of work.',
    },
    {
      title: 'Professional Team',
      description: 'Certified technicians with continuous training and expertise.',
    },
  ];

  return (
    <main className="w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Chauhan Computer</h1>
          <p className="text-lg text-muted-foreground">Jaipur's Most Trusted Computer & Laptop Store Since 2010</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, Chauhan Computer started with a simple mission: to provide affordable, quality laptop and computer solutions to Jaipur's residents. What began as a small shop has grown into one of the most trusted names in the city.
              </p>
              <p className="text-muted-foreground mb-4">
                We've served over 10,000 satisfied customers and repaired more than 50,000 devices. Our commitment to quality, transparency, and customer service has made us the go-to destination for laptop purchases, repairs, and tech support.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to expand our services, invest in the latest technology, and train our team to provide the best experience possible to every customer who walks through our door.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slideInRight">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center card-hover">
                  <div className="flex justify-center mb-2 text-primary text-4xl">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 card-hover animate-slideInLeft">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To provide high-quality, affordable laptop and computer solutions with exceptional customer service. We aim to make technology accessible to everyone in Jaipur while maintaining the highest standards of professionalism and integrity.
              </p>
            </Card>
            <Card className="p-8 card-hover animate-slideInRight">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To be the most trusted and recommended computer store in Jaipur. We envision a future where every customer feels confident purchasing from us and knows they'll receive honest advice, quality products, and exceptional service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center card-hover animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 text-center card-hover animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.speciality}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slideInLeft">
                <h3 className="text-xl font-semibold mb-2 text-primary">Experience You Can Trust</h3>
                <p className="text-muted-foreground">
                  With over a decade of service in Jaipur, we've built our reputation on reliability, quality, and customer satisfaction. Our team stays updated with the latest technology and repair techniques.
                </p>
              </div>
              <div className="animate-slideInRight">
                <h3 className="text-xl font-semibold mb-2 text-primary">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden charges. We provide free diagnosis and detailed quotes before any repair work begins. You always know exactly what you're paying for.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slideInLeft">
                <h3 className="text-xl font-semibold mb-2 text-primary">Original Parts & Software</h3>
                <p className="text-muted-foreground">
                  We use only genuine components and licensed software. Counterfeit parts are never used in our repairs, ensuring your device's longevity and performance.
                </p>
              </div>
              <div className="animate-slideInRight">
                <h3 className="text-xl font-semibold mb-2 text-primary">Customer-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We listen to your concerns, provide expert advice, and go the extra mile to ensure you're happy with our service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-lg text-muted-foreground mb-8">Visit us today or connect online for expert advice</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Shop Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
