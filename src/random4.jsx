import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Folder,
  FileDown,
  Mail,
  Github,
  Linkedin,
  Database,
  Zap,
  Pencil,
} from "lucide-react";
import {
  FaMedium,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import Ripple from "./Ripple";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState("#contact");
  const [toolDescription, setToolDescription] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const toolsSection = document.getElementById("tools");
      const toolsPosition = toolsSection?.offsetTop || 0;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY + window.innerHeight / 2 < toolsPosition) {
        setScrollTarget("#contact");
      } else {
        setScrollTarget("#home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const tapEffect = { scale: 0.95, rotate: -2 };

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.4, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const tools = [
    {
      icon: <FaHtml5 size={30} color="#E34F26" />,
      label: "HTML5",
      desc: "I craft clean, accessible structure for modern, user-friendly websites.",
    },
    {
      icon: <FaCss3Alt size={30} color="#1572B6" />,
      label: "CSS3",
      desc: "I style interfaces with responsive, elegant, and engaging visuals.",
    },
    {
      icon: <FaJsSquare size={30} color="#F7DF1E" />,
      label: "JavaScript",
      desc: "I bring pages to life with dynamic, interactive features.",
    },
    {
      icon: <FaReact size={30} color="#61DBFB" />,
      label: "React",
      desc: "I build fast, scalable frontends with reusable components.",
    },
    {
      icon: <Zap size={30} color="#2DD4BF" />,
      label: "Supabase",
      desc: "I connect secure backends with real-time data and auth.",
    },
  ];

  const expertiseList = [
    {
      icon: <FaReact />,
      label: "Frontend Development",
      desc: "Modern, responsive interfaces with React and friends.",
    },
    {
      icon: <Database />,
      label: "Backend Integration",
      desc: "Connecting frontend to secure backend services like Supabase.",
    },
    {
      icon: <Pencil />,
      label: "Design Customization",
      desc: "Unique, user-focused designs directed to the last detail.",
    },
    {
      icon: <Folder />,
      label: "Project Planning",
      desc: "Research-driven project setup, clear user flows & structure.",
    },
    {
      icon: <Home />,
      label: "SEO & Visibility",
      desc: "Making your site discoverable and visible to the world.",
    },
  ];

  const contactLinks = [
    { icon: <Mail size={24} />, href: "mailto:ogbontheakpos@gmail.com" },
    { icon: <Github size={24} />, href: "https://github.com/dahgrate" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351" },
    { icon: <FaMedium size={28} />, href: "https://medium.com/@dahgrate" },
  ];

  return (
    <main className="min-h-screen font-raleway bg-[#5C5470] text-[#EDEDF2] scroll-smooth relative overflow-hidden">
      <Ripple />

      {/* NAVBAR - unchanged */}
      {/* HERO - unchanged */}

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-[#5C5470] rounded-xl shadow-xl text-center"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4"
        >
          About Me
        </motion.h3>
        <motion.p variants={sectionFade}>
          I build secure, modern web apps with React, Supabase, OWASP best practices, Wireshark & Burp Suite.
        </motion.p>
      </motion.section>

      {/* TOOLS */}
      <motion.section
        id="tools"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-4xl mx-auto text-center"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-8"
        >
          Tools & Stack
        </motion.h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {tools.map((tool, i) => (
            <motion.div key={i} className="flex flex-col items-center">
              <motion.a
                onClick={() => setToolDescription(toolDescription === i ? null : i)}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                className="cursor-pointer"
              >
                {tool.icon}
              </motion.a>
              <span>{tool.label}</span>
              {toolDescription === i && (
                <p className="mt-2 text-sm max-w-xs">{tool.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPERTISE */}
      <motion.section
        id="expertise"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#5C5470] rounded-xl shadow-xl"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4 col-span-full text-center"
        >
          Expertise
        </motion.h3>
        {expertiseList.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-[#5C5470] shadow border border-[#837CA0]"
          >
            <div className="text-3xl mb-2">{exp.icon}</div>
            <h4 className="font-bold mb-2">{exp.label}</h4>
            <p className="text-sm">{exp.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-[#5C5470] rounded-xl shadow-xl text-center"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4"
        >
          Projects
        </motion.h3>
        <p className="mb-4">
          Example: DuetDays — a productivity app with React & Supabase.
        </p>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-[#5C5470] rounded-xl shadow-xl text-center"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4"
        >
          Contact Me
        </motion.h3>
        <div className="flex justify-center gap-6">
          {contactLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" className="text-2xl">
              {link.icon}
            </a>
          ))}
        </div>
      </motion.section>

      {/* FOOTER & ARROW - unchanged */}
    </main>
  );
}
