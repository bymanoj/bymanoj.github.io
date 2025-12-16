// Dynamic Portfolio Renderer - Loads data from config.js

document.addEventListener('DOMContentLoaded', function() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderExperience();
    renderContact();
    initAnimations();
});

// Render Hero Section
function renderHero() {
    document.querySelector('.hero-title').textContent = portfolioConfig.personal.title;
    document.querySelector('.hero-subtitle').textContent = portfolioConfig.personal.subtitle;
    
    // Render stats
    const statsContainer = document.querySelector('.hero-stats');
    statsContainer.innerHTML = '';
    portfolioConfig.stats.forEach((stat, index) => {
        statsContainer.innerHTML += `
            <div class="stat" style="animation-delay: ${0.3 + index * 0.2}s">
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `;
    });
    
    // Update resume links
    document.querySelectorAll('a[download]').forEach(link => {
        link.href = portfolioConfig.personal.resumeFile;
    });
}

// Render About Section
function renderAbout() {
    const aboutText = document.querySelector('.about-text');
    
    // Paragraphs
    let html = '';
    portfolioConfig.about.paragraphs.forEach(para => {
        html += `<p>${para}</p>`;
    });
    
    // Expertise Grid
    html += '<div class="expertise-grid">';
    portfolioConfig.about.expertise.forEach(item => {
        html += `
            <div class="expertise-item">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
    });
    html += '</div>';
    
    // Achievements
    html += `
        <div class="achievements-box">
            <h3>Key Achievements</h3>
            <ul class="achievements-list">
    `;
    portfolioConfig.about.achievements.forEach(achievement => {
        html += `<li>${achievement}</li>`;
    });
    html += '</ul></div>';
    
    aboutText.innerHTML = html;
}

// Render Skills Section
function renderSkills() {
    const container = document.querySelector('.container');
    const skillsHTML = `
        <h2 class="section-title">Technical Skills</h2>
        ${portfolioConfig.skills.categories.map(category => `
            <div class="skills-category">
                <h3>${category.title}</h3>
                <div class="skills-grid">
                    ${category.items.map(skill => `
                        <span class="skill-badge">${skill}</span>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
    
    // Insert skills section after about section
    const aboutSection = document.getElementById('about');
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills';
    skillsSection.className = 'section section-alt';
    skillsSection.innerHTML = `<div class="container">${skillsHTML}</div>`;
    aboutSection.after(skillsSection);
    
    // Update navigation
    const navMenu = document.querySelector('.nav-menu');
    const skillsNav = document.createElement('li');
    skillsNav.innerHTML = '<a href="#skills">Skills</a>';
    navMenu.children[1].after(skillsNav);
}

// Render Projects Section
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    portfolioConfig.projects.forEach(project => {
        projectsGrid.innerHTML += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <span class="project-tag">${project.tag}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
                <ul class="project-highlights">
                    ${project.highlights.map(highlight => `
                        <li>${highlight}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
}

// Render Certifications Section
function renderCertifications() {
    const container = document.querySelector('#certifications .container');
    
    const html = `
        <h2 class="section-title">Certifications</h2>
        <p class="section-intro">15 professional certifications: 11 Salesforce + 4 methodology certifications</p>
        
        <div class="cert-category">
            <h3>Architect Certifications</h3>
            <div class="cert-grid">
                ${portfolioConfig.certifications.architect.map(cert => `
                    <div class="cert-card">
                        <h4>${cert}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="cert-category">
            <h3>Developer & Consultant Certifications</h3>
            <div class="cert-grid">
                ${portfolioConfig.certifications.developer.map(cert => `
                    <div class="cert-card">
                        <h4>${cert}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="cert-category">
            <h3>Professional Methodology Certifications</h3>
            <div class="cert-grid">
                ${portfolioConfig.certifications.methodology.map(cert => `
                    <div class="cert-card methodology">
                        <h4>${cert}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render Experience Section
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    
    portfolioConfig.experience.forEach(exp => {
        timeline.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-year">${exp.year}</div>
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="timeline-location">${exp.location}</p>
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    // Industries
    const industryBadges = document.querySelector('.industry-badges');
    industryBadges.innerHTML = '';
    portfolioConfig.industries.forEach(industry => {
        industryBadges.innerHTML += `<span class="industry-badge">${industry}</span>`;
    });
}

// Render Contact Section
function renderContact() {
    document.querySelector('.contact-info').innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
                <h4>Location</h4>
                <p>${portfolioConfig.personal.location}</p>
                <p class="contact-meta">${portfolioConfig.personal.visa}</p>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">💼</div>
            <div>
                <h4>LinkedIn</h4>
                <a href="${portfolioConfig.personal.linkedin}" target="_blank" class="contact-link">${portfolioConfig.personal.linkedinText}</a>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
                <h4>Email</h4>
                <p><a href="mailto:${portfolioConfig.personal.email}">${portfolioConfig.personal.email}</a></p>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
                <h4>Phone</h4>
                <p>${portfolioConfig.personal.phone}</p>
            </div>
        </div>
    `;
    
    // Update LinkedIn link in CTA box
    document.querySelector('.contact-cta-box a').href = portfolioConfig.personal.linkedin;
}

// Initialize Animations
function initAnimations() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.project-card, .cert-card, .expertise-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Active navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}
