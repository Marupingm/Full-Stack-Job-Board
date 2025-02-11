const { PrismaClient, JobPostStatus } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create South African companies
  const companies = await Promise.all([
    prisma.company.create({
      data: {
        name: "Vodacom Group",
        location: "Johannesburg, Gauteng",
        logo: "https://res.cloudinary.com/dqvgsqwop/image/upload/v1711123245/vodacom_logo_qqhwxd.png",
        website: "https://vodacom.com",
        xAccount: "@vodacom",
        about: "Leading African communications company providing mobile services and digital solutions.",
        user: {
          create: {
            name: "Vodacom Admin",
            email: "admin@vodacom.com",
            userType: "COMPANY",
            stripeCustomerId: "vod_" + Math.random().toString(36).substr(2, 9)
          }
        }
      }
    }),
    prisma.company.create({
      data: {
        name: "Standard Bank",
        location: "Sandton, Gauteng",
        logo: "https://res.cloudinary.com/dqvgsqwop/image/upload/v1711123245/standard_bank_logo_ixkwmf.png",
        website: "https://standardbank.co.za",
        xAccount: "@standardbank",
        about: "Africa's largest bank by assets, providing comprehensive financial services.",
        user: {
          create: {
            name: "Standard Bank Admin",
            email: "admin@standardbank.co.za",
            userType: "COMPANY",
            stripeCustomerId: "sb_" + Math.random().toString(36).substr(2, 9)
          }
        }
      }
    }),
    prisma.company.create({
      data: {
        name: "Takealot",
        location: "Cape Town, Western Cape",
        logo: "https://res.cloudinary.com/dqvgsqwop/image/upload/v1711123245/takealot_logo_kfwxvz.png",
        website: "https://takealot.com",
        xAccount: "@takealot",
        about: "South Africa's leading e-commerce platform.",
        user: {
          create: {
            name: "Takealot Admin",
            email: "admin@takealot.com",
            userType: "COMPANY",
            stripeCustomerId: "ta_" + Math.random().toString(36).substr(2, 9)
          }
        }
      }
    })
  ])

  // Create South African job listings
  const saJobListings = [
    {
      jobTitle: "Senior Software Engineer",
      employmentType: "Full-time",
      location: "Johannesburg, Gauteng (Hybrid)",
      salaryFrom: 800000,  // R800K
      salaryTo: 1200000,   // R1.2M
      jobDescription: `About the Role:
We are seeking a Senior Software Engineer to join our dynamic tech team at Vodacom. You will be responsible for building innovative mobile solutions that impact millions of users across Africa.

Key Responsibilities:
• Lead the development of mobile applications using Java and Kotlin
• Mentor junior developers and conduct code reviews
• Collaborate with product and design teams to deliver high-quality solutions
• Implement best practices for mobile development and testing

Requirements:
• 5+ years of experience in mobile development
• Strong proficiency in Java and Kotlin
• Experience with mobile app architecture and design patterns
• Knowledge of RESTful APIs and mobile security best practices
• Experience with Agile development methodologies

What We Offer:
• Competitive salary package
• Flexible work arrangements
• Opportunity to work on large-scale projects
• Continuous learning and development opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Retirement Fund", "Work From Home Options", "Professional Development"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[0].id // Vodacom
    },
    {
      jobTitle: "Data Scientist",
      employmentType: "Full-time",
      location: "Sandton, Gauteng",
      salaryFrom: 700000,  // R700K
      salaryTo: 1100000,   // R1.1M
      jobDescription: `About the Role:
We are looking for a talented Data Scientist to join Standard Bank's Analytics team. You will help drive our AI and ML initiatives in financial services, working on projects that directly impact our customers and business operations.

Key Responsibilities:
• Develop and implement machine learning models for financial applications
• Analyze large datasets to extract actionable insights
• Create predictive models for risk assessment and fraud detection
• Collaborate with business stakeholders to understand requirements
• Present findings to technical and non-technical audiences

Requirements:
• Masters degree in Data Science, Statistics, or related field
• 3+ years experience in data science or machine learning
• Proficiency in Python, R, and SQL
• Experience with deep learning frameworks (TensorFlow, PyTorch)
• Strong understanding of statistical methods and machine learning algorithms

What We Offer:
• Competitive salary and benefits package
• Access to cutting-edge technology and tools
• Professional development opportunities
• Collaborative and innovative work environment`,
      listingDuration: 30,
      benefits: ["Medical Aid", "13th Cheque", "Study Support", "Gym Membership"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[1].id // Standard Bank
    },
    {
      jobTitle: "Frontend Developer",
      employmentType: "Full-time",
      location: "Cape Town, Western Cape",
      salaryFrom: 500000,  // R500K
      salaryTo: 850000,    // R850K
      jobDescription: `About the Role:
Takealot is seeking a Frontend Developer to join our e-commerce platform team. You will be responsible for building and maintaining user interfaces that millions of South Africans use daily.

Key Responsibilities:
• Develop responsive and accessible web applications using React and Next.js
• Implement new features and maintain existing functionality
• Optimize application performance and loading times
• Collaborate with UX/UI designers to implement pixel-perfect designs
• Write clean, maintainable, and well-documented code

Requirements:
• 3+ years experience in frontend development
• Strong proficiency in React, Next.js, and TypeScript
• Experience with state management solutions (Redux, Context API)
• Knowledge of modern CSS practices and frameworks
• Understanding of web performance optimization

What We Offer:
• Remote work options
• Latest development tools and resources
• Regular team events and knowledge sharing
• Career growth opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Remote Work", "Annual Bonus", "Internet Allowance"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id // Takealot
    },
    {
      jobTitle: "Cloud Solutions Architect",
      employmentType: "Full-time",
      location: "Pretoria, Gauteng",
      salaryFrom: 900000,  // R900K
      salaryTo: 1500000,   // R1.5M
      jobDescription: `About the Role:
Vodacom is seeking an experienced Cloud Solutions Architect to design and implement cloud-native solutions for our telecommunications infrastructure. You will play a key role in our digital transformation journey.

Key Responsibilities:
• Design and implement cloud-native architectures
• Lead technical decision-making for cloud initiatives
• Develop migration strategies for legacy systems
• Ensure security and compliance in cloud solutions
• Mentor teams on cloud best practices

Requirements:
• 7+ years of experience in IT architecture
• Strong experience with AWS, Azure, or GCP
• Knowledge of containerization and orchestration
• Understanding of telecommunications systems
• Relevant cloud certifications (AWS/Azure/GCP)

What We Offer:
• Industry-leading compensation package
• Car and travel allowance
• International exposure
• Leadership development opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Car Allowance", "Performance Bonus", "Remote Work"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[0].id
    },
    {
      jobTitle: "Cyber Security Analyst",
      employmentType: "Full-time",
      location: "Durban, KwaZulu-Natal",
      salaryFrom: 600000,  // R600K
      salaryTo: 950000,    // R950K
      jobDescription: `About the Role:
Standard Bank is looking for a Cyber Security Analyst to join our Information Security team. You will be responsible for protecting our banking infrastructure and customer data from cyber threats.

Key Responsibilities:
• Monitor and analyze security alerts
• Conduct security assessments and audits
• Implement security tools and controls
• Respond to security incidents
• Develop security documentation and procedures

Requirements:
• Bachelor's degree in Computer Science or related field
• 3+ years experience in cyber security
• CISSP, CEH, or equivalent certification
• Experience with SIEM tools and threat hunting
• Knowledge of banking security regulations

What We Offer:
• Comprehensive benefits package
• Professional certification support
• Advanced security training
• Career advancement opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Risk Allowance", "Professional Certifications", "Life Insurance"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[1].id
    },
    {
      jobTitle: "Mobile App Developer",
      employmentType: "Full-time",
      location: "Cape Town, Western Cape",
      salaryFrom: 550000,  // R550K
      salaryTo: 850000,    // R850K
      jobDescription: `About the Role:
Takealot is looking for a Mobile App Developer to join our mobile development team. You will be responsible for developing and maintaining our shopping applications that serve millions of customers.

Key Responsibilities:
• Develop and maintain mobile applications using React Native
• Implement new features and improve existing functionality
• Optimize app performance and user experience
• Write unit tests and integration tests
• Collaborate with the design team on UI/UX improvements

Requirements:
• 3+ years experience in mobile development
• Strong proficiency in React Native and TypeScript
• Experience with state management (Redux/MobX)
• Knowledge of iOS and Android platforms
• Understanding of mobile app architecture

What We Offer:
• Flexible working hours
• Latest mobile devices for testing
• Regular team building events
• Career development opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Share Options", "Flexible Hours", "Remote Work"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id
    },
    {
      jobTitle: "Business Intelligence Analyst",
      employmentType: "Full-time",
      location: "Johannesburg, Gauteng",
      salaryFrom: 500000,  // R500K
      salaryTo: 800000,    // R800K
      jobDescription: `About the Role:
Vodacom is seeking a Business Intelligence Analyst to help transform our data into actionable insights. You will work with various departments to improve decision-making through data analysis.

Key Responsibilities:
• Create and maintain Power BI dashboards and reports
• Analyze complex data sets to identify trends
• Develop and automate reporting solutions
• Collaborate with stakeholders to understand requirements
• Present insights to business leaders

Requirements:
• Bachelor's degree in Business, Analytics, or related field
• 3+ years experience in business intelligence
• Strong proficiency in Power BI and SQL
• Experience with data modeling and ETL processes
• Excellent communication and presentation skills

What We Offer:
• Performance-based bonuses
• Comprehensive training program
• Work-life balance
• Health and wellness benefits`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Performance Bonus", "Training Budget", "Flexible Hours"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[0].id
    },
    {
      jobTitle: "DevOps Engineer",
      employmentType: "Full-time",
      location: "Sandton, Gauteng",
      salaryFrom: 750000,  // R750K
      salaryTo: 1200000,   // R1.2M
      jobDescription: `About the Role:
Standard Bank is looking for a DevOps Engineer to help manage and improve our CI/CD pipelines and cloud infrastructure. You will play a crucial role in our digital transformation journey.

Key Responsibilities:
• Manage and optimize CI/CD pipelines
• Implement infrastructure as code
• Monitor and maintain cloud infrastructure
• Automate deployment processes
• Implement security best practices

Requirements:
• 5+ years experience in DevOps
• Strong knowledge of AWS/Azure/GCP
• Experience with Docker and Kubernetes
• Proficiency in scripting (Python, Bash)
• Knowledge of monitoring tools

What We Offer:
• Competitive salary package
• Remote work options
• Latest DevOps tools
• Professional certifications`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Share Options", "Remote Work", "Training Budget"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[1].id
    },
    {
      jobTitle: "Product Owner",
      employmentType: "Full-time",
      location: "Cape Town, Western Cape",
      salaryFrom: 650000,  // R650K
      salaryTo: 1000000,   // R1M
      jobDescription: `About the Role:
Takealot is seeking an experienced Product Owner to lead our e-commerce platform development. You will be responsible for defining and prioritizing product features that enhance our customer experience.

Key Responsibilities:
• Define and maintain product roadmap
• Write detailed user stories and acceptance criteria
• Collaborate with stakeholders and development teams
• Analyze market trends and user feedback
• Lead sprint planning and retrospectives

Requirements:
• 5+ years experience in product management
• Agile/Scrum certification
• Experience with e-commerce platforms
• Strong analytical and problem-solving skills
• Excellent stakeholder management

What We Offer:
• Performance bonuses
• Remote work flexibility
• Professional development
• Health and wellness benefits`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Performance Bonus", "Remote Work", "Professional Development"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id
    },
    {
      jobTitle: "Quality Assurance Engineer",
      employmentType: "Full-time",
      location: "Port Elizabeth, Eastern Cape",
      salaryFrom: 450000,  // R450K
      salaryTo: 750000,    // R750K
      jobDescription: `About the Role:
Takealot is looking for a Quality Assurance Engineer to ensure the quality of our digital products. You will be responsible for implementing and maintaining our testing processes.

Key Responsibilities:
• Develop and execute test plans
• Create and maintain automated tests
• Perform manual testing when needed
• Report and track bugs
• Collaborate with developers on quality improvements

Requirements:
• 3+ years experience in software testing
• Experience with test automation frameworks
• Knowledge of API testing
• Understanding of Agile methodologies
• Strong attention to detail

What We Offer:
• Study support for certifications
• Flexible working hours
• Remote work options
• Career growth opportunities`,
      listingDuration: 30,
      benefits: ["Medical Aid", "Study Support", "Flexible Hours", "Remote Work Options"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id
    }
  ]

  // Add internship positions
  const internshipListings = [
    {
      jobTitle: "Software Development Intern",
      employmentType: "Internship",
      location: "Cape Town, Western Cape",
      salaryFrom: 8000,  // R8K per month
      salaryTo: 12000,   // R12K per month
      jobDescription: `About the Role:
Takealot is offering an exciting internship opportunity for aspiring software developers. You will work alongside our experienced development team and gain hands-on experience in e-commerce development.

Key Learning Opportunities:
• Full-stack development with modern technologies
• Agile development practices
• Code review and version control
• Testing and debugging
• Collaboration in a professional dev team

Requirements:
• Currently pursuing a degree in Computer Science or related field
• Knowledge of basic programming concepts
• Eager to learn and grow
• Good problem-solving skills
• Basic understanding of web technologies

What We Offer:
• Structured mentorship program
• Real project experience
• Networking opportunities
• Possible full-time conversion
• Learning resources access`,
      listingDuration: 30,
      benefits: ["Internet Allowance", "Training Program", "Flexible Hours", "Transport Allowance"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id
    },
    {
      jobTitle: "Data Analytics Intern",
      employmentType: "Internship",
      location: "Sandton, Gauteng",
      salaryFrom: 10000,  // R10K per month
      salaryTo: 15000,    // R15K per month
      jobDescription: `About the Role:
Standard Bank is seeking a Data Analytics Intern to join our Business Intelligence team. This role offers exposure to real-world data analysis in the banking sector.

Key Learning Opportunities:
• Data analysis and visualization
• SQL and database management
• Business intelligence tools
• Financial data modeling
• Report creation and presentation

Requirements:
• Studying towards a degree in Analytics, Statistics, or related field
• Basic SQL knowledge
• Strong Excel skills
• Analytical mindset
• Good communication skills

What We Offer:
• Structured training program
• Exposure to banking analytics
• Professional certification support
• Networking opportunities
• Modern tools and technologies`,
      listingDuration: 30,
      benefits: ["Transport Allowance", "Meal Allowance", "Training Program", "Certification Support"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[1].id
    }
  ];

  // Add part-time positions
  const partTimeListings = [
    {
      jobTitle: "Weekend Customer Support Specialist",
      employmentType: "Part-time",
      location: "Remote",
      salaryFrom: 15000,  // R15K per month
      salaryTo: 25000,    // R25K per month
      jobDescription: `About the Role:
Vodacom is looking for Weekend Customer Support Specialists to assist our customers during peak hours. This is a perfect opportunity for those seeking flexible work arrangements.

Key Responsibilities:
• Handle customer inquiries via phone and email
• Resolve technical and billing issues
• Update customer records
• Escalate complex issues appropriately
• Maintain high customer satisfaction

Requirements:
• Previous customer service experience
• Excellent communication skills
• Available weekends and public holidays
• Basic technical understanding
• Problem-solving abilities

What We Offer:
• Flexible scheduling
• Work from home
• Comprehensive training
• Performance bonuses
• Career growth opportunities`,
      listingDuration: 30,
      benefits: ["Work From Home", "Performance Bonus", "Training Program", "Internet Allowance"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[0].id
    },
    {
      jobTitle: "Part-Time Content Writer",
      employmentType: "Part-time",
      location: "Hybrid - Cape Town",
      salaryFrom: 12000,  // R12K per month
      salaryTo: 20000,    // R20K per month
      jobDescription: `About the Role:
Takealot is seeking a Part-Time Content Writer to create engaging product descriptions and marketing content. This role offers flexible hours and can be partially remote.

Key Responsibilities:
• Write compelling product descriptions
• Create marketing copy for campaigns
• Maintain content style guidelines
• SEO optimization
• Content quality assurance

Requirements:
• Strong writing skills in English
• SEO knowledge
• Attention to detail
• Available 20 hours per week
• E-commerce experience a plus

What We Offer:
• Flexible work hours
• Hybrid work arrangement
• Regular training
• Performance incentives
• Creative environment`,
      listingDuration: 30,
      benefits: ["Flexible Hours", "Work From Home", "Performance Bonus", "Training Program"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[2].id
    }
  ];

  // Add contract positions
  const contractListings = [
    {
      jobTitle: "Project Manager (6-month contract)",
      employmentType: "Contract",
      location: "Johannesburg, Gauteng",
      salaryFrom: 45000,  // R45K per month
      salaryTo: 65000,    // R65K per month
      jobDescription: `About the Role:
Vodacom requires a Project Manager for a 6-month digital transformation initiative. The role involves leading a cross-functional team to implement new systems.

Key Responsibilities:
• Lead project planning and execution
• Manage stakeholder relationships
• Track project milestones and budgets
• Risk management
• Resource allocation

Requirements:
• 5+ years project management experience
• PMP certification
• Agile methodology expertise
• Strong leadership skills
• Telecommunications experience preferred

What We Offer:
• Competitive contract rate
• Project completion bonus
• Flexible work arrangement
• Professional development
• Contract extension possibility`,
      listingDuration: 30,
      benefits: ["Performance Bonus", "Work From Home", "Training Budget", "Transport Allowance"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[0].id
    },
    {
      jobTitle: "UI/UX Designer (3-month contract)",
      employmentType: "Contract",
      location: "Remote",
      salaryFrom: 35000,  // R35K per month
      salaryTo: 50000,    // R50K per month
      jobDescription: `About the Role:
Standard Bank needs a UI/UX Designer for a 3-month contract to redesign our mobile banking application. This is a fully remote position.

Key Responsibilities:
• Create user interface designs
• Conduct user research
• Develop prototypes
• User testing
• Design system maintenance

Requirements:
• 3+ years UI/UX design experience
• Strong portfolio
• Figma expertise
• Financial sector experience
• User research skills

What We Offer:
• Remote work setup
• Competitive daily rate
• Latest design tools
• Portfolio enhancement
• Contract extension possible`,
      listingDuration: 30,
      benefits: ["Remote Work", "Equipment Allowance", "Training Budget", "Performance Bonus"],
      status: JobPostStatus.ACTIVE,
      companyId: companies[1].id
    }
  ];

  // Create all job listings
  const allListings = [...saJobListings, ...internshipListings, ...partTimeListings, ...contractListings];
  
  for (const job of allListings) {
    await prisma.jobPost.create({
      data: job
    })
  }

  console.log('All job listings seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 