import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lalit_Sahu",
  initials: "LS",
  url: "https://github.com/VITianLalit",
  location: "Indore, India",
  locationLink: "https://maps.app.goo.gl/a8ujxMTMJF5Qz1Vx8",
  description:
    "Software Engineer with expertise in Flutter, Dart, Machine Learning, and Web Development. I love building cross-platform applications and working with cutting-edge technologies.",
  summary:
    "Currently pursuing an Integrated MTech in Cyber Security at VIT Bhopal. I've worked on various projects, including cross-platform mobile apps using Flutter and Dart, and have experience with backend technologies like FastAPI. Passionate about building scalable applications and leveraging machine learning to solve real-world problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "Java",
    "Python",
    "SQL",
    "Node.js",
    "Machine Learning",
    "Git",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Lalitsahuji786@gmail.com",
    tel: "+91 9301471365",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VITianLalit",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lalit-sahu/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "Lalitsahuji786@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Robral Technologies",
      href: "https://www.robraltechnologies.com",
      badges: [],
      location: "Remote",
      title: "Flutter Developer (SDE-1)",
      logoUrl: "/robral.jpeg",
      start: "Dec 2024",
      end: "Ongoing",
      description:
        "Joined Robral Technologies as a part-time Flutter Developer (SDE-1). Focused on Flutter-based application development and maintenance. Worked remotely with flexible hours while collaborating on various projects and meeting deadlines. Contributed to building and enhancing cross - platform applications.",
    },
    {
      company: "TheNotaryApp",
      href: "https://www.thenotaryapp.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Application Developer Intern",
      logoUrl: "/thenotaryapp.png",
      start: "Jul 2024",
      end: "Oct 2024",
      description:
        "Worked as a Flutter Developer Intern on TheNotaryApp System, a CRM system for Notaries in the US. The project focused on tracking company-wide Signings, Invoices, and status throughout the Signing Process. Responsibilities included building responsive and intuitive UIs, implementing core functionalities and state management, and integrating REST APIs. Contributed to successful production deployments and consistently exceeded expectations with timely project completion and improved outputs.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology, Bhopal",
      href: "https://vitbhopal.ac.in",
      degree: "Integrated MTech in Cyber Security (CGPA: 8.7/10)",
      logoUrl: "/vit.png",
      start: "2021",
      end: "2026",
    },
    {
      school: "Government Excellence Higher Secondary School, Guna",
      href: "https://www.mpbse.nic.in/",
      degree: "Class XII (Percentage: 96%)",
      logoUrl: "/guna_school.jpg",
      start: "2020",
      end: "2021",
    },
    {
      school: "Government Excellence Higher Secondary School, Guna",
      href: "https://www.mpbse.nic.in/",
      degree: "Class X (Percentage: 95.8%)",
      logoUrl: "/guna_school.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "EventEaze",
      href: "https://eventeaze.com",
      dates: "Oct 2024 - Ongoing",
      active: true,
      description:
        "Developed a scalable event management platform to enable users from specific organizations to register, create, and manage events. The platform focuses on improving event handling and user engagement, providing features like event registration, user management, and real-time messaging with Firebase integration.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "GetX",
        "Real-Time Database",
        "Authentication",
      ],
      links: [
        {
          type: "GitHub Link",
          href: "https://eventeaze.com",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cultural Repository",
      href: "https://culturalrepository.com",
      dates: "Jul 2024 - Sep 2024",
      active: true,
      description:
        "Developed a cross-platform app for translating English to Braj using Flutter and Dart, with a responsive UI. Integrated a FastAPI backend to connect with a machine learning model, achieving 93% accuracy. The app also includes a dictionary and visualizes language model processes, optimized for performance and scalability using Docker and REST APIs.",
      technologies: [
        "Flutter",
        "Dart",
        "FastAPI",
        "Docker",
        "REST API",
        "Machine Learning",
      ],
      links: [
        {
          type: "GitHub Link",
          href: "https://culturalrepository.com",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ApnaMart (E-commerce App)",
      href: "",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Developed a full-featured e-commerce application where users can buy and sell products. Implemented a user-friendly UI with GetX state management for seamless navigation. Integrated Firebase for authentication, database storage, and real-time updates.",
      technologies: ["Flutter", "Dart", "Firebase", "GetX", "Cloud Firestore"],
      links: [
        {
          type: "GitHub Link",
          href: "https://culturalrepository.com",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Chat Application",
      dates: "Sep 2024 - Nov 2024",
      href: "",
      active: true,
      description:
        "Built a secure real-time chat application that allows users to communicate after creating an account with their email ID. Integrated Firebase for authentication, database storage, and real-time messaging. Used GetX for efficient state management and navigation.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "GetX",
        "Cloud Firestore",
        "Push Notifications",
      ],
      links: [
        {
          type: "GitHub Link",
          href: "https://culturalrepository.com",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "RBI@90",
      dates: "Sep 2024",
      location: "Reserve Bank of India (RBI)",
      description: "",
      image: "rbi.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
      ],
    },
    {
      title: "Technical Workshop ",
      dates: "Aug 2024",
      location: "GeeksforGeeks",
      description: "",
      image: "gfg.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://media.geeksforgeeks.org/certificates/1724947265/6d53d16c6ed5572b46932a81941021e0.pdf",
        },
      ],
    },
    {
      title: "Postman API Fundamentals Student Expert",
      dates: "Jul 2024",
      location: "Postman",
      description: "",
      image: "postman.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://api.badgr.io/public/assertions/_R7JQ8M_TemqXNDCQJOJoQ?identity__email=lalit.sahu2021%40vitbhopal.ac.in",
        },
      ],
    },
    {
      title:
        "Certificate of Participation in Coding Round of HackOn With Amazon - Season 4",
      dates: "Jun 2024",
      location: "Amazon",
      description: "",
      image: "amazon.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/12b15b32-bc10-4652-bd2b-70c6bf0b0fbb",
        },
      ],
    },
    {
      title: "Blockchain and its Application",
      dates: "May 2024",
      location: "NPTEL",
      description: "",
      image: "nptel.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1imuDFEVCMh83-S7BrHgINNRaTmaaBL1r/view?usp=sharing",
        },
      ],
    },
    {
      title: "Certificate of Participation in Xiaomi Ode2Code 3.0",
      dates: "Nov 2023",
      location: "Xiaomi India",
      description: "",
      image: "xiaomi.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/5d9c5768-a4c2-4b7a-86be-b411a46a1782",
        },
      ],
    },
    {
      title: "Introduction to Cybersecurity",
      dates: "Jun 2023",
      location: "Cisco",
      description: "",
      image: "cisco.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/91bd6998-ad81-4692-84d1-269cac218ee2/linked_in_profile",
        },
      ],
    },
    {
      title: "Codegoda 2023",
      dates: "Apr 2023",
      location: "Agoda",
      description: "",
      image: "agoda.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/ec0f6ea3-f4a7-448a-87d1-953a6485fba7?utm_campaign=site-emails",
        },
      ],
    },
    {
      title: "WCE HACKATHON 2023",
      dates: "Apr 2023",
      location:
        "Walchand College of Engineering(A Govt. Aided Autonomous Institute),SANGLI-M.S",
      description: "",
      image: "walchand.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1fgHlPmJbT3YxSpbez4nzdlPf_YJerAqV/view?usp=drivesdk",
        },
      ],
    },
    {
      title: "CODESPIRE",
      dates: "Mar 2023",
      location: "Acropolis Institutions",
      description: "",
      image: "codspire.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1M8zDTqn1ANjy0MLcSkt_TAG4av4brt3v/view?usp=drivesdk",
        },
      ],
    },
    {
      title: "Java Training Complete Course",
      dates: "Mar 2023",
      location: "Udemy",
      description: "",
      image: "udemy_logo.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/certificate/UC-d9b38b0d-88fe-461f-89b1-4427e6c547d6/",
        },
      ],
    },
    {
      title: "Problem Solving (Basic)",
      dates: "Mar 2023",
      location: "HackerRank",
      description: "",
      image: "hackerrank_logo.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hackerrank.com/certificates/0c7594fbb13a",
        },
      ],
    },
    {
      title: "Become an Ethical Hacker",
      dates: "Feb 2023",
      location: "LinkedIn",
      description: "",
      image: "linkedin_logo.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/be89b8e747dc75bddeb8f8db4e40e5321f510bc457afd99353414f054fe228d8",
        },
      ],
    },
    {
      title: "Certificate of Participation",
      dates: "Feb 2023",
      location: "Indian Institute of Management Ahmedabad",
      description: "",
      image: "iimahmedabad_logo.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/af9d9292-f6e6-4b15-b077-9c4dc8c953b2",
        },
      ],
    },
    {
      title: "Introduction to SQL for Data Science",
      dates: "Feb 2023",
      location: "Scaler",
      description: "",
      image: "scaler.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://moonshot.scaler.com/s/sl/NA-hqFy8FW",
        },
      ],
    },
    {
      title: "Navigating Cybersecurity and Clouding Inside Out",
      dates: "Feb 2023",
      location: "TechnoMech VIT",
      description: "",
      image: "techmech.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1sqJ-YdR54aa3qGukPdtAwM3ih6ZvyaJF/view?usp=sharing",
        },
      ],
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      dates: "Dec 2022",
      location: "Google",
      description: "",
      image: "google.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://in.coursera.org/account/accomplishments/verify/FTK2E5KFLG9H?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        },
      ],
    },
    {
      title: "Techno Innovation Rally Organized",
      dates: "Sep 2022",
      location: "HEALTH-O-TECH",
      description: "",
      image: "healthotech_logo.jpeg",
      win: "",
      mlh: "",
      links: [
        {
          title: "Certificate Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1xxN_UyeTA6NlZh5YuvAZ0bd3kMGc1y6Y/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
