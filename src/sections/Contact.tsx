import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Dribbble, ExternalLink } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pbandana037@gmail.com',
      href: 'mailto:pbandana037@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9863996787',
      href: 'tel:+9779863996787',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' },
    { icon: ExternalLink, label: 'Behance', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 inline-block text-orange font-accent text-sm tracking-widest uppercase mb-4"
            >
              Contact
            </span>
            <h2 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ transitionDelay: '100ms' }}
            >
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 text-white/60 max-w-2xl mx-auto"
              style={{ transitionDelay: '200ms' }}
            >
              Let's work together on your next project. I'm always excited to hear about 
              new opportunities and creative challenges.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div 
              className="reveal opacity-0 translate-x-[-30px] transition-all duration-1000 space-y-8"
              style={{ transitionDelay: '300ms' }}
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-5 p-5 bg-card border border-white/10 rounded-2xl hover:border-orange/30 hover:bg-white/5 transition-all duration-300"
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon size={24} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-orange transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white/50 text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-orange hover:border-orange hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Available for freelance work</span>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div 
              className="reveal opacity-0 translate-x-[30px] transition-all duration-1000"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="p-8 bg-card border border-white/10 rounded-3xl">
                <h3 className="font-display text-2xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      submitStatus === 'success'
                        ? 'bg-green-500 text-white'
                        : 'bg-orange text-white hover:bg-orange-light hover:shadow-glow'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : submitStatus === 'success' ? (
                      <>Message Sent Successfully!</>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
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

export default Contact;
