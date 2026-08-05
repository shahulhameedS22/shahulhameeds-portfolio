export const profile = {
  name: "Shahul Hameed S",
  role: "Computer Science Engineer | IT Engineer Trainee | Networking & VMware ESXi Enthusiast",
  typingRoles: [
    "Computer Science Engineer",
    "IT Engineer Trainee @ Trainocate",
    "Networking Enthusiast",
    "VMware ESXi & Virtualization",
  ],
  intro:
    "I am a Computer Science Engineer currently working as an IT Engineer Trainee at Trainocate. I have a strong interest in networking, virtualization, and data center technologies, particularly VMware ESXi and enterprise network infrastructure. I enjoy solving technical challenges while continuously expanding my expertise in IT infrastructure. My long-term goal is to become a successful networking professional, take on leadership roles, and contribute to impactful projects in the networking and virtualization industry.",
  email: "syedshaha2003@gmail.com",
  phone: "+91 9345026255",
  location: "Trichy, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/shahul-hameed-s-63814127b/",
  github: "https://github.com/shahulhameedS22",
};

export const highlights = [
  "Computer Science Engineer",
  "Currently working at Trainocate",
  "Passionate about Networking",
  "Passionate about VMware ESXi",
  "Data Center Technologies",
  "Enterprise Infrastructure",
  "Continuous learner",
  "Strong leadership experience",
  "Team player",
  "Problem solver",
];

export const counters = [
  { value: 2026, label: "Graduation Year", suffix: "" },
  { value: 7.8, label: "CGPA / 10", suffix: "", decimals: 1 },
  { value: 40, label: "Technologies & Tools", suffix: "+" },
  { value: 3, label: "Major Events Organized", suffix: "" },
];

export const education = [
  {
    title: "Bachelor of Engineering — Computer Science Engineering",
    org: "Government College of Engineering, Srirangam",
    period: "Graduating 2026",
    points: ["CGPA: 7.8 / 10", "Core focus: Networking, Operating Systems, Databases"],
  },
];

export const experience = [
  {
    title: "IT Engineer Trainee",
    org: "Trainocate",
    period: "June 2026 – Present",
    points: [
      "Deploy and manage virtual machines using VMware ESXi.",
      "Configure and troubleshoot virtualization environments.",
      "Support enterprise networking and virtualization infrastructure.",
      "Assist in VM provisioning and resource allocation.",
      "Monitor ESXi hosts and virtual machine performance.",
      "Troubleshoot virtualization and networking issues.",
      "Collaborate with technical teams to resolve infrastructure problems.",
      "Gain hands-on experience with enterprise data center technologies.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Networking",
    icon: "network",
    level: 88,
    items: [
      "CCNA (Currently Studying)",
      "TCP/IP",
      "IPv4",
      "IPv6",
      "Routing",
      "Switching",
      "VLAN",
      "Static Routing",
      "OSPF",
      "EIGRP",
      "BGP Fundamentals",
      "NAT",
      "ACL",
      "DHCP",
      "DNS",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Virtualization",
    icon: "server",
    level: 85,
    items: [
      "VMware ESXi",
      "VMware vSphere",
      "VMware vCenter",
      "Virtual Machines",
      "Resource Allocation",
      "VM Deployment",
      "Snapshot Management",
      "Virtual Networking",
      "Data Center Fundamentals",
    ],
  },
  { title: "Programming", icon: "code", level: 75, items: ["Python"] },
  { title: "Database", icon: "database", level: 70, items: ["MySQL"] },
  {
    title: "Operating Systems",
    icon: "monitor",
    level: 80,
    items: ["Windows", "Windows Server", "Linux"],
  },
  {
    title: "Tools",
    icon: "wrench",
    level: 82,
    items: [
      "VMware Workstation",
      "Cisco Packet Tracer",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
  },
] as const;

export const projects = [
  {
    title: "AI-Assisted Mock Test Platform for Bank Exam Preparation",
    description:
      "Developed an intelligent mock test platform that assists bank exam aspirants in evaluating and improving their performance using AI-driven insights.",
    features: [
      "AI-generated bank exam questions using Agentic AI and Large Language Models (LLMs).",
      "Overall performance analysis.",
      "Section-wise analysis (Aptitude, Reasoning, English).",
      "Weak and strong area identification.",
      "Personalized recommendations.",
      "Topic-wise improvement suggestions.",
      "Performance tracking dashboard.",
    ],
    tech: ["Java", "React", "Agentic AI", "Large Language Models (LLM)"],
    repo: "https://github.com/shahulhameedS22/AI-Mock-Test-Project.git",
    badge: "Agentic AI · Full Stack",
  },
  {
    title: "Tutor AI",
    description:
      "Developed an AI-powered interview preparation platform for technical and HR interview practice. Integrated LLM-based question generation and personalized feedback to improve interview performance. Built a full-stack web application with secure authentication, interview history, and performance tracking.",
    features: [
      "AI-powered technical and HR interview practice.",
      "LLM-based interview question generation.",
      "Personalized feedback and improvement suggestions.",
      "Secure user authentication and account management.",
      "Interview history and progress tracking.",
      "Performance analytics dashboard.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "LLM"],
    repo: "https://github.com/shahulhameedS22/Tutor_AI.git",
    badge: "AI Tutor · Full Stack",
  },
];

export const certifications = [
  { title: "SOC Analyst", org: "Udemy", status: "In Progress" },
  {
    title: "Concepts of Digital Marketing & Web Development",
    org: "Layerscode Technologies",
    status: "Completed Internship",
  },
  { title: "Data Science", org: "Acmegrade", status: "Completed Training" },
];

export const achievements = [
  {
    title: "President — Fine Arts Club",
    org: "Government College of Engineering, Srirangam",
    icon: "crown",
    points: [
      "Led cultural and technical initiatives.",
      "Managed teams and volunteers.",
      "Coordinated faculty and students.",
      "Strengthened leadership, communication, and organizational skills.",
    ],
  },
  {
    title: "Event Organizer",
    org: "Successfully organized",
    icon: "calendar",
    points: [
      "Freshers' Induction Programme",
      "Kalloori Kazhai Thiruvizha 2026",
      "ALTRONIX'26 National Level Technical Symposium",
    ],
  },
  {
    title: "Overall Winner — Technical Symposium",
    org: "Government College of Engineering, Coimbatore",
    icon: "trophy",
    points: ["Secured overall championship at an inter-college technical symposium."],
  },
  {
    title: "5th Best Batsman",
    org: "Anna University Zonal Cricket Tournament",
    icon: "medal",
    points: ["Recognised among the top batsmen of the zonal tournament."],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
