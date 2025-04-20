# Full-Stack Job Board

A modern, feature-rich job board platform built with Next.js, Prisma, and TypeScript. This application connects employers and job seekers through an intuitive interface for posting jobs, searching opportunities, and managing applications.


## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration with Next Auth
- **Role-Based Access**: Different interfaces for job seekers, employers, and admins
- **Job Management**: Post, edit, and manage job listings with rich text editing
- **Advanced Search**: Filter jobs by various parameters including location and skills
- **Application Tracking**: Monitor application status and history
- **User Profiles**: Comprehensive profiles for both employers and job seekers
- **Payment Integration**: Stripe integration for premium listings and features
- **Responsive Design**: Fully responsive UI that works on all devices
- **Dark/Light Mode**: Theme support for different user preferences
- **Notification System**: Email and in-app notifications for important events

## Folder Structure

```
├── app/                  # Next.js app directory (App Router)
│   ├── (mainLayout)/     # Main application layout and pages
│   ├── api/              # API routes for backend functionality
│   ├── login/            # Authentication related pages
│   ├── onboarding/       # User onboarding flow
│   ├── payment/          # Payment processing pages
│   └── utils/            # Utility functions for the frontend
├── components/           # Reusable UI components
├── lib/                  # Shared library code, helpers, and utilities
├── prisma/               # Database schema and seeding scripts
│   ├── schema.prisma     # Prisma database schema
│   └── seed.ts           # Database seeding script
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Marupingm/Full-Stack-Job-Board.git
   cd Full-Stack-Job-Board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="your-database-connection-string"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   ```

4. Initialize the database:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

### For Job Seekers

1. Create an account and complete your profile
2. Browse job listings using the search and filter options
3. Apply for jobs by submitting your resume and cover letter
4. Track your application status in your dashboard

### For Employers

1. Register as an employer and set up your company profile
2. Create job listings with detailed descriptions using the rich text editor
3. Review applications and manage candidates
4. Upgrade to premium features to promote listings or access analytics

### Admin Dashboard

```bash
# Access the admin dashboard at:
http://localhost:3000/admin

# Default admin credentials (for development only):
Email: admin@example.com
Password: adminpassword
```

## Technologies

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - TailwindCSS for styling
  - Radix UI for accessible components
  - Framer Motion for animations
  - React Hook Form for form handling
  - Zod for validation

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - NextAuth for authentication
  - Stripe for payment processing
  - Uploadthing for file uploads

- **Database**:
  - PostgreSQL (production)
  - MongoDB (optional)

- **Deployment**:
  - Vercel (recommended)

## Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Marupingm - [GitHub](https://github.com/Marupingm)

Project Link: [https://github.com/Marupingm/Full-Stack-Job-Board](https://github.com/Marupingm/Full-Stack-Job-Board)

---

Made with ❤️ by Marupingm