'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      city: 'Jaipur',
      review: 'Excellent service! Got my MacBook repaired in just 2 hours. The team is very professional and friendly. They diagnosed the issue correctly and fixed it with genuine parts. Highly recommended!',
      rating: 5,
      date: '2 months ago',
    },
    {
      name: 'Priya Singh',
      role: 'Student',
      city: 'Jaipur',
      review: 'Best laptop prices in Jaipur! I bought my HP laptop here and got great after-sales service. When I had issues, they helped me without any extra charges. Really trustworthy store.',
      rating: 5,
      date: '3 weeks ago',
    },
    {
      name: 'Amit Sharma',
      role: 'Business Owner',
      city: 'Jaipur',
      review: 'Very trustworthy store. Great variety of laptops and genuine parts. I\'ve purchased multiple computers for my office and they take great care of after-sales support.',
      rating: 5,
      date: '1 month ago',
    },
    {
      name: 'Neha Patel',
      role: 'Freelancer',
      city: 'Jaipur',
      review: 'Had my printer repaired here. Quick service at reasonable prices. The technician explained everything clearly and the printer works perfectly now.',
      rating: 4,
      date: '2 weeks ago',
    },
    {
      name: 'Vikram Singh',
      role: 'Corporate Manager',
      city: 'Jaipur',
      review: 'Purchased laptops for our entire team. Got excellent bulk pricing and they even provided on-site setup. Their service team is responsive and professional.',
      rating: 5,
      date: '1 week ago',
    },
    {
      name: 'Anjali Verma',
      role: 'Designer',
      city: 'Jaipur',
      review: 'My laptop had a serious issue and I was worried about data loss. The recovery team managed to recover all my files without any problem. Extremely grateful!',
      rating: 5,
      date: '3 days ago',
    },
    {
      name: 'Suraj Patel',
      role: 'Doctor',
      city: 'Jaipur',
      review: 'Got my desktop upgraded with faster SSD and RAM. Noticeable performance improvement. The installation was quick and professional.',
      rating: 5,
      date: '1 week ago',
    },
    {
      name: 'Ritika Sharma',
      role: 'Teacher',
      city: 'Jaipur',
      review: 'Very helpful staff. I was confused about which laptop to buy. They listened to my requirements and suggested the perfect one within my budget.',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      name: 'Harsh Verma',
      role: 'Photographer',
      city: 'Jaipur',
      review: 'Perfect place for high-performance laptops. They understood my needs for photo editing and suggested exactly what I needed. Great support!',
      rating: 5,
      date: '1 month ago',
    },
  ];

  const stats = [
    { label: 'Customer Satisfaction', value: '98%' },
    { label: 'Repeat Customers', value: '75%' },
    { label: 'On-Time Delivery', value: '99%' },
    { label: 'Average Rating', value: '4.8/5' },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Customer Reviews</h1>
          <p className="text-lg text-muted-foreground">Real stories from our satisfied customers</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 flex flex-col card-hover animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="mb-3 flex justify-between items-start">
                  <div>{renderStars(testimonial.rating)}</div>
                  <MessageCircle className="text-primary/30" size={20} />
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-4 flex-grow line-clamp-4">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} • {testimonial.city}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Reviews Section */}
      <section className="w-full py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Customer Stories</h2>
          <div className="space-y-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="p-8 card-hover animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.city}</p>
                  </div>
                  <div>{renderStars(testimonial.rating)}</div>
                </div>
                <p className="text-foreground mb-3 leading-relaxed">"{testimonial.review}"</p>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="w-full py-16 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Happy Customers</h2>
          <p className="text-lg text-muted-foreground mb-8">
            From students to professionals, businesses to individuals - Chauhan Computer has been the trusted choice for over a decade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['10K+', '50K+', '98%'].map((metric, index) => (
              <Card key={index} className="p-6 animate-slideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="text-4xl font-bold text-primary mb-2">{metric}</p>
                <p className="text-sm text-muted-foreground">
                  {index === 0 ? 'Satisfied Customers' : index === 1 ? 'Devices Repaired' : 'Satisfaction Rate'}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Experience CTA */}
      <section className="w-full py-16 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have you had a great experience with Chauhan Computer? We'd love to hear from you! Your feedback helps us serve better.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Send Feedback
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-6">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-lg text-muted-foreground mb-8">Visit us today and see why thousands trust Chauhan Computer</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" className="text-lg px-8 py-6">
                Call Us
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
