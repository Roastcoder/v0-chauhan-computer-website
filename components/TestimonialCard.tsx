import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}

export function TestimonialCard({ name, review, rating }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-muted'}
          />
        ))}
      </div>
      <p className="text-sm mb-4 italic">"{review}"</p>
      <p className="font-semibold text-sm">— {name}</p>
    </Card>
  );
}
