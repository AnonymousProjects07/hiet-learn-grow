import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModals } from "@/hooks/useModals";
import LoginModal from "./modals/LoginModal";
import EnrollmentModal from "./modals/EnrollmentModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { 
    loginModalOpen, 
    openLoginModal, 
    closeLoginModal,
    enrollmentModalOpen,
    openEnrollmentModal,
    closeEnrollmentModal
  } = useModals();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">HIET</h1>
              <p className="text-xs text-muted-foreground -mt-1">Software Solutions</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={openLoginModal}>
              Login
            </Button>
            <Button size="sm" className="bg-hero-gradient hover:opacity-90 transition-smooth" onClick={() => openEnrollmentModal()}>
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <Button variant="outline" size="sm" onClick={openLoginModal}>
                  Login
                </Button>
                <Button size="sm" className="bg-hero-gradient" onClick={() => openEnrollmentModal()}>
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
      <EnrollmentModal isOpen={enrollmentModalOpen} onClose={closeEnrollmentModal} />
    </header>
  );
};

export default Header;