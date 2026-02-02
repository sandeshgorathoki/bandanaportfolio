import { useEffect, useRef, useState } from 'react';
import { Download, Palette, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger counter animation
            if (!hasAnimated) {
              setHasAnimated(true);
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { years: 5, projects: 100, clients: 50 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.round(targets.years * easeOut),
        projects: Math.round(targets.projects * easeOut),
        clients: Math.round(targets.clients * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  const skills = [
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting visually stunning designs that capture attention and communicate effectively.',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Thinking',
      description: 'Understanding business goals and creating designs that drive results.',
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Meticulous approach ensuring every pixel and element is perfectly placed.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block text-orange font-accent text-sm tracking-widest uppercase mb-4"
            >
              About Me
            </span>
            <h2 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              style={{ transitionDelay: '100ms' }}
            >
              Let Me <span className="text-gradient">Introduce</span> Myself
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div 
              className="reveal opacity-0 translate-x-[-30px] transition-all duration-1000"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-orange/10 rounded-3xl blur-[40px] scale-95" />
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src="/images/about.png"
                    alt="Bandana Pandey"
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
                  <p className="font-display text-3xl font-bold text-orange">{counters.years}+</p>
                  <p className="text-xs text-white/60">Years Experience</p>
                </div>

                <div className="absolute -top-6 -left-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
                  <p className="font-display text-3xl font-bold text-orange">{counters.projects}+</p>
                  <p className="text-xs text-white/60">Projects</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div 
                className="reveal opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: '300ms' }}
              >
                <p className="text-lg text-white/70 leading-relaxed">
                  I'm a passionate graphic designer currently pursuing my studies at 
                  <span className="text-orange font-medium"> MIT (Model Institute of Technology)</span> in Kathmandu, Nepal. 
                  With over 5 years of experience, I specialize in creating visual identities 
                  that leave lasting impressions.
                </p>
              </div>

              <div 
                className="reveal opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-lg text-white/70 leading-relaxed">
                  Based in the vibrant city of Kathmandu, I draw inspiration from the rich 
                  cultural heritage and modern design trends to create work that bridges 
                  tradition and innovation. My approach combines strategic thinking with 
                  artistic flair.
                </p>
              </div>

              {/* Skills */}
              <div 
                className="reveal opacity-0 translate-y-6 transition-all duration-700 space-y-4"
                style={{ transitionDelay: '500ms' }}
              >
                {skills.map((skill, index) => (
                  <div 
                    key={skill.title}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange/30 transition-all duration-300"
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="p-3 bg-orange/10 rounded-lg">
                      <skill.icon size={24} className="text-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{skill.title}</h4>
                      <p className="text-sm text-white/60">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div 
                className="reveal opacity-0 translate-y-6 transition-all duration-700 pt-4"
                style={{ transitionDelay: '800ms' }}
              >
                <button className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-orange hover:border-orange transition-all duration-300">
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div 
            className="reveal opacity-0 translate-y-8 transition-all duration-1000 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{ transitionDelay: '600ms' }}
          >
            {[
              { value: `${counters.years}+`, label: 'Years Experience' },
              { value: `${counters.projects}+`, label: 'Projects Completed' },
              { value: `${counters.clients}+`, label: 'Happy Clients' },
              { value: '15+', label: 'Design Awards' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange/30 transition-all duration-300"
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <p className="font-display text-4xl font-bold text-orange mb-2">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </section>
  );
};

export default About;
