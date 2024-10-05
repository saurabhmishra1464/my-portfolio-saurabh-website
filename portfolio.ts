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
          skillName: "AWS",
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
    role: "Software Intern",
    company: "BruCode Technologies",
    companyLogo: "/img/icons/common/Brucode.jpeg",
    date: "April 2021 - March 2022",
    desc: "As an intern, I gained hands-on experience in developing backend solutions using .NET and .NET Core for various web applications, including those in e-commerce and property management. I managed SQL databases, optimizing data operations through effective queries and stored procedures.",
  },
  {
    role: "Software Associate Level II",
    company: "SmartData EnterPrises",
    companyLogo: "/img/icons/common/smartdataenterprises.jpeg",
    date: "March 2022 - March 2023",
    desc: "As a Software Associate, I specialized in developing robust web applications using .NET and React, focusing on creating user-friendly interfaces and efficient back-end processes. I managed database interactions using SQL, optimizing queries for improved performance and data integrity. ",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "Ariel Software Solutions",
    companyLogo: "/img/icons/common/Ariel.png",
    date: "Oct 2023 - March 2024",
    desc: "I contributed to the development of high-performance applications by leveraging my skills in .NET and SQL. My work in integrating React with back-end services resulted in improved user experiences.",
  },
  {
    role: "Full Stack Developer",
    company: "NanhiDuniya",
    companyLogo: "/img/icons/common/NanhiDuniya.jpeg",
    date: "March 2024 - Present",
    desc: "I am primarily focused on enhancing the user experience by developing a robust web application using .NET and React. My responsibilities include designing and implementing APIs to facilitate seamless data interaction, as well as managing SQL databases. ",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/saurabhmishra1464",
    link: "#",
  },
  {
    name: "NanhiDuniya UserManagement Api",
    desc: "The NanhiDuniya User Management API provides secure user authentication using JWT tokens stored in HTTP-only cookies to prevent XSS attacks. It employs RabbitMQ for asynchronous processing of background tasks, such as sending emails. Key features include user registration, profile management, password recovery, and role-based access control.",
    link: "#",
  },
  {
    name: "NanhiDuniya Frontend",
    desc: "The NanhiDuniya frontend, built with React.js and Next.js, utilizes Redux Toolkit and Redux Query for state management, incorporates Tailwind CSS for styling, and employs Zod for validation, along with loading skeletons for enhanced user experience.",
    link: "#",
  },
  {
    name: "NanhiDuniya Email Api",
    desc: "The NanhiDuniya Email API enables efficient email communication, utilizing RabbitMQ for asynchronous processing, customizable templates, and tracking capabilities for user engagement.",
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
