import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-bg-elevated border border-border shadow-sm">
      <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-primary-bg">
        <span className="text-primary">{icon}</span>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-text-tertiary">{label}</p>
        <p className="text-sm font-semibold text-text-primary">{value}</p>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Building2 size={20} strokeWidth={2} />, label: 'Company', value: 'HC Meta Pte. Ltd.' },
    { icon: <MapPin size={20} strokeWidth={2} />, label: 'Address', value: '1 MARINA BOULEVARD, #28-00, ONE MARINA BOULEVARD, SINGAPORE 018989' },
    { icon: <Phone size={20} strokeWidth={2} />, label: 'Phone', value: '+86 0755-86572384' },
    { icon: <Mail size={20} strokeWidth={2} />, label: 'Email', value: 'info@hcmeta.net' },
    { icon: <Clock size={20} strokeWidth={2} />, label: 'Business Hours', value: 'Mon - Fri 9:00 AM - 6:00 PM' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-text-secondary">
            If you are interested in our products and technology, feel free to reach out to our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8">Get in Touch</h3>
            <div className="flex flex-col gap-5">
              {contactInfo.map((item, index) => (
                <ContactInfoItem key={index} icon={item.icon} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Send a Message</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-text-tertiary">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg bg-bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-text-tertiary">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg bg-bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-text-tertiary">Company</label>
                <input
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg bg-bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-text-tertiary">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg bg-bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base mt-2 w-full md:w-auto rounded-lg font-semibold text-white bg-accent hover:bg-accent-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-sm font-semibold text-green-600">Message sent successfully! We'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      <Navbar />
      <main>
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '50vh', background: 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)' }}>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24 lg:py-32">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}>
              About Us
            </h1>
            <p className="text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-text-secondary" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s' }}>
              HC meta is a technology-leading optoelectronic semiconductor company dedicated to delivering cutting-edge high-speed VCSEL and high-performance 3D vision solutions for AI computing, cloud data centers, smart manufacturing, and autonomous vehicles.
            </p>
          </div>
        </section>

        <div className="wave-separator" />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
