import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'CEO',
      company: 'Himalayan Adventures',
      image: '/images/testimonial-1.jpg',
      quote: 'Bandana transformed our brand completely. Her attention to detail and creative vision exceeded all expectations. The new identity has helped us stand out in a competitive market.',
    },
    {
      id: 2,
      name: 'Rajesh Maharjan',
      role: 'Founder',
      company: 'TechStart Nepal',
      image: '/images/testimonial-2.jpg',
      quote: 'Working with Bandana was a game-changer. She understood our vision and delivered a website that truly represents our brand. Our conversion rates have increased significantly.',
    },
    {
      id: 3,
      name: 'Sunita Gurung',
      role: 'Marketing Director',
      company: 'Mountain Brew',
      image: '/images/testimonial-3.jpg',
      quote: 'The brand identity Bandana created perfectly captures our essence. Our customers love the new look, and we have received numerous compliments on our packaging design.',
    },
    {
      id: 4,
      name: 'Anil Shrestha',
      role: 'Publisher',
      company: 'Kathmandu Press',
      image: '/images/testimonial-4.jpg',
      quote: "Bandana's magazine layouts are stunning. She has an incredible eye for typography and composition. Our publications have never looked better.",
    },
    {
      id: 5,
      name: 'Maya Tamang',
      role: 'Creative Director',
      company: 'Artisan Nepal',
      image: '/images/testimonial-5.jpg',
      quote: 'Exceptional talent and professionalism. Bandana delivers work that is both beautiful and effective. She is our go-to designer for all creative projects.',
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block text-orange font-accent text-sm tracking-widest uppercase mb-4"
            >
              Testimonials
            </span>
            <h2 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              style={{ transitionDelay: '100ms' }}
            >
              What Clients <span className="text-gradient">Say</span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div 
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={120} className="text-orange" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transition-all duration-500 ${
                        index === activeIndex
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-orange/30">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                              <Quote size={18} className="text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Quote Content */}
                        <div className="flex-1 text-center md:text-left">
                          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <h4 className="font-display text-xl font-semibold text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-orange text-sm">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-orange hover:border-orange transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setActiveIndex(index);
                          setTimeout(() => setIsAnimating(false), 500);
                        }
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'bg-orange w-8'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-orange hover:border-orange transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div 
            className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-16"
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-center text-white/40 text-sm mb-8">Trusted by amazing companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Himalayan Adventures', 'TechStart Nepal', 'Mountain Brew', 'Kathmandu Press', 'Artisan Nepal'].map((company) => (
                <span 
                  key={company}
                  className="text-white/30 font-display text-lg hover:text-white/60 transition-colors cursor-default"
                >
                  {company}
                </span>
              ))}
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

export default Testimonials;
