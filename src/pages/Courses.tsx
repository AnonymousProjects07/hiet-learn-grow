import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Database, 
  TrendingUp, 
  BarChart, 
  FileSpreadsheet,
  Calculator,
  MessageCircle,
  Clock,
  Users,
  Award,
  CheckCircle
} from "lucide-react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("programming");

  const courseCategories = {
    programming: {
      title: "Programming & Development",
      icon: Code,
      courses: [
        {
          title: "Python Programming",
          duration: "3 Months",
          mode: "Online/Offline",
          price: "₹15,000",
          level: "Beginner to Advanced",
          students: "500+",
          rating: 4.8,
          description: "Master Python from basics to advanced concepts including OOP, frameworks, and libraries.",
          syllabus: ["Python Basics", "OOP Concepts", "Django Framework", "Flask", "APIs", "Database Integration"],
          features: ["Live Projects", "Industry Mentorship", "Placement Support", "Certificate"]
        },
        {
          title: "Java Development",
          duration: "4 Months",
          mode: "Online/Offline",
          price: "₹18,000",
          level: "Beginner to Advanced",
          students: "400+",
          rating: 4.7,
          description: "Comprehensive Java training covering Core Java to Enterprise applications.",
          syllabus: ["Core Java", "Advanced Java", "Spring Framework", "Hibernate", "Microservices", "REST APIs"],
          features: ["Real-world Projects", "Expert Mentors", "Job Assistance", "Industry Certificate"]
        },
        {
          title: "MERN Stack Development",
          duration: "5 Months",
          mode: "Online/Offline",
          price: "₹25,000",
          level: "Intermediate",
          students: "300+",
          rating: 4.9,
          description: "Full-stack web development using MongoDB, Express.js, React, and Node.js.",
          syllabus: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Authentication", "Deployment"],
          features: ["Portfolio Projects", "Industry Mentorship", "Job Placement", "Professional Certificate"]
        }
      ]
    },
    data: {
      title: "Data Science & Analytics",
      icon: TrendingUp,
      courses: [
        {
          title: "Data Science Masterclass",
          duration: "6 Months",
          mode: "Online/Offline",
          price: "₹30,000",
          level: "Intermediate to Advanced",
          students: "200+",
          rating: 4.8,
          description: "Complete data science program covering statistics, machine learning, and AI.",
          syllabus: ["Statistics", "Python for Data Science", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
          features: ["Industry Projects", "Research Papers", "Kaggle Competitions", "Professional Certificate"]
        },
        {
          title: "Data Analysis with Python",
          duration: "3 Months",
          mode: "Online/Offline",
          price: "₹20,000",
          level: "Beginner to Intermediate",
          students: "350+",
          rating: 4.7,
          description: "Learn data analysis, visualization, and reporting using Python libraries.",
          syllabus: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Visualization"],
          features: ["Hands-on Projects", "Real Datasets", "Career Guidance", "Certificate"]
        }
      ]
    },
    business: {
      title: "Business & Finance",
      icon: BarChart,
      courses: [
        {
          title: "Advanced Excel Training",
          duration: "2 Months",
          mode: "Online/Offline",
          price: "₹8,000",
          level: "Beginner to Advanced",
          students: "600+",
          rating: 4.6,
          description: "Master Excel for data analysis, reporting, and business intelligence.",
          syllabus: ["Advanced Formulas", "Pivot Tables", "VBA Macros", "Data Analysis", "Dashboard Creation", "Power BI"],
          features: ["Business Cases", "Templates", "Job Support", "Certificate"]
        },
        {
          title: "Tally ERP Training",
          duration: "1.5 Months",
          mode: "Online/Offline",
          price: "₹6,000",
          level: "Beginner",
          students: "400+",
          rating: 4.5,
          description: "Complete Tally training for accounting and business management.",
          syllabus: ["Tally Basics", "Accounting", "Inventory Management", "GST", "Payroll", "Reports"],
          features: ["Practical Training", "Business Scenarios", "Certificate", "Job Assistance"]
        }
      ]
    },
    communication: {
      title: "Communication Skills",
      icon: MessageCircle,
      courses: [
        {
          title: "Spoken English",
          duration: "3 Months",
          mode: "Online/Offline",
          price: "₹5,000",
          level: "Beginner to Advanced",
          students: "800+",
          rating: 4.7,
          description: "Improve your English speaking skills for professional and personal growth.",
          syllabus: ["Grammar", "Vocabulary", "Pronunciation", "Conversation", "Presentation Skills", "Interview Preparation"],
          features: ["Interactive Sessions", "Group Discussions", "Mock Interviews", "Certificate"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
              🎓 Professional Training Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master In-Demand Skills with Our
              <span className="block text-accent"> Expert-Led Courses </span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Choose from our comprehensive range of industry-aligned courses designed to accelerate your career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {Object.entries(courseCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                  <category.icon size={16} />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(courseCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center">
                    <category.icon className="mr-3" size={32} />
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.courses.map((course, index) => (
                    <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {course.duration}
                              </div>
                              <div className="flex items-center">
                                <Users size={14} className="mr-1" />
                                {course.students}
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary">{course.level}</Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{course.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Mode:</span> {course.mode}
                          </div>
                          <div>
                            <span className="font-medium">Price:</span> <span className="text-primary font-bold">{course.price}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Course Highlights:</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {course.syllabus.slice(0, 4).map((topic, i) => (
                              <div key={i} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle size={12} className="text-primary mr-1" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button className="flex-1 bg-hero-gradient hover:opacity-90">
                            Apply Now
                          </Button>
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Our Courses Stand Out
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience learning that goes beyond traditional education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Industry-Recognized Certificates",
                description: "Certificates valued by top companies"
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Learn from industry professionals"
              },
              {
                icon: Code,
                title: "Hands-on Projects",
                description: "Build real-world applications"
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Placement assistance and guidance"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our expert training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Book Free Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;