import heroBg from "@/assets/hero-bg-optical.jpg";
import heroLogo from "@/assets/hcmeta-logo-full.png";

const Hero = () => {
  const particles = [
    { size: 6, color: "bg-primary-light", top: "20%", left: "15%", delay: "0s", duration: "5s" },
    { size: 4, color: "bg-secondary-light", top: "30%", right: "20%", delay: "1s", duration: "6s" },
    { size: 8, color: "bg-accent-light", bottom: "35%", left: "25%", delay: "2s", duration: "4.5s" },
    { size: 5, color: "bg-primary-light", top: "50%", right: "10%", delay: "0.5s", duration: "7s" },
    { size: 7, color: "bg-secondary-light", bottom: "25%", right: "30%", delay: "3s", duration: "5.5s" },
    { size: 3, color: "bg-accent-light", top: "15%", right: "40%", delay: "1.5s", duration: "6.5s" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80"></div>

      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full pointer-events-none animate-float-glow ${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.top,
            bottom: particle.bottom,
            left: particle.left,
            right: particle.right,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        ></div>
      ))}

      <div
        className="absolute rounded-full pointer-events-none animate-pulse-ring"
        style={{
          top: "10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(0,102,204,0.08) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute rounded-full pointer-events-none animate-pulse-ring"
        style={{
          bottom: "5%",
          right: "-8%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(0,102,204,0.08) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-baseline gap-3 mb-6">
          <img src={heroLogo} alt="HC Meta" className="h-9 lg:h-11 w-auto object-contain brightness-0 invert opacity-80 -mb-1" />
          <span className="text-sm lg:text-base font-semibold tracking-widest uppercase text-white/70 letter-spacing-wide">
            Photonics Semiconductor
          </span>
        </div>
        <h1
          className="font-bold leading-tight mb-6 text-white"
          style={{ fontSize: 'clamp(1.5rem, 6.2vw, 3.75rem)' }}
        >
          Enabling AI with
          <br className="hidden sm:block" />
          <span className="whitespace-nowrap">Advanced Optical Connectivity</span>
        </h1>
        <p className="text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-white/80">
          A leading optoelectronic semiconductor company delivering
          cutting-edge high-speed VCSEL and high-performance 3D vision
          solutions for AI computing, cloud data centers, smart
          manufacturing, and autonomous vehicles.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="btn-accent px-8 py-3 text-base">
            Explore Products
          </a>
          <a href="#advantages" className="btn-outline-hero px-8 py-3 text-base">
            Learn More
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: "linear-gradient(to top, var(--color-bg-main), transparent)",
        }}
      ></div>
    </section>
  );
};

export default Hero;
