import { Heart, Mail, Facebook, Instagram, Zap } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Pilares CiberPaz", href: "#about" },
    { name: "Comunidad", href: "#testimonials" },
    { name: "Contacto", href: "#contact" }
  ];

  const partners = [
    "CiberPaz Colombia",
    "Universidad de Nariño",
    "Hackathon Pasto 2024",
    "Alcaldía de Pasto"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold">
                  Somos<span className="text-accent">+</span>
                </h3>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed max-w-md">
                Conectamos ciudadanos para construir paz, convivencia y futuro 
                en Pasto y Nariño. Una plataforma que transforma la participación 
                ciudadana en acciones concretas para el cambio social.
              </p>
              
              {/* Contact */}
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <a href="mailto:contacto@somosmas.org" className="text-background/80 hover:text-accent transition-colors">
                  contacto@somosmas.org
                </a>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-xl font-bold mb-6">Nuestros aliados</h4>
              <ul className="space-y-3">
                {partners.map((partner) => (
                  <li key={partner} className="text-background/80 text-sm">
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="border-t border-background/20 pt-8 mb-8">
            <div className="bg-background/5 rounded-lg p-6">
              <h5 className="font-bold mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-accent" />
                Compromiso con la privacidad
              </h5>
              <p className="text-background/80 text-sm leading-relaxed">
                Somos+ respeta tu privacidad y promueve el uso responsable de tecnologías digitales. 
                Todos los datos son manejados con los más altos estándares de seguridad y transparencia, 
                siguiendo las mejores prácticas de protección de datos personales.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2025 Somos+. Construido con amor para la comunidad de Nariño.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Términos de uso
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Código de conducta
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;