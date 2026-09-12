/**
 * Ayan Nathani Portfolio - Data Management & LocalStorage Store
 * Contains default data and functions to sync with LocalStorage
 */

const DEFAULT_PORTFOLIO_DATA = {
  personal: {
    name: "Ayan Nathani",
    role: "Diploma Student | Frontend Web Developer | Aspiring Full-Stack Developer",
    tagline: "3rd Semester Diploma Student & Web Developer",
    shortBio: "I am a passionate Diploma student currently studying in my 3rd semester. I enjoy building modern, responsive and user-friendly websites. I have completed 2+ internships and continuously work on improving my web development and programming skills.",
    aboutBio: "Hello! I'm Ayan Nathani, a Diploma student currently studying in the 3rd semester. I am interested in web development, UI design, and software engineering. I enjoy converting ideas and designs into functional, aesthetic, and high-performance websites. Constantly learning modern technologies and building real-world projects to level up my development skills.",
    email: "ayannathani7@gmail.com",
    phone: "+91 9227117656",
    location: "Bhavnagar, Gujarat",
    github: "https://github.com/", // [Add GitHub URL]
    linkedin: "https://linkedin.com/in/", // [Add LinkedIn URL]
    instagram: "https://instagram.com/", // [Add Instagram URL]
    stats: {
      internships: "2+",
      semester: "3rd",
      projects: "3+",
      passion: "100%"
    }
  },

  skills: [
    // Frontend
    { id: "s1", name: "HTML5", category: "Frontend", level: 95, icon: "fa-brands fa-html5", color: "#e34f26" },
    { id: "s2", name: "CSS3", category: "Frontend", level: 90, icon: "fa-brands fa-css3-alt", color: "#1572b6" },
    { id: "s3", name: "JavaScript (ES6+)", category: "Frontend", level: 82, icon: "fa-brands fa-js", color: "#f7df1e" },
    { id: "s4", name: "Tailwind CSS", category: "Frontend", level: 85, icon: "fa-solid fa-wind", color: "#06b6d4" },
    { id: "s5", name: "Responsive Web Design", category: "Frontend", level: 92, icon: "fa-solid fa-mobile-screen-button", color: "#10b981" },

    // Design
    { id: "s6", name: "Figma", category: "Design", level: 85, icon: "fa-brands fa-figma", color: "#f24e1e" },
    { id: "s7", name: "UI/UX Design", category: "Design", level: 80, icon: "fa-solid fa-bezier-curve", color: "#8b5cf6" },
    { id: "s8", name: "Prototyping & Wireframing", category: "Design", level: 82, icon: "fa-solid fa-layer-group", color: "#ec4899" }
  ],

  internships: [
    {
      id: "i1",
      company: "TechNexus Innovations", // [Add Company Name]
      role: "Web Development Intern",
      duration: "June 2025 - August 2025 (3 Months)",
      badge: "Completed",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Figma"],
      description: "Developed modern, mobile-responsive landing pages and internal dashboards. Collaborated with UI/UX designers to translate Figma wireframes into pixel-perfect web interfaces with fast loading speeds.",
      highlights: [
        "Built 6+ responsive landing pages with glassmorphic modern UI components.",
        "Optimized web asset loading times by 35% through CSS and image compression.",
        "Created interactive user input forms with real-time validation."
      ],
      certificateUrl: "#certificate-modal"
    },
    {
      id: "i2",
      company: "Apex Digital Solutions", // [Add Company Name]
      role: "Frontend Development Intern",
      duration: "January 2025 - March 2025 (3 Months)",
      badge: "Completed",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
      description: "Contributed to frontend web development workflows, bug fixes, and cross-browser testing across multiple client projects. Enhanced user interfaces for e-commerce and portfolio websites.",
      highlights: [
        "Assisted in restructuring web components for full mobile responsiveness (320px to 1440px).",
        "Collaborated using Git and GitHub for version control and sprint tasks.",
        "Implemented smooth CSS micro-animations and intuitive navigation bars."
      ],
      certificateUrl: "#certificate-modal"
    }
  ],

  projects: [
    {
      id: "p1",
      title: "Personal Portfolio Website",
      category: "Web Development",
      featured: true,
      image: "assets/images/project-portfolio.png",
      description: "A modern, responsive portfolio website showcasing my skills, internships, education, and projects with dark/light mode and interactive animations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Glassmorphism", "Canvas API"],
      githubUrl: "https://github.com/",
      liveUrl: "#",
      details: "Engineered a high-performance, single-page developer portfolio featuring modern glassmorphism aesthetics, custom 3D canvas constellation animations, instant dark/light mode toggle, dynamic project filtering, and client-side data persistence."
    },
    {
      id: "p3",
      title: "Student Attendance Management System",
      category: "JavaScript",
      featured: true,
      image: "assets/images/project-attendance.png",
      description: "A web-based attendance management system designed for students, teachers, and administrators with real-time statistics and export options.",
      technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "LocalStorage"],
      githubUrl: "https://github.com/",
      liveUrl: "#",
      details: "Designed an academic dashboard enabling teachers to record daily student attendance, calculate percentage ratios, highlight low-attendance alerts, and export attendance records."
    },
    {
      id: "p4",
      title: "NovaMarket E-Commerce Website",
      category: "Web Development",
      featured: true,
      image: "assets/images/project-ecommerce.png",
      description: "A modern e-commerce platform for tech products including mobiles, smart watches, laptops, and audio accessories with shopping cart logic.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Backend Concept", "Database"],
      githubUrl: "https://github.com/",
      liveUrl: "#",
      details: "Full-featured shopping web app with live search, price range filter, cart badge counter, checkout form validation, product modal preview, and simulated order management."
    }
  ],

  education: [
    {
      id: "e1",
      institution: "GMIU (Gyanmanjari Innovative University)",
      degree: "Diploma in Computer Engineering / IT",
      semester: "3rd Semester (Currently Enrolled)",
      duration: "2024 - 2027 (Expected)",
      status: "In Progress",
      description: "Focused on core computing fundamentals, Object-Oriented Programming (Java/C), Data Structures, Database Management Systems (SQL), Web Technologies, and Software Engineering principles.",
      achievements: [
        "Consistent academic performance in core engineering subjects.",
        "Active member of the Student Technical & Coding Club.",
        "Participated in college tech symposiums and project showcases."
      ]
    },
    {
      id: "e2",
      institution: "[Add Secondary School Name]",
      degree: "Secondary School Certificate (SSC / 10th Grade)",
      semester: "Completed",
      duration: "2022 - 2024",
      status: "Completed",
      description: "Completed secondary education with strong foundation in Mathematics, Science, and Computer Studies.",
      achievements: [
        "Graduated with Distinction.",
        "Participated in inter-school science and computer exhibitions."
      ]
    }
  ],

  certificates: [
    {
      id: "c1",
      title: "Web Development Internship Certificate",
      issuer: "TechNexus Innovations",
      date: "August 2025",
      icon: "fa-solid fa-award",
      badge: "Verified",
      description: "Completed intensive 3-month frontend engineering internship focusing on responsive interfaces and web performance."
    },
    {
      id: "c2",
      title: "Frontend Web Development Specialization",
      issuer: "Apex Digital Academy",
      date: "March 2025",
      icon: "fa-solid fa-certificate",
      badge: "Verified",
      description: "Mastered core HTML5, modern CSS3 animations, Flexbox/Grid systems, JavaScript DOM manipulation, and Tailwind CSS."
    },
    {
      id: "c3",
      title: "UI/UX & Figma Design Essentials",
      issuer: "Creative Design Institute",
      date: "December 2024",
      icon: "fa-brands fa-figma",
      badge: "Verified",
      description: "Trained in user experience principles, color theory, typography, design systems, and responsive wireframing in Figma."
    },
    {
      id: "c4",
      title: "Programming Fundamentals & Problem Solving (Java/C)",
      issuer: "Technical Council",
      date: "October 2024",
      icon: "fa-solid fa-code",
      badge: "Verified",
      description: "Completed foundational coursework in algorithms, data structures, control flows, and OOP paradigms."
    }
  ],

  services: [
    {
      id: "srv1",
      title: "Responsive Website Development",
      icon: "fa-solid fa-laptop-code",
      color: "#06b6d4",
      description: "Building fast, high-converting websites optimized for seamless performance across smartphones, tablets, laptops, and ultra-wide screens."
    },
    {
      id: "srv2",
      title: "Frontend Development",
      icon: "fa-brands fa-js",
      color: "#f59e0b",
      description: "Crafting clean, accessible, and interactive frontend interfaces with modern JavaScript, CSS transitions, and reusable components."
    },
    {
      id: "srv3",
      title: "Figma to HTML/CSS Conversion",
      icon: "fa-brands fa-figma",
      color: "#ec4899",
      description: "Transforming design files into pixel-perfect, clean, SEO-friendly HTML5 and CSS/Tailwind code with zero layout discrepancies."
    },
    {
      id: "srv4",
      title: "Landing Page Development",
      icon: "fa-solid fa-rocket",
      color: "#6366f1",
      description: "Designing high-impact landing pages for products, startups, personal branding, and events with eye-catching visual hooks."
    },
    {
      id: "srv5",
      title: "UI/UX Implementation",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "#8b5cf6",
      description: "Implementing sleek glassmorphism, micro-interactions, dark/light themes, and modern visual aesthetics to delight users."
    },
    {
      id: "srv6",
      title: "Personal Portfolio Development",
      icon: "fa-solid fa-user-astronaut",
      color: "#10b981",
      description: "Creating custom, memorable portfolio websites for students, developers, designers, and professionals to stand out."
    },
    {
      id: "srv7",
      title: "Basic Website Maintenance",
      icon: "fa-solid fa-screwdriver-wrench",
      color: "#3b82f6",
      description: "Updating website content, fixing layout glitches, optimizing images, improving load speed, and maintaining code health."
    }
  ],

  strengths: [
    {
      title: "Fast Learner",
      icon: "fa-solid fa-bolt",
      color: "#f59e0b",
      description: "I continuously learn new technologies, explore emerging tools, and quickly adapt to project requirements with high enthusiasm."
    },
    {
      title: "Creative Thinker",
      icon: "fa-solid fa-lightbulb",
      color: "#8b5cf6",
      description: "I enjoy creating modern, aesthetic, and eye-catching user interfaces that leave a lasting positive impression."
    },
    {
      title: "Problem Solver",
      icon: "fa-solid fa-puzzle-piece",
      color: "#06b6d4",
      description: "I approach technical and design challenges methodically, writing clean code to solve practical real-world problems."
    },
    {
      title: "Responsive First",
      icon: "fa-solid fa-mobile-screen",
      color: "#10b981",
      description: "I prioritize mobile responsiveness and accessibility from day one, ensuring a flawless experience on all screen sizes."
    },
    {
      title: "Continuous Improvement",
      icon: "fa-solid fa-arrow-trend-up",
      color: "#ec4899",
      description: "I consistently build personal, academic, and open-source projects to refine my engineering capabilities day by day."
    }
  ]
};

// Storage helper keys
const STORAGE_KEYS = {
  DATA: "ayan_portfolio_data_v4",
  MESSAGES: "ayan_portfolio_messages_v1",
  THEME: "ayan_portfolio_theme"
};

/**
 * Initializes and retrieves portfolio data
 */
function getPortfolioData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.DATA);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not read from localStorage, using default data.", e);
  }
  savePortfolioData(DEFAULT_PORTFOLIO_DATA);
  return DEFAULT_PORTFOLIO_DATA;
}

/**
 * Saves entire portfolio data object to LocalStorage
 */
function savePortfolioData(data) {
  try {
    localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(data));
  } catch (e) {
    console.error("Could not save to localStorage.", e);
  }
}

/**
 * Reset portfolio data back to initial defaults
 */
function resetPortfolioData() {
  savePortfolioData(DEFAULT_PORTFOLIO_DATA);
  return DEFAULT_PORTFOLIO_DATA;
}

/**
 * Contact messages storage functions
 */
function getContactMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not read messages from localStorage.", e);
  }
  return [
    {
      id: "msg_sample_1",
      name: "Alex Morgan",
      email: "alex.tech@example.com",
      subject: "Internship Opportunity - Frontend Team",
      message: "Hi Ayan, We reviewed your portfolio and were very impressed with your frontend projects and clean design. We would love to discuss a developer internship role with you!",
      date: "2026-09-10T14:30:00Z",
      read: false
    }
  ];
}

function saveContactMessage(messageObj) {
  const messages = getContactMessages();
  const newMessage = {
    id: "msg_" + Date.now(),
    date: new Date().toISOString(),
    read: false,
    ...messageObj
  };
  messages.unshift(newMessage);
  try {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  } catch (e) {
    console.error("Could not save message to localStorage.", e);
  }
  return newMessage;
}

function deleteContactMessage(id) {
  let messages = getContactMessages();
  messages = messages.filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  return messages;
}

function markMessageAsRead(id, isRead = true) {
  const messages = getContactMessages();
  const target = messages.find(m => m.id === id);
  if (target) {
    target.read = isRead;
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }
  return messages;
}
