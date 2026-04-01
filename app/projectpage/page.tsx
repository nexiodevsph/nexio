"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Live' | 'Expired' | 'Local';
  tags: string[];
  link: string | null;
  features: string[];
  gallery: string[];
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects: Project[] = [
    {
      id: 1,
      title: "Online Entrance Exam Web",
      description: "Comprehensive web-based entrance examination system with secure testing environment. Features include real-time monitoring, automated grading, and detailed analytics for administrators.",
      image: "/images/Graphic/Admission Web/eadmit3.png",
      status: "Live",
      tags: ["Web App", "Examination", "TailWind CSS", "Inertia.JS", "Laravel", "MySql"],
      link: null,
      features: [
        "Real-time exam monitoring",
        "Automated grading system",
        "Secure authentication",
        "Detailed analytics dashboard",
        "Multi-user support"
      ],
      gallery: [
        "/images/Graphic/Admission Web/eadmit2.png",
        "/images/Graphic/Admission Web/eadmit3.png",
        "/images/Graphic/Admission Web/eadmit4.png",
        "/images/Graphic/Admission Web/eadmitw1.png"
      ]
    },
    {
      id: 2,
      title: "Online Entrance Exam Mobile",
      description: "Mobile-optimized entrance exam application for seamless testing on any device connected to Web Via API. Provides students with flexible examination options.",
      image: "/images/Graphic/Admission Mobile/eadmitm4.jpg",
      status: "Live",
      tags: ["Mobile", "Examination", "React Native"],
      link: null,
      features: [
        "Cross-platform compatibility",
        "API integration",
        "Offline mode support",
        "Push notifications",
        "User-friendly interface"
      ],
      gallery: [
        "/images/Graphic/Admission Mobile/eadmitm1.jpg",
        "/images/Graphic/Admission Mobile/eadmitm2.jpg",
        "/images/Graphic/Admission Mobile/eadmitm3.jpg",
        "/images/Graphic/Admission Mobile/eadmitm4.jpg"
      ]
    },
    {
      id: 3,
      title: "Web-Based Enrollment System",
      description: "Streamlined online enrollment platform for efficient student registration and management. Simplifies the admission process for educational institutions.",
      image: "/images/Graphic/Onsts/onsts2.png",
      status: "Expired",
      tags: ["Web App", "Enrollment", "TailWind CSS", "Inertia.JS", "Laravel", "MySql"],
      link: null,
      features: [
        "Online registration",
        "Document upload",
        "Payment integration",
        "Student dashboard",
        "Admin management panel"
      ],
      gallery: [
        "/images/Graphic/Onsts/onsts1.png",
        "/images/Graphic/Onsts/onsts2.png"
      ]
    },
    {
      id: 4,
      title: "CampoArco Baleno",
      description: "College art club platform where members can showcase their artistic works using different mediums. A creative space for artists to display and share their portfolios.",
      image: "/images/Graphic/Arco/arco.png",
      status: "Live",
      tags: ["Art Community", "Portfolio", "Gallery"],
      link: "https://arcobaleno.vercel.app/",
      features: [
        "Portfolio galleries",
        "Artist profiles",
        "Artwork categorization",
        "Community features",
        "Responsive design"
      ],
      gallery: [
        "/images/Graphic/Arco/arco.png"
      ]
    },
    {
      id: 5,
      title: "OJT Time Tracker",
      description: "Mobile app for students to track hours rendered during internship with detailed time logging. Helps students and employers monitor internship progress.",
      image: "/images/Graphic/TimeTracker/Screenshot_20260329-192248-portrait.png",
      status: "Live",
      tags: ["Mobile App", "Time Tracking", "OJT", "React Native CLI", "SQLite"],
      link: "https://www.mediafire.com/file/xy7ygnqw3s09m3i/Time_Tracker.apk/file",
      features: [
        "Time tracking",
        "Hour calculation",
        "Daily reports",
        "Internship records",
        "Export functionality"
      ],
      gallery: [
        "/images/Graphic/TimeTracker/Screenshot_20260329-192248-portrait.png",
        "/images/Graphic/TimeTracker/Screenshot_20260329-192258-portrait.png",
        "/images/Graphic/TimeTracker/Screenshot_20260329-192303-portrait.png"
      ]
    },
    {
      id: 6,
      title: "PTA Accounting System",
      description: "Financial management system for PTA transactions and membership at Alubijid National Comprehensive High School. Streamlines PTA financial operations.",
      image: "/images/Graphic/PTA Accounting/PTA Accounting3.png",
      status: "Local",
      tags: ["Web App", "Accounting", "PTA", "TailWind CSS", "Inertia.JS", "Laravel", "MySql"],
      link: null,
      features: [
        "Financial tracking",
        "Membership management",
        "Transaction records",
        "Report generation",
        "Budget planning"
      ],
      gallery: [
        "/images/Graphic/PTA Accounting/PTA Accounting1.png",
        "/images/Graphic/PTA Accounting/PTA Accounting2.png",
        "/images/Graphic/PTA Accounting/PTA Accounting3.png"
      ]
    },
    {
      id: 7,
      title: "DPWH Project Management",
      description: "Department of Public Works and Highways project management system for monitoring existing infrastructure projects and their construction status. Designed for construction departments to track project progress, milestones, and completion status efficiently.",
      image: "/images/Graphic/DPWH-Proj/Dashboard.png",
      status: "Local",
      tags: ["Web App", "Project Management", "Government", "Construction", "Laravel", "MySQL"],
      link: null,
      features: [
        "Project monitoring",
        "Construction status tracking",
        "Contractor management",
        "Document archives",
        "Category management",
        "Dashboard analytics"
      ],
      gallery: [
        "/images/Graphic/DPWH-Proj/LandingPage.png",
        "/images/Graphic/DPWH-Proj/Dashboard.png",
        "/images/Graphic/DPWH-Proj/ManageProject.png",
        "/images/Graphic/DPWH-Proj/Contractors.png",
        "/images/Graphic/DPWH-Proj/Category.png",
        "/images/Graphic/DPWH-Proj/Gallery.png",
        "/images/Graphic/DPWH-Proj/Archives.png",
        "/images/Graphic/DPWH-Proj/Login.png"
      ]
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-grow">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative digital solutions. From web applications to mobile apps, 
            we create technology that solves real-world problems and drives business success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {currentProjects.map((project) => (
            <div key={project.id} className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
              {/* Status Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                <span className={`px-2 sm:px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg ${
                  project.status === 'Live' ? 'bg-green-500' : 
                  project.status === 'Expired' ? 'bg-red-500' : 
                  'bg-orange-500'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* External Link Icon */}
              {project.link && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}

              {/* Horizontal Layout */}
              <div className="flex flex-col sm:flex-row">
                {/* Project Image */}
                <div 
                  className="relative w-full sm:w-1/3 h-40 sm:h-auto min-h-[150px] sm:min-h-[200px] overflow-hidden bg-white/5 cursor-pointer group"
                  onClick={() => openModal(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/0 group-hover:text-white/80 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">{project.description}</p>
                  
                  {/* Features */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {project.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1 sm:mt-0.5 flex-shrink-0"></span>
                          <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-touch inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs sm:text-sm font-medium transition-colors"
                    >
                      {project.link.includes('mediafire') ? 'Download APK' : 'View Live Site'}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 sm:mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="button-touch px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`button-touch w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="button-touch px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            href="/"
            className="button-touch inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-medium transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-800 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/20">
              <h3 className="text-lg sm:text-xl font-bold text-white">{selectedProject.title} - Gallery</h3>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image Display */}
            <div className="relative flex items-center justify-center p-4 sm:p-8 bg-black/50">
              {selectedProject.gallery.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2 button-touch"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2 button-touch"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Current Image */}
              <div className="relative max-w-4xl max-h-[50vh] sm:max-h-[60vh] w-full aspect-video bg-black/30 rounded-lg">
                <Image
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain responsive-img"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  quality={100}
                  priority
                  unoptimized={false}
                />
              </div>
            </div>

            {/* Image Counter */}
            {selectedProject.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-white text-xs sm:text-sm">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>
            )}

            {/* Thumbnail Gallery */}
            {selectedProject.gallery.length > 1 && (
              <div className="flex gap-2 p-3 sm:p-4 border-t border-white/20 overflow-x-auto">
                {selectedProject.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500 scale-110' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover responsive-img"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}