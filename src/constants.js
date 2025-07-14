// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png'
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import adobelogo from  './assets/tech_logo/Adobe_Photoshop.png';


import englogo from './assets/education_logo/engineering_logo.png';
import highschoollogo from './assets/education_logo/Highschool_logo.jpeg';
import pucLogo from './assets/education_logo/puc_logo.png';
import preschoolLogo from './assets/education_logo/preschool_logo.jpeg';

import bloglogo from './assets/work_logo/Blog.png';
import urbanlogo from './assets/work_logo/Urban_stay.png';
import smartlogo from './assets/work_logo/SmartIVBag.png';

import cert1 from "./assets/certifications_logo/web.png";
import cert2 from "./assets/certifications_logo/prompt.png";
import cert3 from "./assets/certifications_logo/softwareai.png";
import cert4 from "./assets/certifications_logo/cisco.png";



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Boot strap ', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
     
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
 
      { name: 'Java', logo: javaLogo },
   
   
      { name: 'Java Script', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      {name:'Adobe Photoshop',logo:adobelogo},
    ],
  },
];

 
 export const education = [
  {
    id: 0,
    img: englogo,
    school: "Shri Dharmastahala College of Engineering and Technology, Dharwad",
    date: "2021 - 2025",
    grade: "8.5 CGPA", // add if you have CGPA or %
    desc: "Currently pursuing engineering degree at Shri Dharmastahala College of Engineering and Technology, Dharwad.",
    degree: "Bachelor of Engineering (B.E.)",
  },
  {
    id: 1,
    img: pucLogo,
    school: "Karkala Jnanasudha PUC College",
    date: "2019 - 2021",
    grade: "89.64%",
    desc: "Completed PUC with excellent grades, focused on preparing for engineering and higher studies.",
    degree: " PCMS Pre-University Course (PUC)",
  },
  {
    id: 2,
    img: highschoollogo,
    school: "Balbhavan English Medium Karwar",
    date: "2016 - 2018",
    grade: "89.24%",
    desc: "Completed 8th to 10th standard with a strong academic record.",
    degree: "High School (8th to 10th)",
  },
  {
    id: 3,
    img: preschoolLogo,
    school: "St Michael Convent High School Karwar",
    date: "2010 - 2016",
    grade: "A", // no grade usually for preschool/primary
    desc: "Completed education from 1st to 7th standard.",
    degree: "Primary and Middle School Education",
  },
];

  export const projects = [
  {
    id: 0,
    title: "Blog Platform",
    description:
      "A full-stack blogging platform with user authentication, blog creation/editing, and markdown support. Built with MEN stack, it allows users to post and interact with content securely and efficiently.",
    image: bloglogo,
    tags: ["MongoDB", "Express.js",  "Node.js","html","css","javascript"],
    github: "https://github.com/ganeshharikant/BLOG",
    webapp: "https://blog-x25y.onrender.com",
  },
  {
    id: 1,
    title: "Urban Stay",
    description:
      "A vacation rental booking web application inspired by Airbnb. Users can explore properties, view details, and make bookings. Built with the MERN stack and integrated APIs for maps and search filtering.",
    image: urbanlogo,
    tags: ["ejs", "Node.js", "MongoDB", "Express.js", "Maps API", "Search Filter","html","css","javascript","leaflt.js"],
    github: "https://github.com/ganeshharikant/UrbanStay",
    webapp: "https://urban-stay.onrender.com",
  },
  {
    id: 2,
    title: "Smart IV Bag Monitoring System",
    description:
      "An IoT-based health monitoring project using Arduino and ESP32. Continuously tracks IV fluid levels and sends alerts to avoid manual errors. Backend built with Node.js and real-time dashboard using HTML, CSS, and JS.",
    image: smartlogo,
    tags: ["Arduino", "ESP32", "IoT", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ganeshharikant/Smart-Monitoring-of-iv-Fluids",
    
  },
];


export const certifications = [
  {
    id: 1,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy (Angela Yu)",
    date: "March 2025",
    description:
      "Hands-on course covering HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, REST APIs, and deployment.",
    link: "https://www.udemy.com/certificate/UC-c7c1056d-ce7a-46d7-9127-447078ad0eef/",
    image: cert1, // Replace with actual import like: import cert1 from '../assets/certificates/udemy_fullstack.png';
  },
  {
    id: 2,
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "may 2025",
    description:
      "Learned effective techniques to craft prompts for generative AI models and control their output.",
    link: "https://drive.google.com/file/d/11y9TShRMX_ak1yEtttR2NiNJ6EWAWb3X/view?usp=sharing", // Replace with actual certificate link
    image: cert2,
  },
  {
    id: 3,
    title: "Principles of Generative AI",
    issuer: "Infosys Springboard",
    date: "may 2025",
    description:
      "Explored foundational concepts of generative AI, transformer models, and responsible AI principles.",
    link: "https://drive.google.com/file/d/1JpBQbEpGXJDttpWEL6WFQmAuCipxxCZq/view?usp=sharing", // Replace with actual certificate link
    image: cert3,
  },
{
    id: 4,
    title: "CCNA: Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "August 2024", // Change this to your actual date
    description:
      "Covered networking fundamentals, IP services, security fundamentals, automation, and programmability for modern enterprise networks.",
    link: "https://www.credly.com/badges/1a34fb57-aa04-443f-935e-eac4e1725227", // Replace with your real badge URL
    image: cert4,
  },

];
