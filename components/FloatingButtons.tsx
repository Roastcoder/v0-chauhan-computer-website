'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingButtons() {
  const whatsappNumber = '919876543210';
  const phoneNumber = '+919876543210';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 p-0 flex items-center justify-center shadow-lg"
      >
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 p-0 flex items-center justify-center shadow-lg"
      >
        <a
          href={`tel:${phoneNumber}`}
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
}
