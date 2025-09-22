import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useModals } from "@/hooks/useModals";
import { useNavigate } from "react-router-dom";
import LoginModal from "@/components/modals/LoginModal";
import EnrollmentModal from "@/components/modals/EnrollmentModal";
import DemoModal from "@/components/modals/DemoModal";

const Home = () => {
  const navigate = useNavigate();
  const { 
    loginModalOpen, 
    openLoginModal, 
    closeLoginModal,
    enrollmentModalOpen,
    openEnrollmentModal,
    closeEnrollmentModal,
    demoModalOpen,
    openDemoModal,
    closeDemoModal
  } = useModals();
  const courses = [
    {
      title: "Python Programming",
      duration: "3 Months",
      students: "500+",
      level: "Beginner to Advanced",
      icon: Code,
    },
    {
      title: "MERN Stack Development",
      duration: "4 Months",
      students: "300+",
      level: "Intermediate",
      icon: Code,
    },
    {
      title: "Data Science",
      duration: "6 Months",
      students: "200+",
      level: "Advanced",
      icon: TrendingUp,
    },
    {
      title: "Java Development",
      duration: "4 Months",
      students: "400+",
      level: "Beginner to Advanced",
      icon: Code,
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with 10+ years of experience",
    },
    {
      icon: Award,
      title: "Placement Support",
      description: "95% placement rate with top companies in the industry",
    },
    {
      icon: BookOpen,
      title: "Hands-on Projects",
      description: "Build real-world projects to enhance your portfolio",
    },
    {
      icon: CheckCircle,
      title: "Certification",
      description: "Industry-recognized certificates upon course completion",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      content: "HIET's Python course transformed my career. The practical approach and mentor support helped me land my dream job.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Data Analyst at Infosys",
      content: "The Data Science program is comprehensive and industry-relevant. Highly recommend for career growth.",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      role: "Full Stack Developer",
      content: "Excellent training quality and placement assistance. Got placed within 2 months of course completion.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🚀 Transform Your Career Today
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Excellence in
                <span className="block text-accent"> Tech Training </span>
                & Consultancy
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Empower your career with cutting-edge technology training, expert mentorship, 
                and guaranteed placement support at India's leading software training institute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-hero" onClick={() => navigate('/courses')}>
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => openDemoModal()}>
                  Book Free Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm opacity-80">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-80">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Hiring Partners</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="HIET Software Solutions Training" 
                className="rounded-2xl shadow-hero w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-hero max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Industry Certified</div>
                    <div className="text-sm text-muted-foreground">Recognized Training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose HIET Software Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to tech education and career development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 animate-slide-up">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Popular Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master in-demand technologies with our comprehensive, industry-aligned curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                      <course.icon className="text-primary-foreground" size={24} />
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {course.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>Duration: {course.duration}</div>
                    <div>Enrolled: {course.students}</div>
                  </div>
                  <Button className="w-full mt-4 bg-hero-gradient hover:opacity-90" onClick={() => openEnrollmentModal(course.title)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => navigate('/courses')}>
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful graduates who transformed their careers with HIET.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <Quote className="text-primary mb-4" size={24} />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who chose HIET for their career advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => openEnrollmentModal()}>
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate('/contact')}>
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
      
      <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
      <EnrollmentModal isOpen={enrollmentModalOpen} onClose={closeEnrollmentModal} />
      <DemoModal isOpen={demoModalOpen} onClose={closeDemoModal} />
    </div>
  );
};

export default Home;