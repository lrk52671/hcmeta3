import { Zap, Gauge, Shield, Box } from "lucide-react";

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Advantages = () => {
  const advantages: Advantage[] = [
    {
      icon: <Zap size={28} />,
      title: "High Speed",
      description: "Supports multiple data rates from 25 Gbps to 106 Gbps",
    },
    {
      icon: <Gauge size={28} />,
      title: "Low Power",
      description: "Optimized energy-efficient design reducing operational costs",
    },
    {
      icon: <Shield size={28} />,
      title: "High Reliability",
      description: "Rigorously tested to ensure long-term stable operation",
    },
    {
      icon: <Box size={28} />,
      title: "Compact Size",
      description: "Compact form factor designed for easy system integration",
    },
  ];

  return (
    <section id="advantages" className="relative py-20 lg:py-28 bg-bg-main-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Core Advantages</h2>
          <p className="section-subtitle">
            HC meta drives product excellence through technological innovation,
            delivering industry-leading optoelectronic solutions for AI
            computing and data centers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-5 bg-primary-bg rounded-md text-primary">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 font-display text-text-primary">
                {advantage.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
