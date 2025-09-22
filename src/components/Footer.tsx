import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">HIET Software Solutions</h3>
                <p className="text-sm opacity-90">Excellence in Training & Consultancy</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering careers through comprehensive training programs and professional consultancy services in cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-accent cursor-pointer transition-smooth" />
              <Twitter size={20} className="hover:text-accent cursor-pointer transition-smooth" />
              <Linkedin size={20} className="hover:text-accent cursor-pointer transition-smooth" />
              <Instagram size={20} className="hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Placement Assistance", href: "/placement" },
                { name: "Consultancy", href: "/consultancy" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <div className="flex flex-col space-y-2">
              {[
                "Python Programming",
                "Java Development",
                "MERN Stack",
                "Data Science",
                "Data Analysis",
                "Excel Training",
              ].map((course) => (
                <span key={course} className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-smooth">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-sm">info@hietsoftware.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span className="text-sm">
                  123 Tech Park, IT District,<br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 HIET Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;