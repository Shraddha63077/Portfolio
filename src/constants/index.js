export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Trail Tales - Your Personal Travel Diary",
    desc: "Trail Tales is a MERN-powered platform for travel enthusiasts. Users can document their trips and build personal diaries. Tailwind CSS enhances the sleek, responsive experience. It’s designed to turn every trip into a story worth telling.",
    subdesc:
      "Built using MongoDB, Express.js, React, and Node.js for full-stack functionality. Styled with Tailwind CSS for a clean, responsive UI. Integrated database management for storing user journeys and itineraries. Currently exploring Next.js to enhance performance and scalability.",
    href: "https://github.com/Shraddha63077/TrailTales",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/image1.png",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/image2.png",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/image.png",
      },
    ],
  },
  {
    title: "Prescripto - Doctors Appointment Booking Website",
    desc: "Prescripto is a web application designed to simplify healthcare management. It allows patients to book doctor appointments and manage prescriptions online. Doctors can organize their schedules and keep track of patient records with ease. Built with modern web technologies for a smooth and responsive experience. A step towards making healthcare more accessible and efficient digitally",
    subdesc:
      "Developed using the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack functionality. Styled with Tailwind CSS for a clean, responsive UI. Integrated secure authentication and database management for reliability. Designed to deliver a seamless healthcare experience across devices",
    href: "https://github.com/Shraddha63077/CureConnect",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/logo.svg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/image1.png",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/image2.png",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/image.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Digital Dose",
    pos: "Frontend Developer Intern",
    duration: "July 2025 - August 2025",
    title:
      "Worked as a Frontend Developer Intern at Digital Dose for 2 months. Gained hands-on experience in React.js and CSS for building responsive UIs. Collaborated with the team to design and enhance web application features. Explored and worked with Next.js for a few weeks to expand skills. This internship helped me strengthen my frontend development expertise.",
    icon: "/assets/explogo.png",
    animation: "salute",
  },
  // {
  //   id: 2,
  //   name: "Figma",
  //   pos: "Web Developer",
  //   duration: "2020 - 2022",
  //   title:
  //     "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: "/assets/figma.svg",
  //   animation: "clapping",
  // },
  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
];
