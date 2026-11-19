import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pageLogo from "@/assets/hcmeta-logo-full.png";

export default function Technology() {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)' }}>
          <div className="absolute top-16 left-[-5%] w-72 h-72 rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.08) 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-[-10%] right-[-8%] w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(102,0,204,0.06) 0%, transparent 70%)' }}></div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="inline-flex items-baseline gap-3 mb-4">
              <img src={pageLogo} alt="HC Meta" className="h-8 lg:h-10 w-auto object-contain opacity-90 -mb-1" />
              <span className="text-sm lg:text-base font-semibold tracking-widest uppercase text-primary" style={{ letterSpacing: '0.05em' }}>
                Core Technology
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Technology</h1>
            <p className="text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-text-secondary">
              Powered by VCSEL vertical-cavity surface-emitting laser core technology, combined with PAM4 modulation and HCG high-contrast grating structure, delivering high-speed, low-power, high-reliability optoelectronic solutions.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-2xl bg-white border border-border">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>Core Technology 01</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">VCSEL Technology</h2>
                <p className="text-lg mb-6 text-primary font-semibold">
                  Vertical-cavity surface-emitting laser, the core of high-speed optoelectronic conversion.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  VCSEL technology enables efficient light emission from the chip surface through a vertical resonator cavity structure. Unlike traditional edge-emitting lasers, VCSELs produce circular, low-divergence beams ideal for high-speed data communication. HC meta's advanced epitaxial growth and oxidation processes deliver industry-leading performance with 850 nm wavelength operation, supporting data rates from 25 Gbps to 106 Gbps for next-generation AI computing and cloud data center interconnects.
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ minHeight: '320px' }}>
                <svg viewBox="0 0 400 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="glowCenter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(0,102,204,0.15)" />
                      <stop offset="60%" stopColor="rgba(0,150,255,0.06)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3388DD" />
                      <stop offset="100%" stopColor="#0066CC" />
                    </linearGradient>
                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066CC" />
                      <stop offset="100%" stopColor="#00AAFF" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="180" r="140" fill="url(#glowCenter)" />
                  <polygon points="200,80 240,103 240,149 200,172 160,149 160,103" fill="none" stroke="url(#hexGrad)" strokeWidth="1.5" opacity="0.5" />
                  <polygon points="200,110 230,127 230,163 200,180 170,163 170,127" fill="none" stroke="#0066CC" strokeWidth="1.5" opacity="0.6" />
                  <polygon points="200,140 220,152 220,176 200,188 180,176 180,152" fill="none" stroke="#3388DD" strokeWidth="1.5" opacity="0.7" />
                  <circle cx="200" cy="165" r="12" fill="#0066CC" opacity="0.25">
                    <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.25;0.10;0.25" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="165" r="5" fill="#0066CC" opacity="0.6" />
                  <line x1="200" y1="80" x2="200" y2="20" stroke="url(#beamGrad)" strokeWidth="3" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.25;0.6" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="80" x2="185" y2="30" stroke="#3388DD" strokeWidth="1" opacity="0.3" />
                  <line x1="200" y1="80" x2="215" y2="30" stroke="#3388DD" strokeWidth="1" opacity="0.3" />
                  <line x1="200" y1="188" x2="150" y2="320" stroke="#0066CC" strokeWidth="1" opacity="0.2" />
                  <line x1="200" y1="188" x2="200" y2="340" stroke="#0066CC" strokeWidth="2" opacity="0.35">
                    <animate attributeName="opacity" values="0.35;0.12;0.35" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="188" x2="250" y2="320" stroke="#0066CC" strokeWidth="1" opacity="0.2" />
                  <rect x="140" y="90" width="120" height="3" rx="1" fill="#0066CC" opacity="0.2" />
                  <rect x="145" y="95" width="110" height="3" rx="1" fill="#3388DD" opacity="0.15" />
                  <rect x="150" y="100" width="100" height="3" rx="1" fill="#0066CC" opacity="0.18" />
                  <rect x="155" y="195" width="90" height="24" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
                  <text x="200" y="211" textAnchor="middle" fill="#4B5563" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Active Region</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-2xl bg-white border border-border">
              <div className="flex items-center justify-center order-2 lg:order-1" style={{ minHeight: '320px' }}>
                <svg viewBox="0 0 400 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0066CC" />
                      <stop offset="50%" stopColor="#6600CC" />
                      <stop offset="100%" stopColor="#0066CC" />
                    </linearGradient>
                  </defs>
                  <line x1="40" y1="60" x2="380" y2="60" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4,4" />
                  <line x1="40" y1="140" x2="380" y2="140" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4,4" />
                  <line x1="40" y1="220" x2="380" y2="220" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4,4" />
                  <line x1="40" y1="300" x2="380" y2="300" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="4,4" />
                  <text x="25" y="64" textAnchor="middle" fill="#0066CC" fontSize="11" fontFamily="Inter, monospace" fontWeight="600">11</text>
                  <text x="25" y="144" textAnchor="middle" fill="#3388DD" fontSize="11" fontFamily="Inter, monospace" fontWeight="600">10</text>
                  <text x="25" y="224" textAnchor="middle" fill="#6600CC" fontSize="11" fontFamily="Inter, monospace" fontWeight="600">01</text>
                  <text x="25" y="304" textAnchor="middle" fill="#8833DD" fontSize="11" fontFamily="Inter, monospace" fontWeight="600">00</text>
                  <polyline points="40,60 80,60 90,140 140,140 150,220 200,220 210,300 260,300 270,140 300,140 310,60 360,60 380,60"
                    fill="none" stroke="url(#waveGrad)" strokeWidth="2.5" strokeLinejoin="round">
                    <animate attributeName="stroke-dashoffset" from="800" to="0" dur="3s" repeatCount="indefinite" />
                  </polyline>
                  <circle cx="90" cy="140" r="4" fill="#3388DD" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="220" r="4" fill="#6600CC" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <circle cx="210" cy="300" r="4" fill="#8833DD" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <circle cx="270" cy="140" r="4" fill="#3388DD" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
                  </circle>
                  <rect x="130" y="15" width="140" height="28" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
                  <text x="200" y="34" textAnchor="middle" fill="#4B5563" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">2 bits per symbol</text>
                </svg>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>Core Technology 02</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">PAM4 Modulation</h2>
                <p className="text-lg mb-6 text-primary font-semibold">
                  Four-level pulse amplitude modulation, doubling per-channel data rate.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  PAM4 (Pulse Amplitude Modulation 4-level) technology encodes 2 bits per symbol using four distinct amplitude levels, effectively doubling the bandwidth without increasing the signal frequency. This advanced modulation scheme enables HC meta's VCSEL chips to achieve 106 Gbps data rates while maintaining excellent signal integrity and low power consumption, meeting the demands of next-generation 800G and 1.6T optical transceiver modules in AI data centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-2xl bg-white border border-border">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-primary" style={{ letterSpacing: '0.05em' }}>Core Technology 03</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">HCG Structure</h2>
                <p className="text-lg mb-6 text-primary font-semibold">
                  High-contrast grating enabling single-mode polarization control.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  HCG (High-Contrast Grating) technology uses sub-wavelength periodic structures to achieve precise control over laser polarization and mode selection. By integrating HCG mirrors into the VCSEL cavity, HC meta delivers near single-mode operation with a suppression ratio exceeding 15 dB. This results in ultra-narrow spectral width (0.12 nm RMS), improved beam quality, and enhanced fiber coupling efficiency, enabling long-reach transmission up to 300m on OM3 fiber.
                </p>
              </div>
              <div className="flex items-center justify-center" style={{ minHeight: '320px' }}>
                <svg viewBox="0 0 400 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gratingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0,102,204,0.04)" />
                      <stop offset="50%" stopColor="rgba(102,0,204,0.06)" />
                      <stop offset="100%" stopColor="rgba(0,102,204,0.04)" />
                    </linearGradient>
                    <linearGradient id="gratingLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0066CC" />
                      <stop offset="100%" stopColor="#3388DD" />
                    </linearGradient>
                    <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#3388DD" />
                    </marker>
                  </defs>
                  <rect x="60" y="60" width="280" height="240" rx="10" fill="url(#gratingGrad)" stroke="#E5E7EB" strokeWidth="1" />
                  <rect x="80" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="96" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="112" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="128" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="144" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="160" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="176" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="192" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="208" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="224" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="240" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="256" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="272" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <rect x="288" y="80" width="8" height="200" rx="2" fill="#D1D5DB" opacity="0.4" />
                  <rect x="304" y="80" width="8" height="200" rx="2" fill="#0066CC" opacity="0.4" />
                  <line x1="200" y1="20" x2="200" y2="55" stroke="#3388DD" strokeWidth="2" markerEnd="url(#arrowBlue)">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="305" x2="200" y2="340" stroke="#6600CC" strokeWidth="2">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </line>
                  <line x1="80" y1="295" x2="112" y2="295" stroke="#0066CC" strokeWidth="1.5" />
                  <text x="96" y="315" textAnchor="middle" fill="#0066CC" fontSize="9" fontFamily="Inter, monospace" fontWeight="600">&Lambda;</text>
                  <rect x="120" y="330" width="160" height="24" rx="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
                  <text x="200" y="347" textAnchor="middle" fill="#4B5563" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Sub-wavelength Period</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-bg-main-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Advantages</h2>
              <p className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-text-secondary">
                Industry-leading performance metrics validated through rigorous testing and standards compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">High Bandwidth</h3>
                <p className="text-sm text-text-secondary">25 GHz modulation bandwidth</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Low RIN</h3>
                <p className="text-sm text-text-secondary">Ultra-low relative intensity noise</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Low Power</h3>
                <p className="text-sm text-text-secondary">Energy-efficient for reduced operational costs</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">High Reliability</h3>
                <p className="text-sm text-text-secondary">Over 10 years operational lifetime</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">6-inch Wafer</h3>
                <p className="text-sm text-text-secondary">High uniformity and manufacturing yield</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Multi-Standard</h3>
                <p className="text-sm text-text-secondary">IEEE 802.3, GR 468 certified</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-bg-main-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Application Fields</h2>
              <p className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-text-secondary">
                Enabling next-generation applications across industries with advanced photonics technology
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Data Center</h3>
                <p className="text-sm leading-relaxed text-text-secondary">High-speed interconnects for AI computing and cloud infrastructure</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.9 19.1C1.7 15.9 1.7 10.8 4.9 7.7"></path>
                    <path d="M7.8 16.2c-2.1-2.1-2.1-5.5 0-7.6"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M16.2 7.8c2.1 2.1 2.1 5.5 0 7.6"></path>
                    <path d="M19.1 4.9C22.3 8.1 22.3 13.2 19.1 16.3"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Telecommunications</h3>
                <p className="text-sm leading-relaxed text-text-secondary">Optical transceivers for telecom networks and 5G backhaul</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">High-Performance Computing</h3>
                <p className="text-sm leading-relaxed text-text-secondary">Enabling scalable HPC clusters and GPU interconnects</p>
              </div>

              <div className="p-6 lg:p-8 text-center rounded-xl bg-white border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-primary-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2H4a2 2 0 0 0-2 2v3"></path>
                    <path d="M15 2h5a2 2 0 0 1 2 2v3"></path>
                    <path d="M15 22h5a2 2 0 0 0 2-2v-3"></path>
                    <path d="M9 22H4a2 2 0 0 1-2-2v-3"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                    <path d="M12 11v2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Consumer Electronics</h3>
                <p className="text-sm leading-relaxed text-text-secondary">3D sensing, face recognition, and AR/VR applications</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}