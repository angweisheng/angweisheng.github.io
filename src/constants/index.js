import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpeg";


export const HERO_CONTENT = `Aspiring full stack developer with a passion for crafting robust digital solutions. Extensive project experience with front-end technologies like React and Next.js, as well as back-end technologies like Python and MongoDB. Seeking opportunities to leverage my skills and experience in a dynamic work environment.`;

export const ABOUT_TEXT = `I am a Wei Sheng, a final year student year student from Singapore Management University, currently pursuing a degree in Information Systems with a specialization in Digitalisation & Cloud Solutions. Since young, I've had a knack and strong interest in problem solving, pushing me to pursue a career in software development. I am passionate about building web applications and software solutions that are user-friendly, scalable, and efficient. Check out some of my projects and experience below to learn more about my work. I am constantly learning and exploring new technologies to stay up-to-date with the latest trends in the industry. I am also extremely people-oriented, and have no problems adapting and working in a team environment. I am always open to new opportunities and challenges, so feel free to reach out to me!`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Aug 2023",
    role: "Undergraduate Research Intern",
    company: "Singapore Management University",
    description: `Conducted research on neural topic models under Professor Hady Lauw with the goal of understanding the impacts of composite activations in Neural Topic Models and evaluated variations of Latent Dirichlet Allocation-based neural topic models`,
    technologies: ["GenSIM", "BERTopic","LDA"],
  },
  {
    year: "Aug 2022 - Dec 2022",
    role: "Teaching Assistant",
    company: "Singapore Management University",
    description: `Successfully mentored a class of 45 students in a 13-week long “Introduction to Python” course, which exposed students to the Python programming language`,
    technologies: ["Python"],
  },

];

export const PROJECTS = [
  {
    title: "Portfolio Management Analyser",
    image: project1,
    description:
      "Full Stack Application project to manage portfolio of stocks, sponsored by Goldman Sachs as part of IS442: Object-Oriented Programming course",
    technologies: ["Java", "Spring Boot", "NextJS", "TailwindCSS", "MongoDB"],
  },
  {
    title: "Bakery Donation System",
    image: project2,
    description:
      "Web application project developed in a microservices architecture using message queues and a CRON job to alleviate food waste by managing the distribution of bakery leftovers of bakeries, delivery personnel, and beneficiaries",
    technologies: ["Bootstrap", "Javascript", "Firebase", "Docker", "Flask", "RabbitMQ"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS", "Typescript"],
  },
  {
    title: "Finland Student Lunch Menu Bot",
    image: project4,
    description:
      "Telegram bot to check daily student lunch menus by retrieving data from various open-source APIs by the food providers.",
    technologies: ['NodeJS', 'ExpressJS', "Telegram Bot", "JSON API"],
  },
];

export const CONTACT = {
  phoneNo: "+65 92962335",
  email: "wsang.2021@scis.smu.edu.sg",

};