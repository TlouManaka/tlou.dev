import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoAngular  from '/public/images/logos/icon-angular.svg';
import LogoMssql  from '/public/images/logos/icon-mssql.svg';
import Logoc from '/public/images/logos/icon-c.svg';
import LogoSharepoint  from '/public/images/logos/icon-sharepoint.svg';
import LogoDotnet  from '/public/images/logos/icon-dotnet.svg';
import LogoBootstrap  from '/public/images/logos/icon-bootstrap.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectWebApi from '/public/images/project-web-api.png';
import ProjectCEM from '/public/images/project-cem.png';
import ProjectSharepoint from '/public/images/project-sharepoint.png';


import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';


export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/TlouManaka',
  GITHUB_REPO: 'https://github.com/TlouManaka/tlou.dev',
  TWITTER: 'https://x.com/DevDreamWeaver',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/TlouManaka',
  },
  {
    icon: Twitter,
    url: 'https://x.com/DevDreamWeaver',
  },{
    icon: Linkedin,
    url:'https://www.linkedin.com/in/tlou-manaka/',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Angular',
    logo: LogoAngular,
    url: 'https://angular.dev/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  
  
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {

    label:'bootstrap',
    logo:LogoBootstrap,
    url:'https://getbootstrap.com/'
  },
  {

    label:'Sharepoint',
    logo:LogoSharepoint,
    url:'https://www.microsoft.com/en-za/microsoft-365/sharepoint/collaboration/'
  },
  {

    label:'MSSql',
    logo:LogoMssql,
    url:'https://www.microsoft.com/en-us/sql-server/'
  },
  {

    label:'Dotnet',
    logo:LogoDotnet,
    url:'https://dotnet.microsoft.com/en-us/'
  },
  {

    label:'C#',
    logo:Logoc,
    url:'https://learn.microsoft.com/en-us/dotnet/csharp/'
  },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'IT intern(University Placement)',
    startDate: new Date(2021, 11),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'IT intern(University Placement)',
    startDate: new Date(2021, 11),
    endDate: new Date(2017, 4),
    summary: ['Worked as a full stack developer (React / Laravel).'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Customer-Experience-Management-System',
    description:
      'This Customer Experience Management (CEM) System is designed to enhance customer interactions and optimize their experience across various touchpoints. The system provides businesses with insights into customer behavior, preferences, and feedback, enabling them to deliver personalized and efficient service.',
    url: 'https://github.com/TlouManaka/Customer-Experience-Management-System',
    previewImage: ProjectCEM,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Chart.js',
      'C# and .Net framework',
      'Entity framework core',
      '.Net web apis',
      'SQL Server',
    ],
  },
  {
    name: 'Weather Web Api',
    description:
      'The Weather Web API is a RESTful service built with C# and ASP.NET Core, designed to fetch and provide real-time weather data using the OpenWeather API. It enables users to retrieve weather conditions for different locations through a simple and efficient API interface.',
    url: '#',
    previewImage: ProjectWebApi,
    technologies: [
      'c#',
      'Asp.net core',
    
    ],
  },
  {
    name: 'Sharepoint intranet site',
    description:
      'Design Intranet with Sharepoint UI kit on figma and developed with microsoft sharepoint framework.',
    url: '',
    previewImage: ProjectSharepoint,
    technologies: [
      'Typescript',
      'Microsoft Sharepoint framework',
      'Application customizer',
      'Sharepoint web parts',
      'Gulp',
      'Yeoman',
      'Figma Sharepoint UI Kit',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Rob Moloto',
    personAvatar: AvatarDummy,
    title: 'Group IT Manager - Gxakra Investment Pty LTD',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Tlou and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Sisco Gweru',
    personAvatar: AvatarDummy,
    title: 'Operational Manager- Future Business Consulting Pty LTD',
    testimonial:
      'Great guy, highly recommended for any COMPLEX software development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Pale Moeketsi',
    personAvatar: AvatarDummy,
    title: 'IT Engineer - DMS Poweders SA',
    testimonial:
      'Tlou was extremely easy and pleasant to work with and he truly cares about the project being a success. Tlou  has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
