import { useEffect, useRef } from 'react';
import { 
  Palette, 
  Globe, 
  Printer, 
  PenTool, 
  Layout, 
  Video,
  Check
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography System',
        'Business Cards',
      ],
      price: 'Rs. 15,000',
      priceNote: 'Starting from',
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Responsive website design that converts visitors into customers with modern aesthetics.',
      features: [
        'UI/UX Design',
        'Responsive Layout',
        'Landing Pages',
        'Dashboard Design',
        'Prototype',
      ],
      price: 'Rs. 25,000',
      priceNote: 'Starting from',
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Professional print materials from brochures to packaging that make a lasting impression.',
      features: [
        'Brochures & Flyers',
        'Posters & Banners',
        'Packaging Design',
        'Publications',
        'Stationery',
      ],
      price: 'Rs. 8,000',
      priceNote: 'Starting from',
    },
    {
      icon: PenTool,
      title: 'Illustration',
      description: 'Custom illustrations that bring your ideas to life with unique artistic style.',
      features: [
        'Digital Illustration',
        'Character Design',
        'Icon Sets',
        'Infographics',
        'Custom Artwork',
      ],
      price: 'Rs. 5,000',
      priceNote: 'Starting from',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and delightful digital experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
        'Design Systems',
      ],
      price: 'Rs. 20,000',
      priceNote: 'Starting from',
    },
    {
      icon: Video,
      title: 'Motion Graphics',
      description: 'Animated content that brings stories to life and engages your audience.',
      features: [
        'Logo Animation',
        'Explainer Videos',
        'Social Media Content',
        'Motion Ads',
        'Video Editing',
      ],
      price: 'Rs. 12,000',
      priceNote: 'Starting from',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block text-orange font-accent text-sm tracking-widest uppercase mb-4"
            >
              Services
            </span>
            <h2 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ transitionDelay: '100ms' }}
            >
              Services I <span className="text-gradient">Offer</span>
            </h2>
            <p 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 text-white/60 max-w-2xl mx-auto"
              style={{ transitionDelay: '200ms' }}
            >
              Comprehensive design solutions tailored to your needs. From concept to completion, 
              I deliver high-quality work that exceeds expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-full p-6 bg-card border border-white/10 rounded-2xl hover:border-orange/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon size={28} className="text-orange" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                          <Check size={16} className="text-orange flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-white/50 mb-1">{service.priceNote}</p>
                      <p className="font-display text-2xl font-bold text-orange">{service.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Project CTA */}
          <div 
            className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-16"
            style={{ transitionDelay: '900ms' }}
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-orange/20 to-orange/5 border border-orange/30 rounded-3xl overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    Have a Custom Project?
                  </h3>
                  <p className="text-white/70">
                    Let's discuss your unique requirements and create something amazing together.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-orange text-white font-medium rounded-full hover:bg-orange-light transition-all duration-300 hover:scale-105 hover:shadow-glow whitespace-nowrap"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Services;
