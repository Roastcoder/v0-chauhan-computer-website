'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
  bgColor: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: 'Premium Laptops',
    description: 'Latest MacBook, Dell, HP and Lenovo laptops with best prices',
    cta: 'Shop Now',
    ctaLink: '/products',
    image: '/products/macbook-air-m2.jpg',
    bgColor: 'from-blue-50 to-white',
  },
  {
    id: 2,
    title: 'Professional Repair',
    description: 'Expert laptop and computer repair services by certified technicians',
    cta: 'Learn More',
    ctaLink: '/services',
    image: '/products/dell-optiplex.jpg',
    bgColor: 'from-green-50 to-white',
  },
  {
    id: 3,
    title: 'Gaming Laptops',
    description: 'High-performance gaming and workstation laptops with RTX graphics',
    cta: 'Explore',
    ctaLink: '/products',
    image: '/products/msi-ge76-raider.jpg',
    bgColor: 'from-purple-50 to-white',
  },
  {
    id: 4,
    title: 'Affordable Deals',
    description: 'Great discounts on certified pre-owned and refurbished laptops',
    cta: 'View Deals',
    ctaLink: '/products',
    image: '/products/hp-pavilion-15.jpg',
    bgColor: 'from-orange-50 to-white',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="w-full bg-background">
      {/* Desktop Carousel */}
      <div className="hidden md:block w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{slide.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{slide.description}</p>
              <Link href={slide.ctaLink}>
                <Button className="bg-primary hover:bg-primary/90 text-lg py-6 px-8">
                  {slide.cta}
                </Button>
              </Link>
            </div>
            <div className="animate-slideInRight">
              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Desktop Indicators and Controls */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-primary" />
            </button>

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-border w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Card Carousel */}
      <div className="md:hidden w-full bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="flex justify-center items-center min-h-[600px]">
          {/* Card Container - Vertical Credit Card Size */}
          <div className="relative w-80 h-96 perspective">
            <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-white animate-fadeIn">
              {/* Card Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 h-48 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{slide.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{slide.description}</p>
                </div>

                <Link href={slide.ctaLink} className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between px-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-primary w-6' : 'bg-border w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="flex justify-center mt-4 text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
