import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = ['All', 'Branding', 'Web Design', 'Print', 'Illustration'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Mountain Brew Coffee',
      category: 'Branding',
      image: '/images/project-mountain-brew.jpg',
      description: 'Complete brand identity for a premium coffee roaster',
    },
    {
      id: 2,
      title: 'TechStart Nepal',
      category: 'Web Design',
      image: '/images/project-techstart.jpg',
      description: 'Modern dashboard design for a tech startup',
    },
    {
      id: 3,
      title: 'Himalayan Tales',
      category: 'Print',
      image: '/images/project-magazine.jpg',
      description: 'Editorial design for a travel magazine',
    },
    {
      id: 4,
      title: 'Sacred Geometry',
      category: 'Illustration',
      image: '/images/project-geometry.jpg',
      description: 'Intricate mandala illustration series',
    },
    {
      id: 5,
      title: 'Artisan Nepal',
      category: 'Web Design',
      image: '/images/project-artisan.jpg',
      description: 'E-commerce platform for Nepali handicrafts',
    },
    {
      id: 6,
      title: 'Summit Consulting',
      category: 'Branding',
      image: '/images/project-summit.jpg',
      description: 'Corporate identity for a consulting firm',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
      id="portfolio"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block text-orange font-accent text-sm tracking-widest uppercase mb-4"
            >
              Portfolio
            </span>
            <h2 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ transitionDelay: '100ms' }}
            >
              Latest <span className="text-gradient">Works</span>
            </h2>
            <p 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 text-white/60 max-w-2xl mx-auto"
              style={{ transitionDelay: '200ms' }}
            >
              A selection of my recent projects showcasing my expertise in brand identity, 
              web design, print media, and illustration.
            </p>
          </div>

          {/* Filter Tabs */}
          <div 
            className="reveal opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap justify-center gap-3 mb-12"
            style={{ transitionDelay: '300ms' }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-orange text-white shadow-glow'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-orange/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                        hoveredProject === project.id 
                          ? 'opacity-100' 
                          : 'opacity-0'
                      }`}
                    >
                      <span className="text-orange text-sm font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white text-center mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm text-center mb-6">
                        {project.description}
                      </p>
                      <div className="flex gap-3">
                        <button className="p-3 bg-orange rounded-full hover:bg-orange-light transition-colors">
                          <Eye size={20} className="text-white" />
                        </button>
                        <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                          <ExternalLink size={20} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5">
                    <span className="text-xs text-orange font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mt-1 group-hover:text-orange transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div 
            className="reveal opacity-0 translate-y-6 transition-all duration-700 text-center mt-12"
            style={{ transitionDelay: '800ms' }}
          >
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-orange hover:border-orange transition-all duration-300 hover:shadow-glow">
              View All Projects
            </button>
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

export default Portfolio;
