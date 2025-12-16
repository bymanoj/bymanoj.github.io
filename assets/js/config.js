// Portfolio Configuration - Update this file to change content
const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Manoj Patil",
        title: "Salesforce Solution Architect",
        subtitle: "15+ Years Delivering Enterprise Solutions | Real Estate | Government | Financial Services | Healthcare | UAE",
        location: "Dubai, United Arab Emirates",
        visa: "Valid UAE residence visa until February 2027",
        email: "manoj.dazz@gmail.com",
        phone: "+971-554386164",
        linkedin: "https://www.linkedin.com/in/manojpatil86",
        linkedinText: "linkedin.com/in/manojpatil86",
        resumeFile: "assets/MANOJ_PATIL_CV.pdf"
    },

    // Hero Stats
    stats: [
        { number: "15+", label: "Years Experience" },
        { number: "11", label: "Salesforce Certifications" },
        { number: "4", label: "Methodology Certifications" }
    ],

    // About Section
    about: {
        paragraphs: [
            "Salesforce Solution Architect with 15+ years of experience delivering enterprise-scale digital transformation across Real Estate, Government, Financial Services, and Healthcare sectors in the UAE market.",
            "Currently serving as Technical Architect/Consultant at VRK IT Consulting FZE, contracted to Dubai South Properties, where I architect comprehensive Salesforce solutions modernizing legacy systems and building unified digital platforms that serve 300+ government services.",
            "Certified in 11 Salesforce specializations including Application Architect, Data Architect, and Financial Services Cloud, plus 4 professional methodologies (DevOps Master, SAFe Agile, Scrum Master, ITIL). Recognized for translating complex business requirements into innovative technical solutions with measurable ROI."
        ],
        expertise: [
            {
                title: "Solution Architecture",
                description: "Enterprise-grade architecture design, technical roadmaps, and multi-cloud integration strategies"
            },
            {
                title: "Data Architecture",
                description: "Complex data modeling, migration strategies, and master data management solutions"
            },
            {
                title: "Development",
                description: "Apex, LWC, Visualforce, REST/SOAP APIs, and custom application development"
            },
            {
                title: "Integration",
                description: "Enterprise system integration using MuleSoft, middleware platforms, and custom APIs"
            }
        ],
        achievements: [
            "Received Certificate of Appreciation from His Excellency Mr. Khalifa S. Al Zaffin, Executive Chairman, Dubai South",
            "Achieved 90% Net Promoter Score (NPS) for Experience Cloud portal at major US Bank",
            "Reduced in-person service visits by 80% through unified digital portal serving 300+ services",
            "Improved deployment efficiency by 40% through automated DevOps pipelines",
            "Increased banker efficiency by 50% through Financial Personality Assessment solutions",
            "Earned 6 Star Awards at BMC Software and 2 Excellence Awards at Accenture"
        ]
    },

    // Skills Section
    skills: {
        categories: [
            {
                title: "Salesforce Expertise",
                items: ["Data Cloud", "Financial Services Cloud", "Experience Cloud", "Sales Cloud", "Service Cloud", "CRM Analytics", "DocuSign", "DrawLoop", "HexaBMP"]
            },
            {
                title: "Integration & DevOps",
                items: ["SnapLogic", "REST/SOAP APIs", "Azure DevOps", "Bitbucket", "Jenkins", "Git", "SFDX CI/CD"]
            },
            {
                title: "Development & Design",
                items: ["Apex", "LWC", "Visualforce", "JavaScript", "HTML", "CSS", "SOQL", "SOSL", "Data Modelling", "Security"]
            },
            {
                title: "Leadership & Delivery",
                items: ["Solution Design", "Team Leadership (4–30 members)", "Stakeholder Management", "Risk Mitigation"]
            },
            {
                title: "Methodologies",
                items: ["DevOps Master", "Scaled Agile Framework", "Scrum Master", "ITIL Foundation"]
            }
        ]
    },

    // Projects
    projects: [
        {
            title: "Dubai South Properties Digital Transformation",
            tag: "Real Estate & Government",
            description: "Architected comprehensive digital transformation modernizing legacy Salesforce Classic applications across Real Estate, Freezone, Logistics, Licensing, and Aviation departments for Dubai South Properties.",
            technologies: ["Experience Cloud", "LWR", "Lightning Web Components", "DocuSign", "API Integration"],
            highlights: [
                "Built unified Experience Cloud portal transitioning 300+ manual services to digital, reducing in-person visits by 80%",
                "Developed UBO Relationship Tree - interactive visual ownership compliance module with modal-based KYC operations",
                "Engineered token reservation and intelligent scheduling systems, eliminating third-party licensing costs",
                "Led integrations with GDRFA, CID, and EPI for cross-government process automation"
            ]
        },
        {
            title: "Major US Bank - Financial Services Cloud Transformation",
            tag: "Financial Services",
            description: "Led enterprise transformation from Microsoft Dynamics CRM to Salesforce Financial Services Cloud for major US Bank, improving personalized banking journeys and managing cross-functional team of 22 members.",
            technologies: ["Financial Services Cloud", "Azure DevOps", "SFDX", "Lead Management", "Compliance"],
            highlights: [
                "Designed Financial Personality Assessment, Lead Management, and Colleague Desktop boosting banker efficiency by 50%",
                "Implemented comprehensive audit framework with 15+ flows and 500+ pathways for customer data change tracking",
                "Built robust DevOps pipeline using Azure DevOps and SFDX for cross-departmental releases",
                "Drove solution workshops and accelerated module delivery across multiple teams"
            ]
        },
        {
            title: "US Bank Subsidiary - Experience Cloud Rewards Platform",
            tag: "Customer Engagement",
            description: "Served as Project Lead and Architect overseeing 30 resources across four teams, architecting Rewards and Redemption portal integrating Salesforce, Heroku, PostgreSQL, and Informatica.",
            technologies: ["Experience Cloud", "Heroku", "PostgreSQL", "Azure VSTS", "CI/CD"],
            highlights: [
                "Achieved 90%+ Net Promoter Score within first year post-launch",
                "Designed Rewards Redemption, Community Forums, Knowledge Base, SSO, and SMS/CSAT integration modules",
                "Implemented CI/CD pipeline using Azure VSTS and SFDX reducing deployment time",
                "Earned two Accenture Excellence Awards for project success and innovation"
            ]
        },
        {
            title: "UnitedHealth Group - Contact Center Transformation",
            tag: "Healthcare",
            description: "Consolidated multiple high-volume contact centers into unified Service Cloud application for UnitedHealth Group, implementing Health Cloud and OmniStudio solutions for enhanced security and compliance.",
            technologies: ["Health Cloud", "Service Cloud", "OmniStudio", "Service Cloud Voice", "Amazon Connect"],
            highlights: [
                "Developed caller validation application using OmniStudio for enhanced security",
                "Implemented Service Cloud Voice integration with Amazon Connect for omnichannel experience",
                "Consolidated multiple contact centers into single unified platform",
                "Ensured HIPAA compliance and data security across all touchpoints"
            ]
        },
        {
            title: "BMC Software - Service Cloud & CPQ Implementation",
            tag: "Enterprise Software",
            description: "Led Service Cloud migration from BMC Remedy providing 360-degree customer visibility, CPQ Deal Scorecard, and CRM Analytics implementation for enterprise software leader.",
            technologies: ["Service Cloud", "CPQ", "CRM Analytics", "SnapLogic", "Coveo"],
            highlights: [
                "Boosted Customer Satisfaction (CSAT) to 4.2/5 through 360-degree customer visibility",
                "Built CPQ Deal Scorecard and Approval Management optimizing sales deal cycles",
                "Integrated Coveo search engine enhancing self-service knowledge base capabilities",
                "Migrated 100K+ knowledge base articles using SnapLogic from multiple legacy systems"
            ]
        }
    ],

    // Certifications
    certifications: {
        architect: [
            "Application Architect",
            "Data Architect",
            "Sharing and Visibility Architect",
            "Identity and Access Management Architect"
        ],
        developer: [
            "Platform Developer II",
            "Platform Developer I",
            "Platform App Builder",
            "Financial Services Cloud Accredited Consultant",
            "Tableau CRM and Einstein Discovery Consultant",
            "OmniStudio Developer",
            "AI Associate"
        ],
        methodology: [
            "DevOps Master",
            "Scaled Agile Framework (SAFe) Agile Practitioner",
            "Certified Scrum Master (CSM)",
            "ITIL Foundation V3"
        ]
    },

    // Experience
    experience: [
        {
            year: "2023 - Present",
            title: "Technical Architect / Consultant",
            company: "VRK IT Consulting FZE (Contract: Dubai South Properties)",
            location: "Dubai, UAE",
            responsibilities: [
                "Architecting enterprise Salesforce solutions for real estate and government operations",
                "Leading Experience Cloud portal serving 300+ digital services",
                "Designing complex data models and cross-government integrations",
                "Mentoring development teams on scalable design patterns"
            ]
        },
        {
            year: "2022 - 2023",
            title: "Technology Architect",
            company: "Virtusa Pvt Ltd",
            location: "Global Leadership Team",
            responsibilities: [
                "Salesforce Capability Global Leadership managing vendor partnerships",
                "Led RFP responses and solution prototypes for client acquisitions",
                "Delivered Health Cloud contact center transformation for UnitedHealth Group",
                "Conceptualized ESG Health Analytics for wealth management"
            ]
        },
        {
            year: "2018 - 2022",
            title: "Application Development Associate Manager",
            company: "Accenture Solutions Pvt Ltd",
            location: "Major US Bank Projects",
            responsibilities: [
                "Led Financial Services Cloud transformation managing 22-member team",
                "Architected Experience Cloud Rewards Platform overseeing 30 resources",
                "Achieved 90%+ NPS earning two Excellence Awards",
                "Built robust DevOps pipelines improving deployment efficiency 40%"
            ]
        },
        {
            year: "2013 - 2018",
            title: "Staff Application Developer",
            company: "BMC Software India Pvt Ltd",
            location: "Enterprise Software",
            responsibilities: [
                "Led Service Cloud migration from BMC Remedy achieving 4.2/5 CSAT",
                "Built CPQ Deal Scorecard optimizing sales operations",
                "Pioneered CRM Analytics for account health tracking",
                "Earned 6 Star Awards and runner-up in company hackathon"
            ]
        },
        {
            year: "2010 - 2013",
            title: "Senior Engineer",
            company: "Emergys Labs Private Limited",
            location: "Customer Service Applications",
            responsibilities: [
                "Maintained One3 Customer Service Remedy Application",
                "Delivered enhancements and support for BMC customers",
                "Managed server maintenance and quality management systems"
            ]
        }
    ],

    // Industries
    industries: ["Real Estate", "Government", "Financial Services", "Healthcare", "Enterprise Software"]
};
