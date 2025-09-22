import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Director",
      experience: "15+ Years",
      specialization: "Full Stack Development, AI/ML",
      education: "PhD Computer Science, IIT Delhi",
    },
    {
      name: "Priya Sharma",
      role: "Head of Training",
      experience: "12+ Years",
      specialization: "Python, Data Science",
      education: "M.Tech CSE, NIT Bangalore",
    },
    {
      name: "Amit Patel",
      role: "Senior Mentor",
      experience: "10+ Years",
      specialization: "Java, Spring Boot, Microservices",
      education: "B.Tech CSE, BITS Pilani",
    },
    {
      name: "Sneha Reddy",
      role: "Placement Head",
      experience: "8+ Years",
      specialization: "Career Counseling, HR",
      education: "MBA HR, Symbiosis",
    },
  ];

  const achievements = [
    { icon: Users, number: "2000+", label: "Students Trained" },
    { icon: Award, number: "95%", label: "Placement Rate" },
    { icon: Briefcase, number: "50+", label: "Hiring Partners" },
    { icon: BookOpen, number: "15+", label: "Courses Offered" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to delivering the highest quality education and training"
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and teaching methods"
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Honest, transparent, and ethical practices in all our endeavors"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement and adaptation to industry needs"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
              About HIET Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Careers Through Technology Excellence
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              For over a decade, HIET Software Solutions has been at the forefront of technology education, 
              transforming lives through comprehensive training programs and industry-focused consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between academic learning and industry requirements by providing 
                  world-class training programs that empower individuals with practical skills, 
                  industry knowledge, and career opportunities in the rapidly evolving technology landscape.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's leading technology education institute, recognized globally for 
                  excellence in training, innovation in curriculum design, and success in career 
                  transformation of our students across diverse technology domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and student success.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-primary-foreground" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans and passionate educators dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-sm text-muted-foreground mb-2">{member.specialization}</p>
                  <p className="text-xs text-muted-foreground">{member.education}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at HIET Software Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;