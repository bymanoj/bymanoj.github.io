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
    // footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
});

// Render Hero Section
function renderHero() {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    if (title) title.textContent = portfolioConfig.personal.name;
    if (subtitle) subtitle.textContent = `${portfolioConfig.personal.title} • ${portfolioConfig.personal.subtitle}`;
    
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
            <div class="expertise-item reveal">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
    });
    html += '</div>';
    
    // Achievements
    html += `
        <div class="achievements-box reveal">
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
    const mount = document.getElementById('skillsMount');
    if (!mount) return;

    mount.innerHTML = portfolioConfig.skills.categories.map(category => `
      <div class="skills-category">
        <h3>${category.title}</h3>
        <div class="skills-grid">
          ${category.items.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
        </div>
      </div>
    `).join('');
}

// Render Projects Section
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    portfolioConfig.projects.forEach(project => {
        projectsGrid.innerHTML += `
            <article class="project-card reveal">
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
            </article>
        `;
    });
}

// Render Certifications Section
function renderCertifications() {
    const container = document.querySelector('#certifications .container');

    const badgeMap = {
        'Application Architect': '1765861105054_2021-03_Badge_SF-Certified_Application-Architect_High-Res.png',
        'Data Architect': '1765861105055_2021-11_Badge_SF-Certified_Data-Architect_High-Res.png',
        'Sharing and Visibility Architect': '1765861105055_2021-11_Badge_SF-Certified_Sharing-and-Visibility-Architect_High-Res.png',
        'Identity and Access Management Architect': '1765861105054_2021-11_Badge_SF-Certified_ID-and-Access-Mgmt-Architect_High-Res.png',
        'Platform Developer II': '1765861105054_2021-03_Badge_SF-Certified_Platform-Developer-II_High-Res.png',
        'Platform Developer I': '1765861105055_2021-03_Badge_SF-Certified_Platform-Developer-I_High-Res.png',
        'Tableau CRM and Einstein Discovery Consultant': '1765861105055_2021-03_Badge_SF-Certified_Tableau-CRM-and-Einstein-Discovery-Consultant_High-Res.png',
        'OmniStudio Developer': '1765861105054_2021-03_Badge_SF-Certified_OmniStudio-Developer_High-Res.png',
        'Platform App Builder':'badge-ab.png',
        'DevOps Master':'devops.png',
        'Scaled Agile Framework (SAFe) Agile Practitioner':'safe.png',
        'Certified Scrum Master (CSM)':'csm.png',
        'ITIL Foundation V3':'itil.png',
    };

    const badgeCard = (name, extraClass = '') => {
        const file = badgeMap[name];
        const img = file ? `<img class="cert-badge" src="assets/badges/${file}" alt="${name} badge" loading="lazy" />` : '';
        return `
          <div class="cert-card ${extraClass} reveal">
            ${img}
            <h4>${name}</h4>
          </div>
        `;
    };
    
    const html = `
      <header class="section-head reveal">
        <h2 class="section-title">Certifications</h2>
        <p class="section-intro">Architecture depth, delivery discipline — and enough badges to mildly annoy recruiters.</p>
      </header>

      <div class="cert-category">
        <h3>Architect</h3>
        <div class="cert-grid">
          ${portfolioConfig.certifications.architect.map(cert => badgeCard(cert)).join('')}
        </div>
      </div>

      <div class="cert-category">
        <h3>Developer & Consultant</h3>
        <div class="cert-grid">
          ${portfolioConfig.certifications.developer.map(cert => badgeCard(cert)).join('')}
        </div>
      </div>

      <div class="cert-category">
        <h3>Methodology</h3>
        <div class="cert-grid">
          ${portfolioConfig.certifications.methodology.map(cert => badgeCard(cert, 'methodology')).join('')}
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
            <div class="timeline-item reveal">
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
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
