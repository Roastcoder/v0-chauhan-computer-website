'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products, getProductsByCategory } from '@/lib/products';
import { Star, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-secondary rounded-lg overflow-hidden mb-4 h-96 flex items-center justify-center relative group">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Image navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-full h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <div className="text-xs uppercase text-primary font-bold mb-2">{product.brand}</div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} out of 5 ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.discount && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(Math.round(product.price / (1 - product.discount / 100)))}
                  </span>
                )}
              </div>
              {product.discount && (
                <div className="text-sm text-green-600 font-medium mt-1">
                  Save {product.discount}% on this product
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  In Stock - Ships within 24 hours
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-medium mb-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  Out of Stock
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6 pb-6 border-b border-border">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-2 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-border rounded-md hover:bg-secondary"
                >
                  -
                </button>
                <span className="px-6 py-2 border border-border rounded-md">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-border rounded-md hover:bg-secondary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="gap-2 h-12 text-base"
              >
                <ShoppingCart size={20} />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </Button>
              <Button
                variant="outline"
                onClick={toggleWishlist}
                className="gap-2 h-12"
              >
                <Heart size={20} fill={wishlisted ? 'currentColor' : 'none'} />
                {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 p-4 bg-secondary rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <Truck size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Free Delivery</div>
                  <div className="text-sm text-muted-foreground">On orders above ₹50,000</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">30-Day Returns</div>
                  <div className="text-sm text-muted-foreground">Easy and hassle-free returns</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">2-Year Warranty</div>
                  <div className="text-sm text-muted-foreground">Manufacturer warranty included</div>
                </div>
              </div>
            </div>

            {/* Share */}
            <Button variant="outline" className="w-full gap-2">
              <Share2 size={18} />
              Share Product
            </Button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{key}</div>
                  <div className="text-base font-semibold text-foreground">{value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About this Product</h2>
          <p className="text-foreground leading-relaxed text-lg">
            {product.description}
          </p>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                    <div className="relative w-full h-40 bg-secondary overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm line-clamp-2 mb-2">{relatedProduct.name}</h3>
                      <div className="text-lg font-bold text-primary">
                        {formatPrice(relatedProduct.price)}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
