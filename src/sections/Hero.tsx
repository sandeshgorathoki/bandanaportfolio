import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = contentRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange/5 to-transparent rounded-full blur-[80px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Eyebrow */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: '200ms' }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70">
                  <Sparkles size={16} className="text-orange" />
                  Hello, I'm
                </span>
              </div>

              {/* Name */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: '400ms' }}
              >
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                  Bandana
                  <span className="block text-gradient">Pandey</span>
                </h1>
              </div>

              {/* Title */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: '600ms' }}
              >
                <p className="font-accent text-xl sm:text-2xl text-white/80 tracking-wide">
                  Graphic Designer
                </p>
              </div>

              {/* Description */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: '800ms' }}
              >
                <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                  I create visual stories that captivate, communicate, and convert. 
                  From brand identities to digital experiences, I bring ideas to life 
                  with creativity and precision.
                </p>
              </div>

              {/* CTAs */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap gap-4"
                style={{ transitionDelay: '1000ms' }}
              >
                <button
                  onClick={() => scrollToSection('#portfolio')}
                  className="group px-8 py-4 bg-orange text-white font-medium rounded-full hover:bg-orange-light transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2"
                >
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div 
                className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out pt-8 border-t border-white/10"
                style={{ transitionDelay: '1200ms' }}
              >
                <div className="flex gap-12">
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-orange">5+</p>
                    <p className="text-sm text-white/50 mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-orange">100+</p>
                    <p className="text-sm text-white/50 mt-1">Projects Done</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-orange">50+</p>
                    <p className="text-sm text-white/50 mt-1">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div 
              className="reveal opacity-0 scale-95 transition-all duration-1000 ease-out order-1 lg:order-2"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-orange/20 rounded-3xl blur-[60px] scale-90" />
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src="/images/hero.png"
                    alt="Bandana Pandey - Graphic Designer"
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-white/80">Available for freelance work</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-orange/30 rounded-full animate-float" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/10 rounded-full animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
