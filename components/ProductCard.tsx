import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  priceRange: string;
  image: string;
  onEnquiry: () => void;
}

export function ProductCard({ name, priceRange, image, onEnquiry }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-primary font-bold mb-4">{priceRange}</p>
        <Button 
          onClick={onEnquiry}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Enquire Now
        </Button>
      </div>
    </Card>
  );
}
