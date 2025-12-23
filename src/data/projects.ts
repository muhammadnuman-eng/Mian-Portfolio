export interface Project {
  id: number;
  title: string;
  category?: string;
  image: string;
  link: string;
  techStack: string;
  description?: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "LEGAL MOMO",
    category: "Laravel",
    image: "/images/legal momo.jpg",
    link: "#",
    techStack: "Fast-API Python Next.js Typescript",
    description: "Created an advanced web platform for attorneys using FastAPI, Python, Next.js, and TypeScript, facilitating streamlined legal document handling and smart case analysis via automation."
  },
  {
    id: 2,
    title: "Mr Singh's",
    category: "Laravel",
    image: "/images/mr-sing,s.jpg",
    link: "https://mrsinghspizza.co.uk/food",
    techStack: "React MySQL Laravel",
    description: "Built with React, Laravel, and MySQL, this full-stack app delivers a smooth, dynamic web interface, secure backend, and robust relational data management."
  },
  {
    id: 3,
    title: "ZYAPPY Web",
    category: "Laravel",
    image: "/images/Behance.net.png",
    link: "https://www.behance.net/",
    techStack: "Vue.js MySQL Laravel",
    description: "Built with Vue.js, Laravel, and MySQL, this modern web app delivers a reactive UI, secure server-side API, and efficient relational data storage."
  },
  {
    id: 4,
    title: "ZYAPPY Mobile-app",
    category: "Laravel",
    image: "/images/zyappy-mobile-app.jpg",
    link: "https://posstagging.zyappy.com/login",
    techStack: "Mobile-app React-Native Nest.js FireBase PostgreSQL",
    description: "ZYAPPY is a mobile app built with React Native, Nest.js, Firebase, and PostgreSQL, enabling seamless ordering, real-time updates, and secure data management."
  },
  {
    id: 5,
    title: "Exactflow",
    category: "MEAN",
    image: "/images/sixn.png",
    link: "https://www.exactflow.pl/en",
    techStack: "Python Django React.js Node.js",
    description: "Created four advanced chatbots using Python, Django, React, and Node.js to streamline HR, customer service, sales, and support interactions with dynamic, context-driven responses in real time."
  },
  {
    id: 7,
    title: "Shawarma Store",
    category: "Laravel",
    image: "/images/shawarma-store.jpg",
    link: "#",
    techStack: "Mobile-app React-Native Node.js FireBase MySQL",
    description: "Shawarma Store is a mobile app built with React Native, Node.js, Firebase, and SQL, enabling seamless ordering, real-time updates, and secure data management."
  },
  {
    id: 6,
    title: "Signin - QEF",
    category: "MERN",
    image: "/images/5n.png",
    link: "https://qef-fe.vercel.app/",
    techStack: "Python Generative-AI LangChain OpenAI API",
    description: "Developed using Python, LangChain, and FastAPI, this project utilizes Generative AI to provide context-aware, real-time chatbot automation across various domains."
  },
 
  {
    id: 6,
    title: "Janjapan",
    category: "MEAN",
    image: "/images/threen.png",
    link: "https://janjapan.com/",
    techStack: "PHP Laravel Vue Node",
    description: "Built flexible, secure, and scalable web applications with PHP, Laravel, Vue.js, and Node.js, guaranteeing smooth front-end interaction and optimized back-end performance."
  },
  {
    id: 7,
    title: "Jantrading",
    category: "MERN",
    image: "/images/twon.png",
    link: "http://jantradingco.jp/",
    techStack: "Laravel React Vue Node.js PHP",
    description: "Developed using Laravel, React, Vue.js, Node.js, and PHP to provide quick, secure, and interactive user experiences with real-time capabilities and smooth integration."
  },
  {
    id: 8,
    title: "Samsungnac",
    category: "Python",
    image: "/images/onen.png",
    link: "http://samsungnac.co.za/",
    techStack: "Python Django React.js Node.js",
    description: "Created four smart chatbots with Python, Django, React, and Node.js to automate HR, customer service, sales, and support dialogues with real-time, context-sensitive replies."
  },
  {
    id: 9,
    title: "Global Esales",
    category: "Python",
    image: "/images/global-united-esales.png",
    link: "https://guesb2b.com/auth/sign-in",
    techStack: "React.js Next.js Tailwind-CSS TypeScript Node.js Express.js MongoDB Redis",
    description: "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions."
  },
  {
    id: 10,
    title: "Janslawfirm",
    category: "MEAN",
    image: "/images/46.png",
    link: "https://janslawfirm.co.uk/",
    techStack: "HTML5 CSS3 JavaScript .net C#",
    description: "Frontend built with HTML5, CSS3, and JavaScript. Backend powered by PHP with WordPress CMS for content management and dynamic functionality."
  },
  {
    id: 11,
    title: "Nowfluence",
    category: "Laravel",
    image: "/images/44.png",
    link: "https://app.nowfluence.co/",
    techStack: "React TypeScript Tailwind-CSS Node.js Express.js",
    description: "Developed a campaign management dashboard using React, TypeScript, and Tailwind CSS for the frontend, with Node.js/Express backend handling real-time data processing."
  },
  {
    id: 12,
    title: "Getcontractorplus",
    category: "Python",
    image: "/images/45.png",
    link: "https://app.dev.getcontractorplus.com/auth/login",
    techStack: "React TypeScript Tailwind-CSS Next.js",
    description: "Frontend built with React, TypeScript, and Tailwind CSS using Next.js framework. Backend powered by Node.js with Express.js, exposing REST APIs for client-server communication."
  },
  {
    id: 13,
    title: "Zoho",
    category: "Python",
    image: "/images/47.png",
    link: "https://www.zoho.com/",
    techStack: "HTML5 CSS3 JavaScript React Java Node.js Cloud-Infrastructure-(AWS/Azure)",
    description: "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Java and Node.js with cloud infrastructure on AWS/Azure for scalability."
  },
  {
    id: 14,
    title: "Onlinelegaladvise",
    category: "MERN",
    image: "/images/445.png",
    link: "https://onlinelegaladvise.com/",
    techStack: "HTML5 CSS3 JavaScript jQuery PHP MySQL",
    description: "Frontend built with HTML5, CSS3, JavaScript, and jQuery for interactive web pages. Backend powered by PHP with MySQL database for data management and server-side processing."
  },
  {
    id: 15,
    title: "Servrhotels",
    category: "Python",
    image: "/images/446.png",
    link: "https://servrhotels.com/",
    techStack: "HTML5 CSS3 JavaScript React Node.js Express.js",
    description: "Frontend built with HTML5, CSS3, JavaScript, and React for dynamic user interfaces. Backend powered by Node.js with Express.js framework for server-side processing and API management."
  },
  {
    id: 16,
    title: "Jan Japan Invoice",
    category: "MERN",
    image: "/images/project-1.PNG",
    link: "http://imgup.jan-japan.com/jans_invoice/",
    techStack: "Express.js React.js Node.js",
    description: "Proficient in developing scalable, high-performance applications using Express.js for backend, React.js for dynamic UIs, and Node.js for server-side development."
  },
  {
    id: 17,
    title: "Barney's",
    category: "LAMP",
    image: "/images/project-2.PNG",
    link: "#",
    techStack: "Linux Apache MySQL PHP",
    description: "Skilled in developing robust web applications using Linux for server management, Apache for web hosting, MySQL for databases, and PHP for dynamic server-side scripting."
  },
  {
    id: 18,
    title: "Grand Royale Group",
    category: "Laravel",
    image: "/public/images/grandroyale (1).jpg",
    link: "https://grandroyalegroup.com.au/",
    techStack: "WordPress Elemento-PRO Contact-Form-7 AI-Chatbot Ajax-Search-Lite",
    description: "Grand Royale Group provides B2B hospitality training via immersive WordPress simulations covering hotel management, events, and service excellence."
  },
  {
    id: 19,
    title: "Ormith",
    category: "Laravel",
    image: "/public/images/ormith.jpg",
    link: "https://ormith.com/",
    techStack: "WordPress Elementor Contact-Form-7 WooCommerce-WP Mail-SMTP",
    description: "A WordPress e-commerce site Ormith specializing in high-quality adhesive and sticky pad products for home and industrial use."
  },
  {
    id: 20,
    title: "Saksfifthavenue",
    category: "Laravel",
    image: "/images/4n.png",
    link: "https://www.saksfifthavenue.com/",
    techStack: "React.js Next.js Tailwind CSS TypeScript Node.js Express.js MongoDB",
    description: "Experienced in building dynamic web applications using React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, MongoDB, and Redis for scalable, high-performance solutions."
  },
  {
    id: 21,
    title: "The New Yorker",
    category: "Modern Stack",
    image: "/images/newyorker.jpeg",
    link: "https://www.newyorker.com/",
    techStack: "React.js Next.js TypeScript Node.js Express.js",
    description: "Premium magazine website featuring elegant editorial design, seamless article reading experience, and sophisticated content management system built with modern web technologies."
  },
  {
    id: 22,
    title: "A-DAM",
    category: "E-Commerce",
    image: "/images/a-dam.jpeg",
    link: "https://a-dam.com/",
    techStack: "React.js Next.js TypeScript Tailwind CSS Node.js",
    description: "Modern e-commerce platform for sustainable fashion brand with elegant product showcases, seamless shopping experience, and integrated payment solutions."
  },
  {
    id: 23,
    title: "V&A Museum",
    category: "Modern Stack",
    image: "/images/vam-museum.jpeg",
    link: "https://www.vam.ac.uk/",
    techStack: "React.js Next.js TypeScript Node.js Express.js MongoDB",
    description: "Cultural institution website featuring immersive digital exhibitions, membership management, and elegant presentation of art collections with modern web technologies."
  },
  {
    id: 24,
    title: "Target Corporate",
    category: "Corporate",
    image: "/images/target-corporate.jpeg",
    link: "https://corporate.target.com/about",
    techStack: "React.js Next.js TypeScript Tailwind CSS Node.js",
    description: "Corporate website showcasing company mission, values, and brand story with engaging visuals, responsive design, and seamless user experience."
  }
  // {
  //   id: 17,
  //   title: "Teach It Pro",
  //   category: "Modern Stack",
  //   image: "/images/5n.png",
  //   link: "https://qef-fe.vercel.app/",
  //   techStack: "Nest.js, Nuxt.js",
  //   description: "Educational platform with modern tech stack"
  // },
  // {
  //   id: 18,
  //   title: "Combat Exam",
  //   category: "MEAN",
  //   image: "/images/4n.png",
  //   link: "https://app.nowfluence.co/influence/login",
  //   techStack: "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
  //   description: "Exam preparation platform"
  // },
  // {
  //   id: 19,
  //   title: "Homitag",
  //   category: "LAMP",
  //   image: "/images/threen.png",
  //   link: "http://www.homitag.com/",
  //   techStack: "LAMP Stack (Linux, Apache, MySQL, PHP)",
  //   description: "Home improvement platform"
  // },
  // {
  //   id: 20,
  //   title: "Signup Server",
  //   category: "Node.js",
  //   image: "/images/twon.png",
  //   link: "http://141.95.127.209/admin/",
  //   techStack: "Node.js, Express.js, MySQL",
  //   description: "User authentication server"
  // },
  // {
  //   id: 21,
  //   title: "Server Hotels",
  //   category: "Laravel",
  //   image: "/images/onen.png",
  //   link: "http://jantradingco.jp/",
  //   techStack: "Laravel, MySQL, Nuxt.js",
  //   description: "Hotel booking system"
  // },
  // {
  //   id: 22,
  //   title: "Musix Flicks",
  //   category: "Modern Stack",
  //   image: "/images/44.png",
  //   link: "http://samsungnac.co.za/",
  //   techStack: "Nest.js, Node.js, Angular",
  //   description: "Music and entertainment platform"
  // },
  // {
  //   id: 23,
  //   title: "Urban Enigma",
  //   category: "Laravel",
  //   image: "/images/45.png",
  //   link: "https://dev.urban-enigma.com/",
  //   techStack: "Laravel, PHP",
  //   description: "Urban development platform"
  // },
 
  

];

export const featuredProjects = allProjects.slice(0, 6);
