/**
 * Ayan Nathani Portfolio - Core Interactive Controller
 * Handles theme toggling, dynamic data rendering, filters, animations, modals, and contact form validation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme
  initTheme();

  // 2. Initialize Navigation & Mobile Drawer
  initNavigation();

  // 3. Initialize Typewriter Animation
  initTypewriter();

  // 4. Load & Render Dynamic Content from data.js
  renderPortfolioContent();

  // 5. Initialize Interactive Animations & Counters
  initNumberCounters();

  // 6. Initialize Contact Form & Modals
  initContactForm();
  initModals();
});

/* ==========================================
   1. THEME MANAGER (DARK / LIGHT)
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (icon) {
    if (theme === 'light') {
      icon.className = 'fa-solid fa-moon';
    } else {
      icon.className = 'fa-solid fa-sun';
    }
  }
}

/* ==========================================
   2. NAVBAR & NAVIGATION
   ========================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Navbar blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavOnScroll();
  });

  // Mobile drawer triggers
  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // Close drawer when link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const matchingLinks = document.querySelectorAll(`.nav-link[href*="${sectionId}"], .mobile-nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      matchingLinks.forEach(link => link.classList.add('active'));
    } else {
      matchingLinks.forEach(link => link.classList.remove('active'));
    }
  });
}

/* ==========================================
   3. TYPEWRITER EFFECT
   ========================================== */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter-text');
  if (!typewriterElem) return;

  const roles = [
    "Frontend Web Developer",
    "3rd Semester Diploma Student",
    "UI/UX Enthusiast",
    "Future Full-Stack Developer",
    "Passionate Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================
   4. RENDER PORTFOLIO CONTENT (FROM DATA.JS)
   ========================================== */
function renderPortfolioContent() {
  const data = getPortfolioData();

  // Render Stats
  renderStats(data.personal.stats);

  // Render Skills
  renderSkills(data.skills);

  // Render Internships
  renderInternships(data.internships);

  // Render Projects
  renderProjects(data.projects);

  // Render Education & Certificates
  renderEducation(data.education);
  renderCertificates(data.certificates);

  // Render Services
  renderServices(data.services);

  // Render Strengths
  renderStrengths(data.strengths);
}

function renderStats(stats) {
  const container = document.getElementById('stats-container');
  if (!container || !stats) return;

  container.innerHTML = `
    <div class="glass-card stat-card" data-tilt>
      <div class="stat-icon"><i class="fa-solid fa-briefcase"></i></div>
      <div class="stat-number" data-target="2">2+</div>
      <div class="stat-label">Internships Completed</div>
    </div>
    <div class="glass-card stat-card" data-tilt>
      <div class="stat-icon"><i class="fa-solid fa-graduation-cap"></i></div>
      <div class="stat-number" data-target="3">3rd</div>
      <div class="stat-label">Current Semester</div>
    </div>
    <div class="glass-card stat-card" data-tilt>
      <div class="stat-icon"><i class="fa-solid fa-code"></i></div>
      <div class="stat-number" data-target="5">5+</div>
      <div class="stat-label">Projects Built</div>
    </div>
    <div class="glass-card stat-card" data-tilt>
      <div class="stat-icon"><i class="fa-solid fa-fire"></i></div>
      <div class="stat-number" data-target="100">100%</div>
      <div class="stat-label">Passion for Learning</div>
    </div>
  `;
}

function renderSkills(skills, categoryFilter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const filtered = categoryFilter === 'all' 
    ? skills 
    : skills.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());

  container.innerHTML = filtered.map(skill => `
    <div class="glass-card skill-card" data-tilt>
      <div class="skill-header">
        <div class="skill-info">
          <div class="skill-icon-wrap" style="color: ${skill.color || 'var(--accent-cyan)'};">
            <i class="${skill.icon}"></i>
          </div>
          <div>
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-category-badge">${skill.category}</span>
          </div>
        </div>
        <span class="skill-percent">${skill.level}%</span>
      </div>
      <div class="skill-progress-bar">
        <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
      </div>
    </div>
  `).join('');

  // Re-bind tilt effect
  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderInternships(internships) {
  const container = document.getElementById('internships-container');
  if (!container || !internships) return;

  container.innerHTML = internships.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="glass-card timeline-card" data-tilt>
        <div class="timeline-card-header">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-company">${item.company}</span>
          </div>
          <span class="timeline-duration"><i class="fa-regular fa-calendar"></i> ${item.duration}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-highlights">
          ${(item.highlights || []).map(hl => `<li>${hl}</li>`).join('')}
        </ul>
        <div class="tech-badges-row" style="margin-bottom: 1.25rem;">
          ${(item.technologies || []).map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
        <div>
          <button class="btn btn-outline btn-sm" onclick="openCertificateModal('${item.company} Internship')">
            <i class="fa-solid fa-award"></i> View Certificate
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderProjects(projects, categoryFilter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  const filtered = categoryFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (categoryFilter.toLowerCase() === 'web development') return p.category.toLowerCase().includes('web');
        if (categoryFilter.toLowerCase() === 'javascript') return p.technologies.some(t => t.toLowerCase().includes('javascript')) || p.category.toLowerCase().includes('javascript');
        if (categoryFilter.toLowerCase() === 'ui/ux') return p.category.toLowerCase().includes('ui') || p.technologies.some(t => t.toLowerCase().includes('figma'));
        return true;
      });

  container.innerHTML = filtered.map(proj => `
    <div class="glass-card project-card" data-tilt>
      <div class="project-thumbnail-wrap">
        <svg class="project-thumbnail" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-${proj.id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0f172a"/>
              <stop offset="50%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad-${proj.id})"/>
          <circle cx="200" cy="90" r="45" fill="rgba(99, 102, 241, 0.15)"/>
          <path d="M185 80 L175 90 L185 100 M215 80 L225 90 L215 100 M205 75 L195 105" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
          <text x="200" y="160" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="16" font-weight="700" text-anchor="middle">${proj.title}</text>
          <text x="200" y="185" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" text-anchor="middle">Interactive Showcase</text>
        </svg>
        <span class="project-category-tag">${proj.category}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tech-stack">
          ${proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <div class="project-action-links">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
            <a href="${proj.liveUrl}" class="project-link-btn" onclick="openProjectModal('${proj.id}'); return false;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          </div>
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${proj.id}')">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderEducation(education) {
  const container = document.getElementById('education-container');
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="glass-card edu-card" data-tilt>
      <div class="timeline-card-header">
        <div>
          <h3 class="timeline-role">${edu.degree}</h3>
          <span class="timeline-company">${edu.institution}</span>
        </div>
        <span class="timeline-duration"><i class="fa-regular fa-clock"></i> ${edu.duration}</span>
      </div>
      <div style="margin: 0.5rem 0;">
        <span class="tech-badge" style="background: var(--gradient-glow); color: var(--accent-cyan);">${edu.semester}</span>
        <span class="tech-badge" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald);">${edu.status}</span>
      </div>
      <p class="timeline-desc">${edu.description}</p>
      <ul class="timeline-highlights">
        ${(edu.achievements || []).map(ach => `<li>${ach}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderCertificates(certificates) {
  const container = document.getElementById('certificates-container');
  if (!container || !certificates) return;

  container.innerHTML = certificates.map(cert => `
    <div class="glass-card cert-item-card" data-tilt>
      <div class="cert-icon-wrap">
        <i class="${cert.icon}"></i>
      </div>
      <div class="cert-content">
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-meta">
          <span class="issuer"><i class="fa-solid fa-building-columns"></i> ${cert.issuer}</span>
          <span><i class="fa-regular fa-calendar-check"></i> ${cert.date}</span>
        </div>
        <p class="timeline-desc" style="margin-bottom: 0.75rem; font-size: 0.88rem;">${cert.description}</p>
        <button class="btn btn-outline btn-sm" onclick="openCertificateModal('${cert.title}', '${cert.issuer}', '${cert.date}')">
          <i class="fa-solid fa-eye"></i> View Certificate
        </button>
      </div>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container || !services) return;

  container.innerHTML = services.map(service => `
    <div class="glass-card service-card" data-tilt>
      <div class="service-icon-box" style="color: ${service.color || 'var(--accent-cyan)'};">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

function renderStrengths(strengths) {
  const container = document.getElementById('strengths-container');
  if (!container || !strengths) return;

  container.innerHTML = strengths.map(str => `
    <div class="glass-card strength-card" data-tilt>
      <div class="strength-icon" style="color: ${str.color || 'var(--accent-cyan)'};">
        <i class="${str.icon}"></i>
      </div>
      <h4 class="strength-title">${str.title}</h4>
      <p class="strength-desc">${str.description}</p>
    </div>
  `).join('');

  if (typeof initTiltEffect === 'function') initTiltEffect();
}

/* ==========================================
   5. FILTER TABS HANDLER (SKILLS & PROJECTS)
   ========================================== */
window.filterSkills = function(category, btnElement) {
  document.querySelectorAll('#skills-filter-tabs .filter-tab').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  const data = getPortfolioData();
  renderSkills(data.skills, category);
};

window.filterProjects = function(category, btnElement) {
  document.querySelectorAll('#projects-filter-tabs .filter-tab').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  const data = getPortfolioData();
  renderProjects(data.projects, category);
};

/* ==========================================
   6. NUMBER COUNTER ANIMATION
   ========================================== */
function initNumberCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const text = counter.innerText;
          const target = parseInt(counter.getAttribute('data-target'), 10) || parseInt(text, 10);
          const suffix = text.replace(/[0-9]/g, '');
          let count = 0;
          const duration = 1200;
          const stepTime = Math.abs(Math.floor(duration / (target || 10)));

          const timer = setInterval(() => {
            count += Math.ceil(target / 20) || 1;
            if (count >= target) {
              counter.innerText = target + suffix;
              clearInterval(timer);
            } else {
              counter.innerText = count + suffix;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.getElementById('about');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================
   7. CONTACT FORM VALIDATION & PERSISTENCE
   ========================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let isValid = true;

    // Reset previous errors
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (input) {
        input.classList.remove('error');
        const err = input.nextElementSibling;
        if (err && err.classList.contains('error-text')) err.classList.remove('active');
      }
    });

    // Validate Name
    if (!nameInput.value.trim()) {
      showInputError(nameInput, "Please enter your name");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showInputError(emailInput, "Please enter a valid email address");
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showInputError(subjectInput, "Please enter a subject");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showInputError(messageInput, "Message must be at least 10 characters long");
      isValid = false;
    }

    if (isValid) {
      // Save to LocalStorage messages
      saveContactMessage({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim()
      });

      // Show confirmation toast
      showToast("Message sent successfully! Ayan will get back to you soon.", "success");
      form.reset();
    }
  });
}

function showInputError(input, message) {
  input.classList.add('error');
  const err = input.nextElementSibling;
  if (err && err.classList.contains('error-text')) {
    err.textContent = message;
    err.classList.add('active');
  }
}

/* ==========================================
   8. MODALS (RESUME, CERTIFICATES, PROJECTS)
   ========================================== */
function initModals() {
  const modalOverlay = document.getElementById('global-modal-overlay');
  const modalCloseBtn = document.getElementById('global-modal-close');

  if (modalOverlay && modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

window.openModal = function(title, htmlContent) {
  const modalOverlay = document.getElementById('global-modal-overlay');
  const modalTitle = document.getElementById('global-modal-title');
  const modalBody = document.getElementById('global-modal-body');

  if (!modalOverlay || !modalTitle || !modalBody) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = htmlContent;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openResumeModal = function() {
  const data = getPortfolioData();
  const html = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div class="brand-badge" style="margin: 0 auto 1rem auto; width: 48px; height: 48px; font-size: 1.25rem;">AN</div>
      <h3 style="font-family: var(--font-main); font-size: 1.5rem; margin-bottom: 0.25rem;">${data.personal.name}</h3>
      <p style="color: var(--accent-cyan); font-family: var(--font-code); font-size: 0.9rem;">${data.personal.tagline}</p>
    </div>
    
    <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.7;">
      <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-family: var(--font-main);"><i class="fa-solid fa-user-graduate" style="color: var(--accent-cyan);"></i> Summary</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">${data.personal.aboutBio}</p>
      
      <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-family: var(--font-main);"><i class="fa-solid fa-code" style="color: var(--accent-indigo);"></i> Core Highlights</h4>
      <ul style="color: var(--text-secondary); padding-left: 1.25rem; margin-bottom: 1rem;">
        <li>Completed 2+ hands-on web development internships.</li>
        <li>Proficient in HTML5, CSS3, Modern JavaScript (ES6+), Tailwind CSS, Figma & Git.</li>
        <li>Strong grasp of data structures, OOP (Java/C), and SQL database fundamentals.</li>
      </ul>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="tech-badge"><i class="fa-solid fa-envelope"></i> ${data.personal.email}</span>
        <span class="tech-badge"><i class="fa-solid fa-location-dot"></i> ${data.personal.location}</span>
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="resume/resume.pdf" download="Ayan_Nathani_Resume.pdf" class="btn btn-primary" onclick="showToast('Downloading resume...', 'info')">
        <i class="fa-solid fa-file-arrow-down"></i> Download PDF
      </a>
      <button class="btn btn-secondary" onclick="document.getElementById('global-modal-overlay').classList.remove('active'); document.body.style.overflow = '';">
        Close
      </button>
    </div>
  `;
  openModal("Curriculum Vitae / Resume Preview", html);
};

window.openCertificateModal = function(title = "Certificate of Completion", issuer = "Technical Institute", date = "2025") {
  const html = `
    <div style="text-align: center; padding: 1rem;">
      <div style="border: 2px dashed var(--accent-cyan); border-radius: var(--radius-lg); padding: 2.5rem 1.5rem; background: var(--bg-tertiary); margin-bottom: 1.5rem;">
        <div style="font-size: 3rem; color: var(--accent-amber); margin-bottom: 1rem;"><i class="fa-solid fa-award"></i></div>
        <h3 style="font-family: var(--font-main); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">${title}</h3>
        <p style="color: var(--text-secondary); font-size: 1rem; margin-bottom: 0.75rem;">Presented to <strong style="color: var(--accent-cyan);">Ayan Nathani</strong></p>
        <p style="font-size: 0.9rem; color: var(--text-muted); font-family: var(--font-code);">Issued by: ${issuer} • ${date}</p>
        <div style="margin-top: 1.25rem;">
          <span class="tech-badge" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald);">
            <i class="fa-solid fa-circle-check"></i> Verified Credential
          </span>
        </div>
      </div>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem;">You can replace this preview with actual scanned certificates in the <code>assets/certificates/</code> folder.</p>
      <button class="btn btn-primary" onclick="document.getElementById('global-modal-overlay').classList.remove('active'); document.body.style.overflow = '';">
        Close Preview
      </button>
    </div>
  `;
  openModal("Certificate Credential Verification", html);
};

window.openProjectModal = function(projectId) {
  const data = getPortfolioData();
  const proj = data.projects.find(p => p.id === projectId) || data.projects[0];

  const html = `
    <div>
      <h3 style="font-family: var(--font-main); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">${proj.title}</h3>
      <span class="tech-badge" style="background: var(--gradient-glow); color: var(--accent-cyan); margin-bottom: 1rem; display: inline-block;">${proj.category}</span>
      
      <p style="color: var(--text-secondary); font-size: 0.98rem; line-height: 1.7; margin-bottom: 1.25rem;">
        ${proj.details || proj.description}
      </p>

      <h4 style="font-family: var(--font-main); font-size: 1rem; color: var(--text-primary); margin-bottom: 0.5rem;">Technologies Used:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem;">
        ${proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fa-brands fa-github"></i> GitHub Repository
        </a>
        <a href="${proj.liveUrl}" target="_blank" class="btn btn-primary" onclick="showToast('Live preview is simulated in this build', 'info')">
          <i class="fa-solid fa-globe"></i> Visit Live Demo
        </a>
      </div>
    </div>
  `;
  openModal(`Project Overview: ${proj.title}`, html);
};

/* ==========================================
   9. TOAST NOTIFICATION UTILITY
   ========================================== */
function showToast(message, type = "info") {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconClass = 'fa-solid fa-circle-check';
  if (type === 'info') iconClass = 'fa-solid fa-circle-info';
  if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';

  toast.innerHTML = `
    <i class="${iconClass}" style="color: ${type === 'error' ? 'var(--accent-rose)' : 'var(--accent-cyan)'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
