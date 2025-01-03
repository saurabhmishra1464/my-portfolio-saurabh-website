import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Saurabh Mishra",
  title: "Hi all, I'm Saurabh Mishra",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Reactjs, Nextjs, .NET and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "saurabhmishra1464",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:saurabhmishra1464@gmail.com",
  linkedin: "https://www.linkedin.com/in/saurabh-mishra-552716153/",
  github: "https://github.com/saurabhmishra1464",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in C# & .Net Framework"),
      ],
      softwareSkills: [

        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:azure",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "NET",
          iconifyTag: "simple-icons:dotnet",
        },
        {
          skillName: "Microsoft SQL Server",
          iconifyTag: "simple-icons:microsoftsqlserver",
        },
        {
          skillName: "Redux Toolkit",
          iconifyTag: "simple-icons:redux",
        },
        {
          skillName: "RabbitMQ",
          iconifyTag: "simple-icons:rabbitmq",
        },
        {
          "skillName": "HttpOnly Cookies",
          "iconifyTag": "mdi:lock"
        },
        {
          "skillName": "REST API",
          "iconifyTag": "simple-icons:api"
        },
        {
          "skillName": "Serilog",
          "iconifyTag": "mdi:cog"
        },
        {
          "skillName": "Microservices",
          "iconifyTag": "mdi:server"
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "50", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Maharishi Markandeshwar University, Mullana",
    subHeader: "B.Tech Specialization in Software Development",
    duration: "july 2017 - April 2021",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Associate Level II",
    company: "SmartData EnterPrises",
    companyLogo: "/img/icons/common/smartdataenterprises.jpeg",
    date: "January 2022 - March 2023",
    desc: "As a Software Associate Level II, I led the development of an Azure Bot for recording Microsoft Teams meetings, leveraging Azure Cognitive Services, Microsoft Graph API, and Bot Framework SDK to enhance collaboration efficiency. I deployed scalable services on Azure Kubernetes Service (AKS), ensuring high availability and streamlined load balancing. Additionally, I spearheaded the migration of legacy systems to a modern microservices architecture, reducing infrastructure costs and improving maintainability. My role required close collaboration with cross-functional teams, including QA and UI/UX, to deliver user-centered software solutions that exceeded client expectations. ",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Engineer Consultant",
    company: "Ariel Software Solutions",
    companyLogo: "/img/icons/common/Ariel.png",
    date: "October 2023 - March 2024",
    desc: "As a Software Engineer Consultant, I developed and optimized interactive web applications using React, Tailwind CSS, and .NET Core, ensuring responsive designs and enhanced user engagement. I streamlined API performance by refining SQL queries and implementing advanced caching techniques, which significantly reduced response times and improved scalability. Additionally, I architected reusable React components to boost development efficiency and maintain consistent UI/UX across projects. My role also involved integrating third-party APIs for dynamic data visualization and establishing secure user authentication protocols using JWT tokens to enhance data security.",
  },
  {
    role: "Full-Stack Developer (Entrepreneurial Project)",
    company: "NanhiDuniya",
    companyLogo: "/img/icons/common/NanhiDuniya.jpeg",
    date: "March 2024 - Present",
    desc: "I architected and developed a scalable school management system with advanced features for attendance tracking, user role management, and modular design. The platform was built using ReactJS and .NET Core, leveraging a microservices architecture for scalability and maintainability. I implemented JWT-based authentication with role-based access control, developed a biometric authentication system for attendance tracking, and optimized SQL queries to enhance performance. The system also features centralized exception handling middleware and a responsive UI designed with ReactJS and TailwindCSS.",
  },

  {
    role: "Full-Stack Developer (Entrepreneurial Project)",
    company: "Revisify",
    companyLogo: "",
    date: "March 2024 - Present",
    desc: "I conceptualized and developed a web application designed to assist users in revising multiple subjects through personalized daily quizzes. The application features automated email delivery, scoring, feedback, and study resources to optimize user performance. I designed a responsive UI/UX using React and Tailwind CSS, developed RESTful APIs with .NET Core, and implemented a robust data management system using SQL Server. The application also includes a dynamic scoring and feedback module, automated email notifications via SendGrid, and a content recommendation system linking YouTube tutorials based on user performance metrics.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Developer Portfolio is a comprehensive software developer portfolio template built using React.js and Next.js. This template is designed to effectively showcase my work and skills, providing a visually appealing and user-friendly interface.By leveraging the powerful capabilities of React and Next.js.",
    github: "https://github.com/saurabhmishra1464",
    link: "#",
  },
  {
    name: "NanhiDuniya UserManagement Api",
    desc: "The NanhiDuniya User Management API ensures secure user authentication by utilizing JWT tokens stored in HTTP-only cookies, safeguarding against XSS attacks. This API is designed to handle various user management functions, including user registration, profile management, password recovery, and role-based access control.The system leverages RabbitMQ for the asynchronous processing of background tasks such as sending emails, ensuring seamless and scalable communication between services. It’s built with robust security measures and offers efficient handling of critical user operations.",
    github: "https://github.com/saurabhmishra1464/NanhiDuniya",
    link: "https://nanhiduniyaauthapi.saurabhmishra.org/index.html",
  },
  {
    name: "NanhiDuniya Frontend",
    desc: "The NanhiDuniya frontend, built with React.js and Next.js, utilizes Redux Toolkit and Redux Query for state management, incorporates Tailwind CSS for styling, and employs Zod for validation, along with loading skeletons for enhanced user experience.",
    github: "https://github.com/saurabhmishra1464/NanhiDuniya/tree/main/NanhiDuniya-Frontend/nanhiduniya-client",
    link: "https://nanhiduniyafrontend.saurabhmishra.org",
  },
  {
    name: "NanhiDuniya Email Api",
    desc: "The NanhiDuniya Email API enables efficient email communication, utilizing RabbitMQ for asynchronous processing, customizable templates, and tracking capabilities for user engagement.",
    github: "https://github.com/saurabhmishra1464/NanhiDuniya/tree/main/NanhiDuniya.Services.EmailApi",
    link: "#",
  },

  {
    name: "Revisify Frontend",
    desc: "Designed a responsive UI/UX using React and TailwindCSS, enabling seamless navigation and daily quiz interactions. Integrated dynamic scoring and personalized feedback to enhance user engagement.",
    github: "https://github.com/saurabhmishra1464/Revisify",
    link: "#",
  },

  {
    name: "Revisify Backened",
    desc: "I developed a scalable backend using .NET Core, enabling personalized daily quizzes with automated email notifications via SendGrid. The system supports dynamic scoring, feedback generation, and a content recommendation module linking YouTube tutorials based on user performance. ",
    github: "https://github.com/saurabhmishra1464/RevisifyBackened",
    link: "#",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Saurabh Mishra",
  description: greetings.description,
  author: "Saurabh Mishra",
  image: "https://avatars.githubusercontent.com/u/144934155?v=4",
  url: "https://portfolio-saurabh-mishra.vercel.app/",
  keywords: [
    "Saurabh",
    "Saurabh Mishra",
    "saurabhmishra1464",
    "Portfolio",
    "Saurabh Portfolio ",
    "Saurabh Mishra Portfolio",
  ],
};
