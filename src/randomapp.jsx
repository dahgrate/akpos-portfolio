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
import { FaMedium } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
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

  const iconFade = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
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
    { icon: <FaHtml5 size={30} color="#E34F26" />, label: "HTML5", desc: "I craft clean, accessible structure for modern, user-friendly websites." },
    { icon: <FaCss3Alt size={30} color="#1572B6" />, label: "CSS3", desc: "I style interfaces with responsive, elegant, and engaging visuals." },
    { icon: <FaJsSquare size={30} color="#F7DF1E" />, label: "JavaScript", desc: "I bring pages to life with dynamic, interactive features." },
    { icon: <FaReact size={30} color="#61DBFB" />, label: "React", desc: "I build fast, scalable frontends with reusable components." },
    { icon: <Zap size={30} color="#2DD4BF" />, label: "Supabase", desc: "I connect secure backends with real-time data and auth." },
  ];
  
  const expertiseList = [
    { icon: <FaReact />, label: "Frontend Development", desc: "Modern, responsive interfaces with React and friends." },
    { icon: <Database />, label: "Backend Integration", desc: "Connecting frontend to secure backend services like Supabase." },
    { icon: <Pencil />, label: "Design Customization", desc: "Unique, user-focused designs directed to the last detail." },
    { icon: <Folder />, label: "Project Planning", desc: "Research-driven project setup, clear user flows & structure." },
    { icon: <Home />, label: "SEO & Visibility", desc: "Making your site discoverable and visible to the world." },
  ];

  const contactLinks = [
    { icon: <Mail size={24} />, href: "mailto:ogbontheakpos@gmail.com" },
    { icon: <Github size={24} />, href: "https://github.com/dahgrate" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351" },
    { icon: <FaMedium size={28} />, link: "https://medium.com/@dahgrate" },
  ];

  return (
    <main className="min-h-screen font-raleway  bg-fossil-bg text-fossil-text scroll-smooth relative overflow-hidden">
      <Ripple />

      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center border-b border-zinc-200 bg-white shadow-sm relative z-10">
        <h1 className="text-xl font-bold text-zinc-800">Meet the Developer</h1>

        <ul className="hidden md:flex gap-6 text-sm items-center">
          {["home", "about", "tools", "projects"].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1, color: "#2DD4BF" }}
              whileTap={tapEffect}
              className="flex items-center gap-1 hover:text-[#2DD4BF] transition"
            >
              {item === "home" && <Home size={16} />}
              {item === "about" && <User size={16} />}
              {item === "tools" && <Database size={16} />}
              {item === "projects" && <Folder size={16} />}
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <a
              href="/Akpos_Resume.pdf"
              download
              className="flex items-center gap-1 bg-[#2DD4BF] text-white px-3 py-1 rounded hover:bg-[#7C3AED] font-medium transition"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.li>
        </ul>

        <button className="md:hidden flex flex-col gap-1" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-zinc-800"></span>
          <span className="w-6 h-0.5 bg-zinc-800"></span>
          <span className="w-6 h-0.5 bg-zinc-800"></span>
        </button>
      </nav>

      {/* Sidebar with backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-30"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-full w-64 bg-white/60 backdrop-blur shadow-lg flex flex-col gap-6 p-6 border-r border-zinc-200 z-40"
            >
              {["home", "about", "tools", "projects"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="flex items-center gap-2 text-lg text-zinc-800"
                >
                  {item === "home" && <Home size={20} />}
                  {item === "about" && <User size={20} />}
                  {item === "tools" && <Database size={20} />}
                  {item === "projects" && <Folder size={20} />}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <a
                href="/Akpos_Resume.pdf"
                download
                onClick={toggleMenu}
                className="flex items-center gap-2 bg-[#2DD4BF] text-white px-3 py-2 rounded hover:bg-[#7C3AED] font-medium"
              >
                <FileDown size={20} /> Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <motion.section
        id="home"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        className="px-6 py-24 text-center relative z-10"
      >
        <motion.h2
          variants={sectionFade}
          className="text-5xl font-bold mb-4 text-zinc-900 typewriter inline-block"
        >
          Hi, I'm Akpos
        </motion.h2>
        <motion.p variants={sectionFade} className="text-lg text-zinc-600">
          Frontend Developer | Cybersecurity Enthusiast
        </motion.p>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(45, 212, 191, 0.2)",
          borderColor: "#2DD4BF",
        }}
        whileTap={{
          scale: 1.02,
          boxShadow:
            "0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(45, 212, 191, 0.2)",
          borderColor: "#2DD4BF",
        }}
        className="px-6 py-12 max-w-3xl mx-auto bg-white rounded-lg shadow border border-zinc-200 transition relative z-10"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold text-zinc-800 mb-4 text-center"
        >
          About Me
        </motion.h3>
        <motion.p variants={sectionFade} className="text-zinc-700">
          I build secure, modern web apps with React, Supabase, OWASP best
          practices, Wireshark & Burp Suite.
        </motion.p>
      </motion.section>

{/* TOOLS */}
<motion.section
  id="tools"
  variants={sectionFade}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
  className="px-6 py-12 max-w-3xl mx-auto relative z-10"
>
  <motion.h3
    variants={sectionFade}
    className="text-2xl font-semibold mb-4 text-center"
  >
    Tools & Stack
  </motion.h3>
    
  <div className="flex flex-col gap-8 items-center">
    {[
      {
        icon: <FaHtml5 size={30} color="#E34F26" />,
        shadow: "rgba(227, 79, 38, 0.6)",
        desc: "I craft clean, accessible structure for modern, user-friendly websites."
      },
      {
        icon: <FaCss3Alt size={30} color="#1572B6" />,
        shadow: "rgba(21, 114, 182, 0.6)",
        desc: "I style interfaces with responsive, elegant, and engaging visuals."
      },
      {
        icon: <FaJsSquare size={30} color="#F7DF1E" />,
        shadow: "rgba(247, 223, 30, 0.6)",
        desc: "I bring pages to life with dynamic, interactive features."
      },
      {
        icon: <FaReact size={30} color="#61DBFB" />,
        shadow: "rgba(97, 219, 251, 0.6)",
        desc: "I build fast, scalable frontends with reusable components."
      },
      {
        icon: <Database size={30} color="#2DD4BF" />,
        shadow: "rgba(45, 212, 191, 0.6)",
        desc: "I connect secure backends with real-time data and auth."
      },
    ].map(({ icon, shadow, desc }, i) => (
      <motion.div
        key={i}
        className="flex flex-col items-center"
      >
        <motion.a
          onClick={() => setToolDescription(i === toolDescription ? null : i)}
          whileHover={{
            rotate: [0, 360],
            transition: { repeat: Infinity, ease: "linear", duration: 1.5 },
            filter: `drop-shadow(0 0 12px ${shadow})`,
            scale: 1,
          }}
          animate={
            toolDescription === i
              ? {
                  rotate: [0, 360],
                  transition: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1.5,
                  },
                  filter: `drop-shadow(0 0 12px ${shadow})`,
                  scale: 1,
                }
              : { rotate: 0, filter: "none", scale: 1 }
          }
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white cursor-pointer"
        >
          {icon}
        </motion.a>
        {toolDescription === i && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 200 }
            }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-2 relative px-4 py-2 text-sm bg-white font-mono"
          >
            {/* Left pillar */}

<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 pixel-pillars" />

            <div className="pl-3 pr-3">
              {desc}
            </div>
          </motion.div>
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
        className="px-6 py-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
          <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4 text-center"
        >
          Expertise
        </motion.h3>
        {expertiseList.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-xl shadow border border-zinc-200 flex flex-col items-center justify-center"
          >
            <div className="text-[#7C3AED] text-3xl mb-2">{exp.icon}</div>
            <h4 className="font-bold mb-1">{exp.label}</h4>
            <p className="text-sm text-zinc-600 text-center">{exp.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-white rounded-lg shadow border border-zinc-200 mb-12 relative z-10"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold text-zinc-800 mb-4 text-center"
        >
          Projects
        </motion.h3>
        <motion.div
          whileHover={{
            scale: 1.03,
            boxShadow:
              "0 0 20px rgba(250, 204, 21, 0.4), 0 0 40px rgba(250, 204, 21, 0.4)",
            borderColor: "#FACC15",
          }}
          whileTap={{
            scale: 1.03,
            boxShadow:
              "0 0 20px rgba(250, 204, 21, 0.4), 0 0 40px rgba(250, 204, 21, 0.4)",
            borderColor: "#FACC15",
          }}
          transition={{ duration: 0.4 }}
          className="bg-[#F1F5F9] p-4 rounded shadow border border-zinc-200"
        >
          <h4 className="text-xl font-semibold">DuetDays App</h4>
          <p className="text-zinc-700 mt-2">
            A productivity tracker built with React & Supabase. Includes user
            auth, real-time tasks, SEO indexing.
          </p>
          <a
            href="https://preview--duet-days.lovable.app"
            target="_blank"
            className="text-[#7C3AED] hover:underline mt-2 inline-block"
          >
            View Live
          </a>
        </motion.div>
      </motion.section>

 {/* CONTACT */}
      <motion.section
        id="contact"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        onClick={(e) => {
          if (e.target.tagName !== "A") {
            document.querySelectorAll("#contact a").forEach((el) => {
              el.classList.add("animate-bounce");
              setTimeout(() => el.classList.remove("animate-bounce"), 600);
            });
          }
        }}
        className="px-6 py-12 max-w-3xl mx-auto bg-white rounded-lg shadow border border-zinc-200 relative z-10"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4 text-center"
        >
          Contact the Developer
        </motion.h3>
        <div className="flex flex-col items-center gap-6">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              whileTap={{ scale: 1.2 }}
              className="text-[#7C3AED] text-3xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-200">
        &copy; {new Date().getFullYear()} AkposWorld. All rights reserved.
      </footer>

      {/* Smart Arrow ➤ */}
      <motion.a
        href={scrollTarget}
        className="fixed bottom-6 right-6 z-50 text-3xl text-[#2DD4BF] drop-shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        ➤
      </motion.a>
    </main>
  );
}
