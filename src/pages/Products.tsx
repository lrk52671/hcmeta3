import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CameraSubItem } from "@/components/CameraSubItem";
import { DataTable, SpecTable } from "@/components/DataTable";
import { Check } from "lucide-react";
import uvcselWafer from "@/assets/uvcsel-array-wafer.png";
import pageLogo from "@/assets/hcmeta-logo-full.png";
import { vcselProducts, uvcselParameters, uvcselArraySizes, cameraSeries, cameraSpecs } from "@/data/products";

export default function Products() {
  const uvcselHeaders = ['Parameter', '56G NRZ', '64G NRZ'];

  const uvcselRows = [
    ...uvcselParameters.map((param) => ({
      label: param.name,
      values: [param.values['56G NRZ'], param.values['64G NRZ']],
    })),
    { label: 'Array Size', values: uvcselArraySizes, merge: true },
  ];

  const uvcselFeatures = [
    '56G / 64G NRZ modulation bandwidth',
    'Array sizes up to 97 channels',
    'Integrated with uPD receivers',
    'Dense optical interconnects for AI clusters',
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)' }}>
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="text-sm lg:text-base font-semibold tracking-widest uppercase mb-4 text-primary" style={{ letterSpacing: '0.05em' }}>
              Product Center
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-text-primary" style={{ lineHeight: '1.15', letterSpacing: '-0.025em' }}>
              Products
            </h1>
            <p className="text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-text-secondary">
              From high-speed VCSEL laser chips to high-performance 3D vision cameras, HC meta delivers complete optoelectronic semiconductor solutions for AI computing, cloud data centers, and intelligent manufacturing.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div id="vcsel" className="mb-16 scroll-mt-[80px]">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>
                VCSEL Laser Chips
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">
                High Speed 850nm VCSELs
              </h2>
              <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-text-secondary">
                850 nm VCSEL products supporting data rates from 25 Gbps to 106 Gbps, using 6-inch wafer process with excellent uniformity and high yield.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vcselProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-20 scroll-mt-[80px]" id="uvcsel">
              <div className="mb-10">
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>
                  1060 nm Micro VCSEL Arrays
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary" style={{ lineHeight: '1.2', letterSpacing: '-0.025em' }}>
                  1060nm Micro VCSEL Arrays for Optical Interconnects
                </h2>
                <p className="text-base lg:text-lg max-w-3xl leading-relaxed text-text-secondary">
                  Compact 1060 nm micro VCSEL arrays delivering 56G / 64G NRZ per channel, ideal for next-generation dense optical interconnects in AI computing and high-bandwidth switches.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-border shadow-[0_2px_10px_rgba(16,42,67,0.05)] bg-gradient-to-br from-[#F2F4F6] via-[#E7EBEE] to-[#DDE3E8] flex items-center justify-center p-8">
                  <img
                    src={uvcselWafer}
                    alt="1060nm Micro VCSEL Arrays"
                    className="max-w-full max-h-[380px] object-contain drop-shadow-[0_10px_24px_rgba(21,39,56,0.18)] rounded-md"
                  />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6 text-text-primary">Product Highlights</h3>
                  <ul className="space-y-4">
                    {uvcselFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 shrink-0">
                          <Check size={14} className="text-primary" strokeWidth={3} />
                        </span>
                        <span className="text-base text-text-secondary leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto">
                <DataTable headers={uvcselHeaders} rows={uvcselRows} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-bg-main-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div id="3d-cameras" className="mb-16 scroll-mt-[80px]">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>
                3D Depth Cameras
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">
                High-Performance 3D Cameras
              </h2>
              <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-text-secondary">
                mHawk and iHawk series 3D depth cameras powered by 940nm VCSEL technology for industrial automation, robotics, and AIoT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cameraSeries.map((series) => (
                <div key={series.id} className="product-card overflow-hidden bg-white border border-border rounded-xl">
                  <div className="overflow-hidden">
                    <img
                      src={series.image}
                      alt={series.name}
                      className="w-full h-48 object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold mb-5 text-text-primary">{series.name}</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {series.subProducts.map((subProduct) => (
                        <CameraSubItem
                          key={subProduct.name}
                          name={subProduct.name}
                          description={subProduct.description}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">mHawk P100R Specifications</h3>
              <SpecTable specs={cameraSpecs} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}