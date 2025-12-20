import React, { useState, useEffect } from "react";
import profile from "../assets/profile.png"; 
import emailjs from "emailjs-com";

import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Menu,
  X
} from 'lucide-react';
// import { portfolioData } from '../mock'; // REMOVED: Data is now defined below

// --- START: portfolioData DEFINITION (Includes all Certifications) ---
const portfolioData = {
  hero: {
    name: "Danda Lakshmi Mani Sankar",
    title: "AI/ML Engineer & GenAI Developer",
    subtitle: "Building intelligent solutions with AI & Machine Learning, Computer Vision, and Generative AI",
    resumeUrl: "https://drive.google.com/file/d/1kSjS7i14YkMDhzO1zvNQSaq-vEkXH6Z3/view?usp=sharing",
    email: "dandamanisankar010@gmail.com",
    linkedin: "https://www.linkedin.com/in/danda-lakshmi-manisankar-364b8b290",
    github: "https://github.com/DandaLakshmiManiSankar",
    phone: "+91 9182317043"
  },
  
  about: {
    description: "I'm a Computer Science Engineering student at R.V.R. & J.C. College of Engineering with a strong passion for Artificial Intelligence and Machine Learning. With a CGPA of 9.3, I specialize in developing intelligent systems using deep learning, computer vision, and generative AI. My work focuses on creating practical solutions that leverage cutting-edge AI technologies to solve real-world problems.",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "R.V.R. & J.C. College of Engineering, Guntur, AP",
      duration: "Aug 2022 - Jun 2026",
      cgpa: "9.3"
    },
    highlights: [
      "9.3 CGPA in Computer Science Engineering",
      "93.1% in Intermediate (MPC)",
      "99% in SSC",
      "Multiple AI/ML internships and certifications"
    ]
  },
  
  skills: [
    {
      category: "Machine Learning & AI",
      items: ["Deep Learning", "Computer Vision","AI/ML Algorithms", "Natural Language Processing", "Generative AI", "LLMs & RAG", "Model Finetuning"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "C++", "C", "Java", "SQL", "JavaScript"]
    },
    {
      category: "ML/DL Frameworks",
      items: [ "PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "Hugging Face", "OpenCV"]
    },
    {
      category: "Web Development",
      items: ["React.js", "NodeJs", "React Native", "FastAPI", "Streamlit"]
    },
    {
      category: "Databases & Cloud",
      items: ["MongoDB", "SQL Lite", "AWS", "Git & GitHub"]
    },
    {
      category: "Data Science Tools",
      items: ["NumPy", "Pandas", "Matplotlib", "NLTK", "Vector Embeddings"]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Blood Cell Detection System",
      description: "Developed a YOLO-based deep learning model for real-time blood cell detection and classification. Achieved 89% accuracy on BCCD dataset with 98% precision in bounding-box detection.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
      tech: ["YOLO", "Python", "OpenCV", "Streamlit", "Computer Vision"],
      metrics: ["89% Accuracy", "98% Precision", "35% Faster Inference", "50+ Concurrent Users"],
      github: "https://huggingface.co/spaces/DandaLakshmi/blood-cell-detection",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "Credit Card Fraud Detection",
      description: "Engineered a machine learning solution using XGBoost that detects fraudulent transactions with 92% accuracy, surpassing previous methods by 15% and reducing false positives by 22%.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tech: ["XGBoost", "Python", "Scikit-learn", "Pandas", "Machine Learning"],
      metrics: ["92% Accuracy", "15% Improvement", "22% Fewer False Positives", "Scalable Pipeline"],
      github: "https://github.com/DandaLakshmiManiSankar/CreditCardFraudDetection",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "Heart Disease Risk Prediction",
      description: "Designed and deployed an ML model using XGBoost to predict heart disease risk from clinical parameters, achieving ~90% accuracy. Optimized for cloud deployment with 40% improved data consistency.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      tech: ["ML Models(XGBoost/NaiveBayes)", "Python", "Streamlit", "AWS", "Healthcare AI"],
      metrics: ["~90% Accuracy", "40% Better Consistency", "Cloud Deployed", "Real-time Predictions"],
      github: "https://heartattackriskpredictionproject.streamlit.app/",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "AI Telegram Chatbot",
      description: "Built an AI-powered Telegram chatbot using OpenAI GPT-3.5, Mistral AI, and Google Gemini API. Handles 100+ user interactions per week with sub-2 second response time and 35% improved efficiency.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tech: ["GPT-3.5", "Gemini API", "Mistral AI", "Python", "Telegram API"],
      metrics: ["100+ Weekly Users", "<2s Response Time", "35% Efficiency Gain", "Multi-Model Integration"],
      github: "https://github.com/DandaLakshmiManiSankar",
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: "Multimodal ChatBot",
      description: "Developed an advanced multimodal chatbot capable of processing text, images, and voice inputs using state-of-the-art language models and vision transformers for comprehensive AI interactions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tech: ["LLMs", "Vision Transformers", "Python", "NLP", "Multimodal AI"],
      metrics: ["Text + Image + Voice", "Multiple LLM Support", "Real-time Processing", "Advanced NLP"],
      github: "https://github.com/DandaLakshmiManiSankar/MultiModel_ChatBot_NullClassInternship",
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: "Face Smile & Age Detection",
      description: "Created an AI-powered computer vision tool for real-time face detection, smile recognition, and age estimation using deep learning models with high accuracy and low latency.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80",
      tech: ["OpenCV", "Deep Learning", "CNN", "Python", "Computer Vision"],
      metrics: ["Real-time Detection", "Multi-feature Recognition", "High Accuracy", "Low Latency"],
      github: "https://github.com/DandaLakshmiManiSankar",
      demo: null,
      featured: false
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "AI/ML Intern",
      company: "Edunet Foundation",
      duration: "May 2025 - Jun 2025",
      description: "Constructed an AI-powered Telegram chatbot utilizing OpenAI GPT-3.5, Mistral AI, and Google Gemini API. Handled 100+ user interactions per week with sub-2 second response time.",
      achievements: [
        "Integrated multiple AI models (GPT-3.5, Mistral, Gemini)",
        "Improved response efficiency by 35% through advanced error-handling",
        "Optimized API calls for low-latency user interactions",
        "Handled 100+ user interactions"
      ]
    },
    {
      id: 2,
      role: "AI/ML Intern",
      company: "Infosys Springboard",
      duration: "Aug 2025 - Oct 2025",
      description: "Worked on artificial intelligence and machine learning project i.e to develop Face Smile & Age Detection, gaining hands-on experience with AI technologies and industry best practices.",
      achievements: [
        "Completed AI/ML projects with practical industry applications",
        "Gained expertise in AI fundamentals and advanced ML techniques",
        "Collaborated with industry experts on real-world AI solutions",
        "Earned Artificial Intelligence Primer certification"
      ]
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "NullClass",
      duration: "Feb 2025 - Mar 2025",
      description: "Designed and applied machine learning models for heart disease risk prediction, achieving ~90% accuracy. Optimized deployment in cloud-based environment with scalable performance.",
      achievements: [
        "Built XGBoost model with ~90% accuracy for heart disease prediction",
        "Preprocessed and analyzed medical datasets with feature engineering",
        "Improved data consistency by 40% through optimization",
        "Deployed models in Streamlit cloud environment"
      ]
    }
  ],
  
  certifications: [
    // These are the certificates extracted from your resume
    {
      id: 1,
      title: "Generative AI Fundamentals",
      issuer: "Databricks",
      date: "2025",
      icon: "Award"
    },
    {
      id: 2,
      title: "Prompt Engineering for Everyone",
      issuer: "IBM SkillsNetwork",
      date: "2025",
      icon: "Award"
    },
    {
      id: 3,
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2025",
      icon: "Award"
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      issuer: "Kaggle",
      date: "2025",
      icon: "Award"
    },
    {
      id: 5,
      title: "Introduction to Python Programming",
      issuer: "NPTEL",
      date: "2024",
      icon: "Award"
    },
    {
      id: 6,
      title: "Introduction to IoT",
      issuer: "NPTEL",
      date: "2025",
      icon: "Award"
    },
    {
      id: 7,
      title: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      date: "2025",
      icon: "Award"
    }
  ]
};
// --- END: portfolioData DEFINITION ---


// Updated Button component for better styling control using Tailwind classes
const Button = ({ children, className, ...props }) => (
  <button 
    {...props} 
    className={`flex items-center justify-center font-medium transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

// Helper components remain largely Tailwind-based
const Card = ({ children, className }) => (
  <div className={`border border-gray-200 p-4 rounded-xl shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-3">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const CardTitle = ({ children, className }) => <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
const CardDescription = ({ children, className }) => <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full ${className}`}>
    {children}
  </span>
);

const Input = (props) => (
  <input {...props} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${props.className}`} />
);

const Textarea = (props) => (
  <textarea {...props} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${props.className}`} />
);


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_0acjhkk",
        "template_e3hg62k",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "lu7E9SnctUtgC0ZqL"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-transparent">

      {/* Animated Background - Requires external CSS */}
      <div className="animated-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
        <div className="orb orb-6"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">DLMS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === link.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content and Buttons */}
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {portfolioData.hero.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
                {portfolioData.hero.title}
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl">
                {portfolioData.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                {/* UPDATED BUTTON STYLING: Blue, appropriate size */}
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg text-lg"
                >
                  View Projects
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg text-lg"
                >
                  Get In Touch
                </Button>
                <Button 
                  onClick={() => window.open(portfolioData.hero.resumeUrl, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </div>
              <div className="flex gap-6 mt-10">
                <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={28} />
                </a>
                <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href={`mailto:${portfolioData.hero.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="flex justify-center items-center w-full lg:w-1/3 lg:translate-x-28">

              <div className="relative">
                <div className="absolute -inset-6 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div
                  className="
                    relative
                    w-52 h-52
                    sm:w-64 sm:h-64
                    lg:w-96 lg:h-96
                    rounded-full
                    overflow-hidden
                    border-4 border-white
                    shadow-2xl
                    bg-white
                  "
                >
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    />
                  </div>
                </div>
        
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {portfolioData.about.description}
              </p>
              <div className="space-y-3">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-blue-600" size={28} />
                  <CardTitle className="text-2xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {portfolioData.about.education.degree}
                </h3>
                <p className="text-gray-600 mb-2">
                  {portfolioData.about.education.institution}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  {portfolioData.about.education.duration}
                </p>
                <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                  CGPA: {portfolioData.about.education.cgpa}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.map((skillGroup, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Code className="text-blue-600" size={24} />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <Badge key={idx} className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 mb-12">Showcasing my work in AI, Machine Learning, and Computer Vision</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <Card key={project.id} className="border-gray-200 hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-black font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} className="bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg text-sm transition-colors"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm"
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 p-2 rounded-lg text-sm transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Work Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <Card key={exp.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Briefcase className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        <p className="text-lg text-gray-600 mt-1">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex-shrink-0 mt-1">
                      {exp.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 mb-12">Professional certifications and achievements</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioData.certifications.map((cert) => (
              <Card key={cert.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    <div className="font-medium text-gray-700 mt-2">{cert.issuer}</div>
                    <div className="text-sm text-gray-500 mt-1">{cert.date}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href={`mailto:${portfolioData.hero.email}`} className="text-gray-600 hover:text-blue-600">
                      {portfolioData.hero.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href={`tel:${portfolioData.hero.phone}`} className="text-gray-600 hover:text-blue-600">
                      {portfolioData.hero.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Linkedin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-blue-600 break-all">
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Github className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-blue-600 break-all">
                      @DandaLakshmiManiSankar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">
                © 2025 {portfolioData.hero.name}. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${portfolioData.hero.email}`}
                className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
