import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-white/10">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />

      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="#home" className="inline-block">
                <h3 className="font-display text-2xl font-bold text-white hover:text-orange transition-colors">
                  Bandana Pandey
                </h3>
              </a>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Creating visual stories that captivate, communicate, and convert. 
                Let's bring your ideas to life with creativity and precision.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span>Made with</span>
                <Heart size={16} className="text-orange fill-orange" />
                <span>in Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/60 hover:text-orange transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-white mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/60">
                  <span className="text-white/40">Email:</span>{' '}
                  <a 
                    href="mailto:pbandana037@gmail.com" 
                    className="hover:text-orange transition-colors"
                  >
                    pbandana037@gmail.com
                  </a>
                </p>
                <p className="text-white/60">
                  <span className="text-white/40">Phone:</span>{' '}
                  <a 
                    href="tel:+9779863996787" 
                    className="hover:text-orange transition-colors"
                  >
                    +977 9863996787
                  </a>
                </p>
                <p className="text-white/60">
                  <span className="text-white/40">Location:</span> Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Bandana Pandey. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-white/40 hover:text-orange text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/40 hover:text-orange text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 bg-white/5 border border-white/10 rounded-full hover:bg-orange hover:border-orange transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp 
                size={18} 
                className="text-white/60 group-hover:text-white transition-colors" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
