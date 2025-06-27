import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Folder,
  FileDown,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { SiHtml5, SiJavascript, SiReact, SiPostgresql } from "react-icons/si";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const tap = { whileTap: { scale: 0.9 } };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="p-6 border-b border-zinc-700 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meet the Developer</h1>
        <ul className="hidden md:flex gap-6 text-sm items-center">
          <motion.li {...tap} className="flex items-center gap-1 hover:text-emerald-400">
            <Home size={16} /> <a href="#home">Home</a>
          </motion.li>
          <motion.li {...tap} className="flex items-center gap-1 hover:text-emerald-400">
            <User size={16} /> <a href="#about">About</a>
          </motion.li>
          <motion.li {...tap} className="flex items-center gap-1 hover:text-emerald-400">
            <Folder size={16} /> <a href="#projects">Projects</a>
          </motion.li>
          <motion.li {...tap}>
            <a
              href="/Akpos_Resume.pdf"
              download
              className="flex items-center gap-1 bg-emerald-500 text-zinc-900 px-3 py-1 rounded hover:bg-emerald-400 font-medium"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.li>
        </ul>
        <button className="md:hidden flex flex-col gap-1" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-zinc-800 border-b border-zinc-700">
          <a href="#home" onClick={toggleMenu} className="flex items-center gap-1"><Home size={16} /> Home</a>
          <a href="#about" onClick={toggleMenu} className="flex items-center gap-1"><User size={16} /> About</a>
          <a href="#projects" onClick={toggleMenu} className="flex items-center gap-1"><Folder size={16} /> Projects</a>
          <a
            href="/Akpos_Resume.pdf"
            download
            onClick={toggleMenu}
            className="flex items-center gap-1 bg-emerald-500 text-zinc-900 px-3 py-1 rounded hover:bg-emerald-400 font-medium"
          >
            <FileDown size={16} /> Download Resume
          </a>
        </div>
      )}

      {/* Home */}
      <section
        id="home"
        className="px-6 py-20 text-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Akpos
        </motion.h2>
        <p className="text-lg text-zinc-300">Frontend Developer | Cybersecurity Enthusiast</p>
      </section>

      {/* About */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-12 max-w-2xl mx-auto bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg shadow border border-zinc-600"
      >
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold mb-4"
        >
          About Me
        </motion.h3>
        <p className="text-zinc-300">
          I'm a frontend developer with real-world experience using React and Supabase.
          I also completed an intro cybersecurity program focused on OWASP Top 10 and secure coding.
          I enjoy building responsive, accessible UIs and improving web security and performance.
        </p>
      </motion.section>

      {/* Tools */}
      <motion.section
        id="tools"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 py-12 max-w-2xl mx-auto"
      >
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold mb-4"
        >
          Tools & Stack
        </motion.h3>
        <div className="flex flex-wrap gap-8 justify-center text-zinc-300">
          <SiHtml5 size={50} className="text-orange-500" />
          <SiJavascript size={50} className="text-yellow-400" />
          <SiReact size={50} className="text-cyan-400" />
          <SiPostgresql size={50} className="text-blue-500" />
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-12 pb-12 mb-12 max-w-2xl mx-auto bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg shadow border border-zinc-600 hover:shadow-xl transition transform hover:scale-105"
      >
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold mb-4"
        >
          Projects
        </motion.h3>
        <div className="bg-gray-700 p-4 rounded shadow border border-zinc-600">
          <h4 className="text-xl font-semibold">DuetDays App</h4>
          <p className="text-zinc-200 mt-2">
            A productivity tracker built with React and Supabase. Includes user authentication,
            real-time tasks, and SEO indexing.
          </p>
          <a
            href="https://preview--duet-days.lovable.app"
            target="_blank"
            rel="noopener"
            className="text-emerald-400 hover:underline mt-2 inline-block"
          >
            View Live
          </a>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 pt-12 mt-12 pb-12 max-w-2xl mx-auto bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg shadow border border-zinc-600 hover:shadow-xl transition transform hover:scale-105"
      >
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold mb-4"
        >
          Contact
        </motion.h3>
        <ul className="space-y-2 text-zinc-300">
          <li className="flex items-center gap-2 hover:scale-105 transition">
            <Mail size={18} />{" "}
            <a
              href="mailto:ogbontheakpos@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              ogbontheakpos@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 hover:scale-105 transition">
            <Github size={18} />{" "}
            <a
              href="https://github.com/dahgrate"
              className="text-emerald-400 hover:underline"
            >
              github.com/dahgrate
            </a>
          </li>
          <li className="flex items-center gap-2 hover:scale-105 transition">
            <Linkedin size={18} />{" "}
            <a
              href="https://www.linkedin.com/in/akpos-ogbon-3aa291351"
              className="text-emerald-400 hover:underline"
            >
              linkedin.com/in/akpos-ogbon
            </a>
          </li>
        </ul>
      </motion.section>

     <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-700">
  &copy; {new Date().getFullYear()} AkposWorld. All rights reserved.
</footer>


      <ScrollToTop />
    </main>
  );
}
