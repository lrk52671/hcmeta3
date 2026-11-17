import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import productImg0 from "@/assets/vcsel.png";
import productImg1 from "@/assets/camera.png";

interface Product {
  image: string;
  title: string;
  features: string[];
  alt: string;
}

const Products = () => {
  const products: Product[] = [
    {
      image: productImg0,
      title: "High-Speed VCSEL Chips",
      alt: "High-Speed VCSEL Chips",
      features: [
        "106 Gbps PAM4",
        "53 Gbps PAM4",
        "25 Gbps NRZ",
        "HCG Few-Mode",
      ],
    },
    {
      image: productImg1,
      title: "High-Performance 3D Cameras",
      alt: "High-Performance 3D Cameras",
      features: [
        "mHawk Series",
        "iHawk Series",
        "940nm VCSEL",
        "IP67 Protection",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-bg-main">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Products</h2>
          <p className="section-subtitle">
            From high-speed VCSEL laser chips to high-performance 3D vision
            cameras, HC meta delivers complete optoelectronic semiconductor
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 font-display text-text-primary">
                  {product.title}
                </h3>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <Check size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/products" className="btn-accent text-sm px-6 py-2.5">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
