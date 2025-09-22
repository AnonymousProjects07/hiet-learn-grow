import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, Calendar, Clock, Video } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const DemoModal = ({ isOpen, onClose, selectedCourse }: DemoModalProps) => {
  const { toast } = useToast();
  const [demoData, setDemoData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedCourse || "",
    preferredDate: "",
    preferredTime: "",
    questions: ""
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

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!demoData.name || !demoData.email || !demoData.phone || !demoData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Demo Scheduled!",
      description: "Your free demo session has been scheduled. You'll receive a confirmation email with the meeting details.",
    });
    
    setDemoData({
      name: "",
      email: "",
      phone: "",
      course: "",
      preferredDate: "",
      preferredTime: "",
      questions: ""
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setDemoData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-primary flex items-center justify-center">
            <Video className="mr-2" size={24} />
            Book Free Demo Session
          </DialogTitle>
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              🆓 100% Free • No Commitment Required
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="bg-muted/30 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-primary mb-2">What to Expect in Your Demo:</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Live interactive session with expert mentor
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Course overview and curriculum walkthrough
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Career guidance and personalized roadmap
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Q&A session to address your concerns
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b pb-2">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="demo-name"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={demoData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demo-email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={demoData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demo-phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="demo-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="pl-10"
                    value={demoData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Demo Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary border-b pb-2">Demo Session Details</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-course">Course of Interest *</Label>
                <Select value={demoData.course} onValueChange={(value) => handleInputChange("course", value)}>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-date">Preferred Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="demo-date"
                      type="date"
                      className="pl-10"
                      value={demoData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="demo-time">Preferred Time</Label>
                  <Select value={demoData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="questions">Questions or Specific Topics</Label>
                <Textarea
                  id="questions"
                  placeholder="Any specific questions or topics you'd like us to cover during the demo?"
                  rows={3}
                  value={demoData.questions}
                  onChange={(e) => handleInputChange("questions", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Note:</strong> Demo sessions are conducted via Zoom/Google Meet. You'll receive the meeting link via email 30 minutes before the scheduled time.
            </p>
          </div>

          <div className="flex space-x-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-hero-gradient hover:opacity-90">
              Schedule Demo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;