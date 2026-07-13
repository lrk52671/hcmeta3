const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-bg-main-alt">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title">About Us</h2>
        <p className="text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-text-secondary">
          HC Meta is a technology-leading optoelectronic semiconductor company dedicated to delivering cutting-edge high-speed VCSEL and high-performance 3D vision solutions for AI computing, cloud data centers, smart manufacturing, and autonomous vehicles. Guided by our core values of Precision, Innovation, Reliability, and Vision, we continuously push the frontier of optoelectronic technology.
        </p>
        <a href="#" className="btn-outline px-8 py-3 text-base">
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default About;