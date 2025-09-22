import { useState } from "react";

export const useModals = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [courseDetailsModalOpen, setCourseDetailsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseDetails, setSelectedCourseDetails] = useState<any>(null);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openEnrollmentModal = (course?: string) => {
    setSelectedCourse(course || "");
    setEnrollmentModalOpen(true);
  };
  const closeEnrollmentModal = () => {
    setEnrollmentModalOpen(false);
    setSelectedCourse("");
  };

  const openDemoModal = (course?: string) => {
    setSelectedCourse(course || "");
    setDemoModalOpen(true);
  };
  const closeDemoModal = () => {
    setDemoModalOpen(false);
    setSelectedCourse("");
  };

  const openCourseDetailsModal = (course: any) => {
    setSelectedCourseDetails(course);
    setCourseDetailsModalOpen(true);
  };
  const closeCourseDetailsModal = () => {
    setCourseDetailsModalOpen(false);
    setSelectedCourseDetails(null);
  };

  return {
    // Login Modal
    loginModalOpen,
    openLoginModal,
    closeLoginModal,
    
    // Enrollment Modal
    enrollmentModalOpen,
    openEnrollmentModal,
    closeEnrollmentModal,
    
    // Demo Modal
    demoModalOpen,
    openDemoModal,
    closeDemoModal,
    
    // Course Details Modal
    courseDetailsModalOpen,
    openCourseDetailsModal,
    closeCourseDetailsModal,
    
    // Selected data
    selectedCourse,
    selectedCourseDetails
  };
};