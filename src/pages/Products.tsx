import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CameraSubItem } from "@/components/CameraSubItem";
import { DataTable, SpecTable } from "@/components/DataTable";
import { vcselProducts, vcselParameters, cameraSeries, cameraSpecs, fabricationServices, rfTestingPlatform } from "@/data/products";

export default function Products() {
  const headers = ['Parameter', '106G PAM4', '106G HCG'];
  
  const rows = vcselParameters.map((param) => ({
    label: param.name,
    values: [
      param.values['106G PAM4'],
      param.values['106G HCG'],
    ],
  }));

  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)' }}>
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="text-sm lg:text-base font-semibold tracking-widest uppercase mb-4 text-primary" style={{ letterSpacing: '0.05em' }}>
              HC meta &middot; Product Center
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
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>
                VCSEL Laser Chips
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">
                High-Rate VCSELs
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

            <div className="mt-16 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">VCSEL Product Parameters</h3>
              <DataTable headers={headers} rows={rows} />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-bg-main-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
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

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>
                Fabrication & NRE Service
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-text-primary">
                Fabrication & NRE Service Platform
              </h2>
              <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-text-secondary">
                Comprehensive turnkey solutions from design to module, supporting the entire optoelectronic semiconductor manufacturing process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16">
              {fabricationServices.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className={`${step.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < fabricationServices.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-text-primary">{rfTestingPlatform.name}</h3>
                <p className="text-lg text-text-secondary">{rfTestingPlatform.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Features:</h4>
                  <ul className="space-y-3">
                    {rfTestingPlatform.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-1 text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Applications:</h4>
                  <ul className="space-y-3">
                    {rfTestingPlatform.applications.map((app, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-1 text-primary">✓</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}