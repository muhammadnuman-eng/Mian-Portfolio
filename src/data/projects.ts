export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  techStack: string;
  description?: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Exactflow",
    category: "MEAN",
    image: "/images/sixn.png",
    link: "https://www.exactflow.pl/en",
    techStack: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
    description: "Professional web application built with MEAN stack technology"
  },
  {
    id: 2,
    title: "Signin - QEF",
    category: "MERN",
    image: "/images/5n.png",
    link: "https://qef-fe.vercel.app/",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "Modern authentication system with MERN stack"
  },
  {
    id: 3,
    title: "Saksfifthavenue",
    category: "Laravel",
    image: "/images/4n.png",
    link: "https://www.saksfifthavenue.com/",
    techStack: "LAMP Stack (Linux, Apache, MySQL, PHP)",
    description: "E-commerce platform built with Laravel framework"
  },
  {
    id: 4,
    title: "Janjapan",
    category: "MEAN",
    image: "/images/threen.png",
    link: "https://janjapan.com/",
    techStack: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
    description: "Corporate website for Jan Japan company"
  },
  {
    id: 5,
    title: "Jantrading",
    category: "MERN",
    image: "/images/twon.png",
    link: "http://jantradingco.jp/",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "Trading platform built with MERN stack"
  },
  {
    id: 6,
    title: "Samsungnac",
    category: "Python",
    image: "/images/onen.png",
    link: "http://samsungnac.co.za/",
    techStack: "Python, Django, Node.js, Angular",
    description: "Corporate website with Python backend"
  },
  {
    id: 7,
    title: "Nowfluence",
    category: "Laravel",
    image: "/images/44.png",
    link: "https://app.nowfluence.co/",
    techStack: "Laravel, MySQL, PHP",
    description: "Influencer marketing platform"
  },
  {
    id: 8,
    title: "Getcontractorplus",
    category: "Python",
    image: "/images/45.png",
    link: "https://app.dev.getcontractorplus.com/auth/login",
    techStack: "Python, Django, Flask",
    description: "Contractor management platform"
  },
  {
    id: 9,
    title: "Janslawfirm",
    category: "MEAN",
    image: "/images/46.png",
    link: "https://janslawfirm.co.uk/",
    techStack: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
    description: "Legal services website"
  },
  {
    id: 10,
    title: "Zoho",
    category: "Python",
    image: "/images/47.png",
    link: "https://www.zoho.com/",
    techStack: "Python, AI/ML, Web Development",
    description: "Business software solutions platform"
  },
  {
    id: 11,
    title: "Onlinelegaladvise",
    category: "MERN",
    image: "/images/445.png",
    link: "https://onlinelegaladvise.com/",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "Online legal advice platform"
  },
  {
    id: 12,
    title: "Servrhotels",
    category: "Python",
    image: "/images/446.png",
    link: "https://servrhotels.com/",
    techStack: "Python, Django, Web Development",
    description: "Hotel management system"
  },
  {
    id: 13,
    title: "Jan Japan Invoice",
    category: "MERN",
    image: "/images/project-1.PNG",
    link: "http://imgup.jan-japan.com/jans_invoice/",
    techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    description: "Invoice management system for Jan Japan"
  },
  {
    id: 14,
    title: "Barney's",
    category: "LAMP",
    image: "/images/project-2.PNG",
    link: "https://www.saksfifthavenue.com/",
    techStack: "LAMP Stack (Linux, Apache, MySQL, PHP)",
    description: "Fashion retail platform"
  },
  {
    id: 15,
    title: "Teach It Pro",
    category: "Modern Stack",
    image: "/images/5n.png",
    link: "https://qef-fe.vercel.app/",
    techStack: "Nest.js, Nuxt.js",
    description: "Educational platform with modern tech stack"
  },
  {
    id: 16,
    title: "Combat Exam",
    category: "MEAN",
    image: "/images/4n.png",
    link: "https://app.nowfluence.co/influence/login",
    techStack: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
    description: "Exam preparation platform"
  },
  {
    id: 17,
    title: "Homitag",
    category: "LAMP",
    image: "/images/threen.png",
    link: "http://www.homitag.com/",
    techStack: "LAMP Stack (Linux, Apache, MySQL, PHP)",
    description: "Home improvement platform"
  },
  {
    id: 18,
    title: "Signup Server",
    category: "Node.js",
    image: "/images/twon.png",
    link: "http://141.95.127.209/admin/",
    techStack: "Node.js, Express.js, MySQL",
    description: "User authentication server"
  },
  {
    id: 19,
    title: "Server Hotels",
    category: "Laravel",
    image: "/images/onen.png",
    link: "http://jantradingco.jp/",
    techStack: "Laravel, MySQL, Nuxt.js",
    description: "Hotel booking system"
  },
  {
    id: 20,
    title: "Musix Flicks",
    category: "Modern Stack",
    image: "/images/44.png",
    link: "http://samsungnac.co.za/",
    techStack: "Nest.js, Node.js, Angular",
    description: "Music and entertainment platform"
  },
  {
    id: 21,
    title: "Urban Enigma",
    category: "Laravel",
    image: "/images/45.png",
    link: "https://dev.urban-enigma.com/",
    techStack: "Laravel, PHP",
    description: "Urban development platform"
  }
];

export const featuredProjects = allProjects.slice(0, 6);
