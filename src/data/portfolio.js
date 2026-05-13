export const portfolioData = {
  personal: {
    name: 'Sriram R',
    title: 'Full Stack Web Developer',
    subtitle: 'Software Engineer | Building Scalable Web Solutions',
    description: 'Crafting modern, performant web applications with Angular, Node.js, and PostgreSQL',
    location: 'Chennai, India',
    email: 'sriramrajendran.p@gmail.com',
    phone: '+91 9344991998',
  },

  socials: [
    {
      name: 'Email',
      url: 'mailto:sriramrajendran.p@gmail.com',
      icon: 'mail',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sriram25062',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rsriram25062',
      icon: 'linkedin',
    },
  ],

  about: {
    heading: 'Building Scalable Web Apps',
    description:
      'I\'m a Full Stack Developer with 2.5+ years of experience building scalable web applications using Node.js, Angular, and PostgreSQL. Focused on backend architecture, secure APIs, performance optimization.',
    stats: [
      { number: '3', suffix: '+', label: 'Years Experience' },
      { number: '6', suffix: '+', label: 'Enterprise Modules' },
      { number: '20', suffix: '+', label: 'REST APIs Built' },
      { number: '40', suffix: '%', label: 'Performance Boost' },
    ],
  },

  skills: {
    categories: [
      {
        name: 'Frontend',
        skills: ['Angular', 'TypeScript', 'React.js', 'Tailwind CSS', 'Responsive Design', 'Framer Motion'],
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware', 'Socket.io'],
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'Query Optimization', 'Indexing', 'Database Design'],
        color: 'from-pink-500 to-rose-500',
      },
      {
        name: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Node Cron', 'Vercel', 'VS Code', 'Postman', 'Docker', 'Linux'],
        color: 'from-orange-500 to-red-500',
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: 'VOX – Micro Blogging Platform',
      description:
        'A full-stack micro blogging platform with real-time updates, rich text editing, and JWT authentication. Features include user authentication, blog CRUD operations, comments system, and responsive UI.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      liveUrl: 'https://vox-client-steel.vercel.app/',
      githubUrl: 'https://github.com/sriram25062/vox-client',
      githubUrl2: 'https://github.com/sriram25062/vox-server',
      features: ['Real-time notifications', 'Rich text editor', 'User authentication', 'Responsive design'],
    },
    {
      id: 2,
      title: 'Netflix Clone – Streaming Platform',
      description:
        'A modern movie streaming platform featuring TMDB API integration, dynamic movie recommendations, responsive grid layout, and smooth navigation. Built with Angular for optimal performance.',
      tags: ['Angular', 'TMDB API', 'TypeScript', 'Vercel', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      liveUrl: 'https://netflix-clone-app-lac-ten.vercel.app/',
      githubUrl: 'https://github.com/sriram25062/netflix-clone-app',
      features: ['TMDB API integration', 'Movie recommendations', 'Search functionality', 'Responsive design'],
    },
  ],

  experience: [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developing scalable web applications using React and Node.js',
      achievements: [
        'Built 10+ full-stack applications',
        'Optimized database queries reducing load time by 40%',
        'Implemented JWT authentication across 5 projects',
      ],
    },
  ],

  certifications: [
    {
      id: 1,
      title: 'PostgreSQL: Advanced Queries',
      provider: 'LinkedIn Learning',
      date: 'Mar 2025',
      link: 'https://www.linkedin.com/learning/certificates/3a17cb442756deedc076058af26c23022722d166289161534e99e4ea2c73966a',
    },
    {
      id: 2,
      title: 'Angular Essential Training',
      provider: 'LinkedIn Learning',
      date: 'Mar 2025',
      link: 'https://www.linkedin.com/learning/certificates/a9ef2c71b2eeaeb15a117de1f8882f557eb6ef10ca272cfb91b1ce591d9dfd52',
    },
    {
      id: 3,
      title: 'JavaScript Essential Training',
      provider: 'LinkedIn Learning',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/bacbfd5cc0cfce4ada4393d447037b256760598a9ee8d87ad258f91c5d65066a',
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js',
      provider: 'LinkedIn Learning',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/de3448fa3ddf301332b16fcdd4b61ca81909ce169a94a1e1d6d61e3f6f3f9260',
    },
    {
      id: 5,
      title: 'Express API with TypeScript',
      provider: 'LinkedIn Learning',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/aa7c65e2f05f5262d60c4dbddabef304583b49df28f8eaaf6544176c21b35f7a',
    },
    {
      id: 6,
      title: 'Node.js Essential Training',
      provider: 'LinkedIn Learning',
      date: 'Jan 2025',
      link: 'https://www.linkedin.com/learning/certificates/ad421b8465415fa904002d9e7c6d31e23265ef235e261b4c0d87fdc0f82f44e7',
    },
    {
      id: 7,
      title: 'Oracle Java Certification – 1Z0-808',
      provider: 'Udemy',
      date: 'Jan 2023',
      link: 'https://www.udemy.com/certificate/UC-25b4de8d-fb0d-497b-b884-92d4c9650cea/',
    },
    {
      id: 8,
      title: 'Learn Spring Boot in 100 Steps',
      provider: 'Udemy',
      date: 'Jun 2022',
      link: 'https://www.udemy.com/certificate/UC-1741aaa8-ad7e-43bd-8039-c5f8dbd0874c/',
    },
  ],
};
