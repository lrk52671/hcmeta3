import { Check } from 'lucide-react';
import type { VcselProduct } from '@/data/products';

interface ProductCardProps {
  product: VcselProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card overflow-hidden bg-white border border-border rounded-xl">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{product.name}</h3>
        <p className="text-sm mb-4 text-primary">{product.type}</p>
        <ul className="flex flex-col gap-2.5">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}