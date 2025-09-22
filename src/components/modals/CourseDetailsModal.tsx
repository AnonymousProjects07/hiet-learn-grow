import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  BookOpen,
  Video,
  Download,
  Calendar,
  IndianRupee
} from "lucide-react";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: any;
  onEnroll: (course: string) => void;
  onDemo: (course: string) => void;
}

const CourseDetailsModal = ({ isOpen, onClose, course, onEnroll, onDemo }: CourseDetailsModalProps) => {
  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary flex items-center">
            <BookOpen className="mr-3" size={28} />
            {course.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">{course.level}</Badge>
            <Badge variant="outline" className="flex items-center">
              <Clock size={12} className="mr-1" />
              {course.duration}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Users size={12} className="mr-1" />
              {course.students} enrolled
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Award size={12} className="mr-1" />
              Certificate included
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Course Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <Clock className="mx-auto mb-2 text-primary" size={24} />
                  <h4 className="font-semibold">Duration</h4>
                  <p className="text-sm text-muted-foreground">{course.duration}</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <Video className="mx-auto mb-2 text-primary" size={24} />
                  <h4 className="font-semibold">Mode</h4>
                  <p className="text-sm text-muted-foreground">{course.mode}</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center">
                  <Award className="mx-auto mb-2 text-primary" size={24} />
                  <h4 className="font-semibold">Certificate</h4>
                  <p className="text-sm text-muted-foreground">Industry Recognized</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.syllabus.map((topic: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Detailed Curriculum</h3>
                <div className="space-y-4">
                  {course.syllabus.map((topic: string, index: number) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <span className="text-primary font-semibold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{topic}</h4>
                            <p className="text-sm text-muted-foreground">Module {index + 1}</p>
                          </div>
                        </div>
                        <Badge variant="outline">
                          {Math.floor(Math.random() * 10) + 5} hours
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Course Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{feature}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature === "Live Projects" && "Work on real-world projects to build your portfolio"}
                          {feature === "Industry Mentorship" && "Get guidance from experienced industry professionals"}
                          {feature === "Placement Support" && "Comprehensive job placement assistance and interview preparation"}
                          {feature === "Certificate" && "Industry-recognized certificate upon successful completion"}
                          {feature === "Professional Certificate" && "Professional-grade certificate valued by employers"}
                          {feature === "Job Assistance" && "Dedicated support for job searching and career advancement"}
                          {feature === "Real-world Projects" && "Hands-on experience with actual industry projects"}
                          {feature === "Expert Mentors" && "Learn from professionals with 10+ years of experience"}
                          {feature === "Portfolio Projects" && "Build an impressive portfolio to showcase your skills"}
                          {feature === "Job Placement" && "Active job placement support with partner companies"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="space-y-6 mt-6">
              <div className="text-center">
                <div className="bg-hero-gradient text-primary-foreground p-8 rounded-lg mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <IndianRupee size={32} />
                    <span className="text-4xl font-bold">{course.price.replace('₹', '')}</span>
                  </div>
                  <p className="text-lg opacity-90">Course Fee</p>
                  <p className="text-sm opacity-75 mt-2">Includes all materials, projects, and certification</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Payment Options</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Full payment discount: 10% off
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Installment plans available
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Student financing options
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">What's Included</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        All course materials
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Project source codes
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Industry certificate
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={14} className="text-primary mr-2" />
                        Placement assistance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex space-x-4 mt-8 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={() => onDemo(course.title)} 
              className="flex-1"
            >
              <Video size={16} className="mr-2" />
              Book Free Demo
            </Button>
            <Button 
              onClick={() => onEnroll(course.title)} 
              className="flex-1 bg-hero-gradient hover:opacity-90"
            >
              <Calendar size={16} className="mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;