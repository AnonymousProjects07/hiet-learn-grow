import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, BookOpen, CreditCard, Calendar } from "lucide-react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const EnrollmentModal = ({ isOpen, onClose, selectedCourse }: EnrollmentModalProps) => {
  const { toast } = useToast();
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedCourse || "",
    experience: "",
    motivation: "",
    preferredMode: "",
    startDate: ""
  });

  const courses = [
    "Python Programming",
    "Java Development",
    "MERN Stack Development",
    "Data Science",
    "Data Analysis",
    "Advanced Excel",
    "Tally ERP",
    "Spoken English"
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Basic Knowledge",
    "Intermediate",
    "Advanced",
    "Professional"
  ];

  const modes = [
    "Online",
    "Offline",
    "Hybrid (Online + Offline)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!enrollmentData.name || !enrollmentData.email || !enrollmentData.phone || !enrollmentData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Enrollment Submitted!",
      description: "Thank you for enrolling. Our team will contact you within 24 hours to complete the registration process.",
    });
    
    setEnrollmentData({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      motivation: "",
      preferredMode: "",
      startDate: ""
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setEnrollmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-primary flex items-center justify-center">
            <BookOpen className="mr-2" size={24} />
            Course Enrollment
          </DialogTitle>
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              🎯 Start Your Learning Journey Today
            </Badge>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b pb-2">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="enroll-name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="enroll-name"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={enrollmentData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enroll-email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="enroll-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={enrollmentData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="enroll-phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="enroll-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="pl-10"
                  value={enrollmentData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Course Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b pb-2">Course Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="enroll-course">Course Selection *</Label>
                <Select value={enrollmentData.course} onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select value={enrollmentData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mode">Preferred Mode</Label>
                <Select value={enrollmentData.preferredMode} onValueChange={(value) => handleInputChange("preferredMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select learning mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {modes.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="start-date">Preferred Start Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="start-date"
                    type="date"
                    className="pl-10"
                    value={enrollmentData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b pb-2">Additional Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="motivation">What motivates you to take this course?</Label>
              <Textarea
                id="motivation"
                placeholder="Tell us about your goals and what you hope to achieve..."
                rows={3}
                value={enrollmentData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
              />
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <CreditCard className="mr-2 text-primary" size={20} />
              <h3 className="text-lg font-semibold text-primary">Payment Information</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              After enrollment confirmation, you'll receive payment details and can choose from:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Online Payment
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Installment Plans
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Bank Transfer
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Student Financing
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-hero-gradient hover:opacity-90">
              Submit Enrollment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;