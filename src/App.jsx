import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Folder,
  FileDown,
  Mail,
  Github,
  Linkedin,
  Database,
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import Ripple from "./Ripple";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState("#contact");

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

  return (
    <main className="min-h-screen font-sans bg-[#F9FAFB] text-zinc-800 scroll-smooth relative overflow-hidden">
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

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden flex flex-col gap-4 p-4 bg-white border-b border-zinc-200 shadow"
        >
          {["home", "about", "tools", "projects"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item}`}
              onClick={toggleMenu}
              className="flex items-center gap-1"
            >
              {item === "home" && <Home size={16} />}
              {item === "about" && <User size={16} />}
              {item === "tools" && <Database size={16} />}
              {item === "projects" && <Folder size={16} />}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="/Akpos_Resume.pdf"
            download
            onClick={toggleMenu}
            className="flex items-center gap-1 bg-[#2DD4BF] text-white px-3 py-1 rounded hover:bg-[#7C3AED] font-medium"
          >
            <FileDown size={16} /> Download Resume
          </a>
        </motion.div>
      )}

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
        whileTap={{ scale: 0.98 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-white rounded-lg shadow border border-zinc-200 transition relative z-10"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold text-zinc-800 mb-4"
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
          className="text-2xl font-semibold mb-4"
        >
          Tools & Stack
        </motion.h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            {
              icon: <FaHtml5 size={30} color="#E34F26" />,
              shadow: "rgba(227, 79, 38, 0.6)",
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              icon: <FaCss3Alt size={30} color="#1572B6" />,
              shadow: "rgba(21, 114, 182, 0.6)",
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
              icon: <FaJsSquare size={30} color="#F7DF1E" />,
              shadow: "rgba(247, 223, 30, 0.6)",
              href: "https://www.javascript.com/",
            },
            {
              icon: <FaReact size={30} color="#61DBFB" />,
              shadow: "rgba(97, 219, 251, 0.6)",
              href: "https://react.dev/",
            },
            {
              icon: <Database size={30} color="#2DD4BF" />,
              shadow: "rgba(45, 212, 191, 0.6)",
              href: "https://supabase.com/",
            },
          ].map(({ icon, href, shadow }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              custom={i}
              variants={iconFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                rotate: 360,
                filter: `drop-shadow(0 0 12px ${shadow})`,
                scale: 1.1,
              }}
              whileTap={{
                rotate: 360,
                filter: `drop-shadow(0 0 12px ${shadow})`,
                scale: 1.1,
              }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full transition bg-white"
            >
              {icon}
            </motion.a>
          ))}
        </div>
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
          className="text-2xl font-semibold text-zinc-800 mb-4"
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
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(45, 212, 191, 0.2)",
          borderColor: "#7C3AED",
        }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-12 max-w-3xl mx-auto bg-white rounded-lg shadow border border-zinc-200 transition relative z-10"
      >
        <motion.h3
          variants={sectionFade}
          className="text-2xl font-semibold mb-4"
        >
          Contact
        </motion.h3>
        <ul className="space-y-2 text-zinc-700">
          {[
            {
              icon: <Mail size={18} />,
              text: "ogbontheakpos@gmail.com",
              href: "mailto:ogbontheakpos@gmail.com",
            },
            {
              icon: <Github size={18} />,
              text: "github.com/dahgrate",
              href: "https://github.com/dahgrate",
            },
            {
              icon: <Linkedin size={18} />,
              text: "linkedin.com/in/akpos-ogbon",
              href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351",
            },
          ].map(({ icon, text, href }, i) => (
            <motion.li
              key={i}
              whileTap={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2"
            >
              {icon}{" "}
              <a href={href} className="text-[#7C3AED] hover:underline">
                {text}
              </a>
            </motion.li>
          ))}
        </ul>
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
