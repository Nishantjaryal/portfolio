export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  
  
  export const projects = [
    {
      id: 1,
      title: "Ai Face detector",
      des: " Integrate Machine Learning model with a web application, which can study a person’s behaviour ",
      img: "/ai.webp",
      iconLists: ["/javascript-js.svg", "/html-5.svg", "/css3.svg","/mll.svg"],
      link: "https://ai-face-reader.netlify.app/",
    },
    {
      id: 2,
      title: "Zooom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Zooom. Seamlessly connect with colleagues and friends.",
      img: "/zooom.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Nishantjaryal/zoom-clone",
    },
    {
      id: 3,
      title: "BookScape  - Bookclub Application",
      des: "Developed College Bookclub website with Nextjs and Tailwind UI library integrated with Clerk Auth",
      img: "/bookclub.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
      link: "https://bkscape.netlify.app/",
    },
    
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Nishant has been an exceptional experience. His analytical skills, combined with a strategic approach, make him a true asset to any team. Nishant’s dedication to delivering impactful results is unparalleled.",
      name: "Namarta Kumari",
      title: "Manager, EY",
    },
    {
      quote:
        "Nishant’s creativity and precision in execution set him apart. His ability to adapt to new challenges and consistently deliver beyond expectations has been instrumental in driving success for our campaigns. A true professional!",
      name: "Amandeep Singh",
      title: "Manager, BiddableMedia",
    },
    {
      quote:
        "Nishant is a visionary with an exceptional ability to turn ideas into actionable strategies. His focus, commitment, and problem-solving mindset have played a significant role in our projects’ success. Working with him is always a pleasure.",
      name: "Siddharth Bhan",
      title: "CEO, WireMonster",
    },
    {
      quote:
        "Nishant is one of those people who just gets it. Whether we’re figuring out solutions he brings effortless mix of creativity and logic that makes everything feel doable, Additionally his support and good vibes always make things so much better. Honestly, I couldn’t get better friend and teammate!",
      name: "Chitra Thakur",
      title: "Student, Guru Nanak Dev University",
    },
    {
      quote: 
        "Nishant has been an incredible mentor and inspiration throughout my journey. His knowledge, patience, and willingness to guide others are truly commendable. He has a unique way of simplifying complex concepts, making learning an absolute delight.",
      name: "Rohit",
      title: "Student, Guru Nanak Dev University",
    },
  ];

  export const projectSheet = [
    {
      type: "zip", // docs || post || link || pdf || news || media || zip
      heading: "NPM package: Codespeed",
      description:
        "codespeed is javascript based solution helps to calculate an accurate runtime of a portion of code to execute",
      link: "https://www.npmjs.com/package/codespeed",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "zip", // docs || post || link || pdf || news || media || zip
      heading: "NPM package: Data-hash",
      description:
        "data-hash is very simple to use but yet very powerful package used to generate super strong hashes of given data",
      link: "https://www.npmjs.com/package/data-hash",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "zip", // docs || post || link || pdf || news || media || zip
      heading: "NPM package: Hash-rocket",
      description:
        "Simple to use Dependency which generates super strong Hash codes, Secure and Solid Alternative To UUID",
      link: "https://www.npmjs.com/package/hash-rocket",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },

    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Full Stack Chat App",
      description:
        "Developed an full stack chat App, built with webrtc and has an interactive UI",
      link: "https://github.com/Nishantjaryal/QuickPost",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Zoom clone: Video Chat App",
      description:
        "Developed a zoom clone with features like Video Calling, Call Recordings, Call Scheduling, Screencast, Integrated with Clerk Auth and Stream Api",
      link: "https://github.com/Nishantjaryal/zoom-clone",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Interactive Snake Game",
      description:
        " Developed an interactive Snake Game with customizable appearance, food type, speed, and growth rate using HTML, CSS, and JavaScript",
      link: "https://smart-hungary-snake.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Tic Tae Toe Game",
      description:
        " Developed a Responsive Tic Tae Toe game with interactive design and animations ensures unbored user experience.",
      link: "https://smart-tic-tae-toe.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Ai face detector",
      description:
        " Integrate Machine Learning model with a web application, which can study a person’s behaviour based on provided files or camera input.",
      link: "https://ai-face-reader.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "BookScape - University Book Club",
      description:
        " Developed College Bookclub website with Nextjs and Tailwind UI library integrated with clerk Auth Library and Shadcn components",
      link: "https://bkscape.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "JSON build",
      description:
        "Application designed to generate JSON array, based on customised input requirements it can generate Testing data.",
      link: "https://json-build.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Project Ochi ",
      description:
        "Modern Themed Animated presentation website with Interactive Ui elements and responsive design.",
      link: "https://project-ochi.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Mono-code",
      description:
        " web based application which identifies keywords from input paragraphs, Comes with basic text editting Functionalities ",
      link: "https://word-site.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "MineSweeper39",
      description:
        " Developed a Responsive Minesweeper game with interactive and responsive design ensures unbored user experience.",
      link: "https://minesweeper39.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },

    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Webworks Studio",
      description:
        " Developed a Modern themed web designer’s studio website with eye catching animations.",
      link: "https://web-works-studio.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Web-docs ",
      description:
        "  Developed a Modern Desktop themed web based note taking application with Nextjs and Framer Motion library.",
      link: "https://floating-ideas.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Studio designer website ",
      description:
        " Developed clone of a beautifully crafted studio designer’s website with interactive modern ui animations",
      link: "https://design-my-studio.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "Bubble game ",
      description:
        "Developed a fun number finding game from a given number table, Comes with Simple Design but solid logic",
      link: "https://bubble-num.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
    {
      type: "link", // docs || post || link || pdf || news || media || zip
      heading: "2048 game",
      description:
        "Developed an interactive 2048 Game  with interactive appearance and Robust Game Engine logic",
      link: "https://play-248.netlify.app/",
      image: "/nj.jpg",
      author: "Nishant Singh",
      authorLink: "https://www.linkedin.com/in/nishant-singh-jaryal/",
      state: "checked", // completed || testing || checked || warning
    },
  ];
  export const CertSheet = [
    {
      heading: "Cisco: Introduction to Cybersecurity",
      description:
        "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course",
      link: "http://credly.com/badges/bee7634b-143b-48a8-b513-54c949127cb7",
    },
    {
      heading: "Solutions Architecture Job Simulation",
      description:
        "Designed a scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant slow response times",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_NLGf4iLimEhKWPDCE_1751637153752_completion_certificate.pdf",
    },
    {
      heading: "Technology Software Development ",
      description:
        "Completed a job simulation involving hypothetical tasks to improve Citi's loan management system ",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/8eNRcRqBZM9HLvwGw/2jxESPvorR7fmypXj_8eNRcRqBZM9HLvwGw_NLGf4iLimEhKWPDCE_1751539763549_completion_certificate.pdf",
    },
    {
      heading: "Software Engineering",
      description:
        "Integrated new feature for the EA Sports College Football and wrote a Feature Proposal describing it to other stakeholders",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_NLGf4iLimEhKWPDCE_1751445282172_completion_certificate.pdf",
    },
    {
      heading: "Harvard CS50",
      description:
        "Learned about C, Core programming concepts, High Level Language as Python, database management and web development",
      link: "https://drive.google.com/file/d/1-kDbDlskg31aX1homUtvT4_NOU0cAlTe/view",
    },
    {
      heading: "BCG GenAI",
      description:
        "Completed a job simulation involving AI-powered financial chatbot development for BCG's GenAI Consulting team.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_NLGf4iLimEhKWPDCE_1722775103616_completion_certificate.pdf",
    },
    {
      heading: "BCG Strategy consulting",
      description:
        "Completed a job simulation where I advised a hypothetical local telco company, Company X, facing a decline in profits",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/ntTvo6ru6Tq3A2JPq_BCG_NLGf4iLimEhKWPDCE_1721994543738_completion_certificate.pdf",
    },
    {
      heading: "Goldman Sachs Software Engineering ",
      description:
        "Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_NLGf4iLimEhKWPDCE_1719913661700_completion_certificate.pdf",
    },
    {
      heading: "PwC US Management Consulting  ",
      description:
        "Completed a job simulation focused on business transaction diligence for a PwC management consulting team",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20US/douE8ih9jWMQ2P7sS_PwC%20US_NLGf4iLimEhKWPDCE_1715221849342_completion_certificate.pdf",
    },
    {
      heading: "JPMorgan Chase Investment Banking",
      description:
        "Constructed a DCF model to calculate the valuation of the M&A target and adjusted the model to account for a competitor bid and supply chain interruption.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_NLGf4iLimEhKWPDCE_1711545033613_completion_certificate.pdf",
    },
    {
      heading: "Accenture Data Analytics",
      description:
        "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_NLGf4iLimEhKWPDCE_1711287939183_completion_certificate.pdf",
    },
    {
      heading: "KPMG AU Data Analytics ",
      description:
        "Completed a simulation focused on advising a client on customer targeting with the Data, Analytics & Modelling team",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_NLGf4iLimEhKWPDCE_1695057774352_completion_certificate.pdf",
    },
    {
      heading: "JPMorgan Chase & Co. Cybersecurity",
      description:
        "Completed a simulation focused on cybersecurity, by JPMorgan Chase & Co for assessing IT security and suggesting improvements.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/gWbW5qHAChqQBGWpA_JPMorgan%20Chase%20&%20Co._NLGf4iLimEhKWPDCE_1692625264870_completion_certificate.pdf",
    },
    {
      heading: "Deloitte Australia Technology",
      description:
        "Completed a job simulation involving data analysis for Deloitte’s Technology team, Created a data dashboard using Tableau",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_NLGf4iLimEhKWPDCE_1692377606039_completion_certificate.pdf",
    },
    {
      heading: "PwC Switzerland Power BI ",
      description:
        "Completed a job simulation where I strengthened my PowerBI skills to better understand clients and their data visualisation needs.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_NLGf4iLimEhKWPDCE_1691820880131_completion_certificate.pdf",
    },
    {
      heading: "Google Digital Marketing",
      description:
        "Completed certificate by google on Digital Marketing and how search engines works",
      link: "https://drive.google.com/file/d/1_UcU_qMw1OtPHH3AQ3X1HWsv2LAysSQR/view?usp=drive_link",
    },
  ];
  
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://github.com/Nishantjaryal",
    },
   
    {
      id: 2,
      link: "https://www.linkedin.com/in/nishant-singh-jaryal/",

    },
    {
      id: 3,
      link: "mailto:nishantjaryal24@gmail.com",

    },
  ];