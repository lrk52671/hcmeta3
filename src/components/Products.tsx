import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import productImg0 from "@/assets/vcsel.png";
import productImg1 from "@/assets/camera.png";
import productImg2 from "@/assets/uvcsel-upd-cover.png";

interface Product {
  image: string;
  title: string;
  features: string[];
  alt: string;
  href: string;
  fit?: "cover" | "contain";
}

const Products = () => {
  const products: Product[] = [
    {
      image: productImg0,
      title: "High Speed 850nm VCSELs",
      alt: "High Speed 850nm VCSELs",
      href: "/products#vcsel",
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
      href: "/products#3d-cameras",
      features: [
        "mHawk Series",
        "iHawk Series",
        "940nm VCSEL",
        "IP67 Protection",
      ],
    },
    {
      image: productImg2,
      title: "uVCSEL and uPD for dense optical interconnects",
      alt: "uVCSEL and uPD for dense optical interconnects",
      href: "/products#uvcsel",
      fit: "contain",
      features: [
        "56G NRZ",
        "64G NRZ",
        "uPD Receivers",
        "Arrays up to 97",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.href}
              className="product-card flex flex-col h-full cursor-pointer group"
            >
              <div
                className={`overflow-hidden rounded-t-lg h-56 lg:h-64 ${
                  product.fit === "contain"
                    ? "bg-gradient-to-br from-[#F2F4F6] via-[#E7EBEE] to-[#DDE3E8] flex items-center justify-center p-6"
                    : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    product.fit === "contain"
                      ? "object-contain drop-shadow-[0_10px_20px_rgba(21,39,56,0.18)] rounded-md"
                      : "object-cover"
                  }`}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4 font-display text-text-primary leading-snug">
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
                <div className="mt-auto">
                  <span className="btn-accent text-sm px-6 py-2.5 inline-block">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
