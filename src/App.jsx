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
import { FaMedium, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import Ripple from "./Ripple";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState("#projects");
  const [toolDescription, setToolDescription] = useState(null);
 
const [currentIndex, setCurrentIndex] = useState(0);
const [touchStartX, setTouchStartX] = useState(null);
const [time, setTime] = useState("");
const [aboutInView, setAboutInView] = useState(false);
const [projectsInView, setProjectsInView] = useState(false);
const [expertiseInView, setExpertiseInView] = useState(false);
const [toolsInView, setToolsInView] = useState(false);


// ABOUT
const typedAboutHeading = useTypingEffect("About Me", 80, aboutInView);
const typedAboutContent = useTypingEffect(
  "I build secure, modern web apps with React, Supabase, OWASP best practices, Wireshark & Burp Suite.",
  6,
  aboutInView
);

// PROJECTS
const typedProjectsHeading = useTypingEffect("Projects", 80, projectsInView);

// EXPERTISE
const typedExpertiseHeading = useTypingEffect("Expertise", 80, expertiseInView);

// TOOLS
const typedToolsHeading = useTypingEffect("Tools & Stack", 80, toolsInView)

useEffect(() => {
  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  updateClock();
  const interval = setInterval(updateClock, 1000);

  return () => clearInterval(interval);
}, []);

const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchEnd = (e) => {
  if (touchStartX === null) return;
  const touchEndX = e.changedTouches[0].clientX;
  const diffX = touchStartX - touchEndX;

  if (diffX > 50) {
    // Swipe Left = Next
    setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
  } else if (diffX < -50) {
    // Swipe Right = Prev
    setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
  }

  setTouchStartX(null);
};

  const toggleMenu = () => setIsOpen(!isOpen);

 useEffect(() => {
  const handleScroll = () => {
    const expertiseSection = document.getElementById("expertise");
    const expertisePosition = expertiseSection?.offsetTop || 0;
    const scrollY = window.scrollY || window.pageYOffset;

    // If we haven't scrolled PAST expertise, arrow goes down to #contact
    if (scrollY + window.innerHeight / 2 < expertisePosition) {
      setScrollTarget("#projects");
    } else {
      // If we are PAST expertise, arrow goes back to top (#home)
      setScrollTarget("#home");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

function useTypingEffect(text, speed = 50, active = true) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayed;
}



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
    { icon: <FaHtml5 size={30} color="#E34F26" />, label: "HTML5", desc: "I use HTML to craft clean, accessible structure for modern, user-friendly websites." },
    { icon: <FaCss3Alt size={30} color="#1572B6" />, label: "CSS3", desc: "With the utilisation of CSS I am able to style interfaces with responsive, elegant, and engaging visuals." },
    { icon: <FaJsSquare size={30} color="#F7DF1E" />, label: "JavaScript", desc: "Using JavaScipt, I bring pages to life with dynamic, interactive features." },
    { icon: <FaReact size={30} color="#61DBFB" />, label: "React", desc: "React helps me I build fast, scalable frontends with reusable components." },
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
    { icon: <FaMedium size={28} />, href: "https://medium.com/@dahgrate" },
  ];

  return (
    <main className="min-h-screen anton-regular bg-[#5C5470] text-[#EDEDF2] scroll-smooth relative overflow-hidden">
      <Ripple />

      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center border-b border-[#282538] bg-[#282538] shadow-sm relative z-10">
        <h1 className="text-xl font-bold text-[#EDEDF2]">Meet the Developer</h1>

        <ul className="hidden md:flex gap-6 text-sm items-center">
          {["home", "about", "tools", "projects"].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={tapEffect}
              className="flex items-center gap-1 text-[#EDEDF2] hover:text-[#26b1a1] transition"
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
              className="flex items-center gap-1 bg-[#26b1a1] text-white px-3 py-1 rounded hover:bg-[#7C3AED] font-medium transition"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.li>
        </ul>

        <button className="md:hidden flex flex-col gap-1" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
        </button>
      </nav>

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
  className="fixed top-0 left-0 h-full w-64 bg-[#2A253A]/60 backdrop-blur-lg shadow-lg flex flex-col gap-6 p-6 border-r border-[#282538] z-40 text-white"
>

  {["home", "about", "tools", "projects"].map((item, idx) => (
    <a
      key={idx}
      href={`#${item}`}
      onClick={toggleMenu}
      className="flex items-center gap-2 text-lg"
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
    className="flex items-center gap-2 bg-[#26b1a1] text-white px-3 py-2 rounded hover:bg-[#7C3AED] font-medium"
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
  initial="hidden"
  animate="visible"
  className="relative px-6 py-48 text-center flex flex-col items-center justify-center overflow-hidden"
>
  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/herovid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay for darkness */}
  <div className="absolute inset-0 bg-black/40"></div>
  <motion.h2
    initial={{ width: 0 }}
    animate={{ width: "fit-content" }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className="text-5xl font-bold mb-4 overflow-hidden border-r-4 border-[#26b1a1] whitespace-nowrap relative text-[#EDEDF2]"
  >
    Hi, I'm Akpos
  </motion.h2>

  {/* Added mb-12 for spacing below this line */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1 }}
    className="text-lg relative text-[#EDEDF2] mb-12"
  >
    Frontend Developer | Cybersecurity Enthusiast
  </motion.p>

  {/* Floating Contact Icons with entrance */}
  <motion.div className="flex gap-6">
    {[
      {
        icon: <Mail size={20} color="#D14836" />,
        href: "mailto:ogbontheakpos@gmail.com",
        slideFrom: "top",
      },
      {
        icon: <Github size={20} color="#FFFFFF" />,
        href: "https://github.com/dahgrate",
        slideFrom: "bottom",
      },
      {
        icon: <Linkedin size={20} color="#0A66C2" />,
        href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351",
        slideFrom: "top",
      },
      {
        icon: <FaMedium size={22} color="#000000" />,
        href: "https://medium.com/@dahgrate",
        slideFrom: "bottom",
      },
    ].map((link, idx) => (
      <motion.a
        key={idx}
        href={link.href}
        target="_blank"
        initial={{ opacity: 0, y: link.slideFrom === "top" ? -50 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {link.icon}
        </motion.div>
      </motion.a>
    ))}
  </motion.div>
</motion.section>


{/* ABOUT */}
<motion.section
  id="about"
  variants={sectionFade}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
   onViewportEnter={() => setAboutInView(true)}
  whileHover={{
    scale: 1.02,
    boxShadow:
      "0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(45, 212, 191, 0.2)",
    borderColor: "#2DD4BF",
  }}
  style={{
  backgroundImage: "url('/sectionsvg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

  whileTap={{
    scale: 1.02,
    boxShadow:
      "0 0 20px rgba(124, 58, 237, 0.2), 0 0 40px rgba(45, 212, 191, 0.2)",
    borderColor: "#2DD4BF",
  }}
  className="relative px-6 py-12 max-w-3xl mx-auto bg-[#3a354add] rounded-lg shadow overflow-hidden transition z-10"
>
  {/* TOP & BOTTOM FRAME LINES */}
  <span className="absolute top-0 left-1/4 w-1/2 border-t-2 border-[#EDEDF2]"></span>
  <span className="absolute bottom-0 left-1/4 w-1/2 border-b-2 border-[#EDEDF2]"></span>

 <motion.h3
  variants={sectionFade}
  className="text-2xl font-semibold text-zinc-100 mb-4 text-center"
>
  {typedAboutHeading}
</motion.h3>
<motion.p variants={sectionFade} className="text-zinc-200">
  {typedAboutContent}
</motion.p>

</motion.section>

{/* TOOLS */}
<motion.section
  id="tools"
  variants={sectionFade}
  initial="hidden"
  whileInView="visible"
  onViewportEnter={() => setToolsInView(true)}
  viewport={{ once: false, amount: 0.4 }}
  className="px-6 py-12 max-w-3xl mx-auto relative z-10 anton-regular"
>
 <motion.h3
  variants={sectionFade}
  className="text-2xl font-semibold text-zinc-100 mb-4 text-center"
>
  {typedToolsHeading}
</motion.h3>

  <div className="flex flex-col gap-8 items-center">
    {[
      {
        icon: <FaHtml5 size={30} color="#E34F26" />,
        shadow: "rgba(227, 79, 38, 0.6)",
        border: "#E34F26",
        desc:
          "I use HTML to craft clean, accessible structure for modern, user-friendly websites.",
      },
      {
        icon: <FaCss3Alt size={30} color="#1572B6" />,
        shadow: "rgba(21, 114, 182, 0.6)",
        border: "#1572B6",
        desc:
          "With the utilisation of CSS I am able to style interfaces with responsive, elegant, and engaging visuals.",
      },
      {
        icon: <FaJsSquare size={30} color="#F7DF1E" />,
        shadow: "rgba(247, 223, 30, 0.6)",
        border: "#F7DF1E",
        desc: "Using JavaScipt, I bring pages to life with dynamic, interactive features.",
      },
      {
        icon: <FaReact size={30} color="#61DBFB" />,
        shadow: "rgba(97, 219, 251, 0.6)",
        border: "#61DBFB",
        desc: "React helps me I build fast, scalable frontends with reusable components.",
      },
      {
        icon: <Database size={30} color="#2DD4BF" />,
        shadow: "rgba(45, 212, 191, 0.6)",
        border: "#2DD4BF",
        desc: "I connect secure backends with real-time data and auth.",
      },
    ].map(({ icon, shadow, border, desc }, i) => (
      <motion.div key={i} className="flex flex-col items-center anton-regular">
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
          className="inline-flex items-center justify-center w-16 h-16 rounded-full cursor-pointer"
          style={{
            border: `2px solid ${border}`,
            backgroundColor: "#5C5470",
          }}
        >
          {icon}
        </motion.a>
        {toolDescription === i && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 80,   // Lower stiffness = smoother
                damping: 15,     // More damping = smoother stop
                mass: 0.5,       // Lower mass for gentle effect
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="mt-2 relative px-4 py-2 text-sm bg-white/20 backdrop-blur-md rounded-lg shadow-lg anton-regular"
          >
            {/* Left pillar with your custom color */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#26b1a1] rounded" />

            <div className="pl-4 pr-3 text-left">{desc}</div>
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
        onViewportEnter={() => setExpertiseInView(true)}
        viewport={{ once: false, amount: 0.4 }}
        className="px-6 py-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
         <motion.h3
  variants={sectionFade}
  className="text-2xl font-semibold mb-4 text-center col-span-full"
>
  {typedExpertiseHeading}
</motion.h3>

        {expertiseList.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 1.1, rotate: 5  }}
            className="p-6 text-center rounded-xl bg-white/10 backdrop-blur border border-white/20"
          >
            <div className="mb-2 text-3xl">{exp.icon}</div>
            <h4 className="font-bold mb-2">{exp.label}</h4>
            <p className="text-sm">{exp.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      
{/* PROJECTS */}
<motion.section
  id="projects"
  variants={sectionFade}
  initial="hidden"
  whileInView="visible"
   onViewportEnter={() => setProjectsInView(true)}
  viewport={{ once: false, amount: 0.4 }}
  style={{
  backgroundImage: "url('/sectionsvg.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

  className="relative px-6 py-12 max-w-3xl mx-auto bg-[#3a354add] rounded-lg shadow mb-12 overflow-hidden z-10"
>
  {/* CORNER LINES */}
  <span className="absolute top-0 left-0 w-12 h-0.5 bg-[#EDEDF2] rounded-full translate-x-2 translate-y-2"></span>
  <span className="absolute top-0 left-0 h-12 w-0.5 bg-[#EDEDF2] rounded-full translate-x-2 translate-y-2"></span>
  <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-[#EDEDF2] rounded-full -translate-x-2 -translate-y-2"></span>
  <span className="absolute bottom-0 right-0 h-12 w-0.5 bg-[#EDEDF2] rounded-full -translate-x-2 -translate-y-2"></span>

 <motion.h3
  variants={sectionFade}
  className="text-2xl font-semibold text-zinc-100 mb-8 text-center"
>
  {typedProjectsHeading}
</motion.h3>


  <div className="flex items-center justify-center gap-6 mb-8 relative">
    <button
      onClick={() =>
        setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1))
      }
      className="text-white text-3xl hover:text-[#26b1a1] transition"
    >
      {"<"}
    </button>

    <div
      className="w-full max-w-md overflow-hidden relative rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`/dd${num}.png`}
            alt={`DuetDays Mockup ${num}`}
            className="w-full flex-shrink-0 rounded-lg object-cover"
          />
        ))}
      </div>
    </div>

    <button
      onClick={() =>
        setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1))
      }
      className="text-white text-3xl hover:text-[#26b1a1] transition"
    >
      {">"}
    </button>
  </div>

  <motion.div
    whileHover={{
      scale: 1.02,
      boxShadow:
        "0 0 20px rgba(38, 177, 161, 0.4), 0 0 40px rgba(38, 177, 161, 0.4)",
      borderColor: "#26b1a1",
    }}
    whileTap={{
      scale: 1.02,
      boxShadow:
        "0 0 20px rgba(38, 177, 161, 0.4), 0 0 40px rgba(38, 177, 161, 0.4)",
      borderColor: "#26b1a1",
    }}
    transition={{ duration: 0.4 }}
    className="bg-[#5A5270] p-4 rounded text-center"
  >
    <h4 className="text-xl font-semibold text-zinc-100">
      DuetDays App
    </h4>
    <p className="text-zinc-200 mt-2">
      A productivity tracker built with React & Supabase. Includes user
      auth, real-time tasks, SEO indexing.
    </p>
    <a
      href="https://preview--duet-days.lovable.app"
      target="_blank"
      className="text-[#26b1a1] hover:underline mt-2 inline-block"
    >
      View Live
    </a>
  </motion.div>
</motion.section>


{/* FOOTER  */}
<footer className="relative flex flex-col items-center justify-center overflow-hidden text-[#EDEDF2]">
  {/* BACKGROUND IMAGE */}
  <div className="relative w-full">
    <img
      src="/footer.jpg"
      alt="Footer Background"
      className="w-full h-full object-cover opacity-40 min-h-[550px] lg:h-[600px]"
      style={{ zIndex: 0 }}
    />

    {/* CONTENT with slide-up */}
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
            {/* CLOCK FIRST */}
      <div className="text-center text-3xl font-bold mb-6">
        {time}
      </div>

      {/* Vertical Nav */}
      <div className="flex flex-col items-center mb-8">
        {["Home", "About", "Tools", "Projects"].map((tab, idx) => (
          <React.Fragment key={idx}>
            <a
              href={`#${tab.toLowerCase()}`}
              className="py-2 px-4 hover:text-[#26b1a1] transition"
            >
              {tab}
            </a>
            {idx < 3 && (
              <div className="w-32 border-t border-[#EDEDF2] mx-auto"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Floating Contact Icons */}
      <motion.div
        className="flex gap-6 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          {
            icon: <Mail size={20} color="#D14836" />,
            href: "mailto:ogbontheakpos@gmail.com",
            slideFrom: "top",
          },
          {
            icon: <Github size={20} color="#FFFFFF" />,
            href: "https://github.com/dahgrate",
            slideFrom: "bottom",
          },
          {
            icon: <Linkedin size={20} color="#0A66C2" />,
            href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351",
            slideFrom: "top",
          },
          {
            icon: <FaMedium size={22} color="#000000" />,
            href: "https://medium.com/@dahgrate",
            slideFrom: "bottom",
          },
        ].map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#26b1a1]"
            initial={{ opacity: 0, y: link.slideFrom === "top" ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {link.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* COPYRIGHT + CLOCK */}
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} AkposWorld. All rights reserved.
        <br />
        
      </div>
    </motion.div>
  </div>

  {/* THIN FINAL STRIP */}
  <div className="w-full text-center text-sm py-4 border-t border-[#282538] bg-[#282538]"></div>
</footer>




      <motion.a
        href={scrollTarget}
        className="fixed bottom-6 right-6 z-50 text-3xl text-[#26b1a1] drop-shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        ➤
      </motion.a>
    </main>
  );
}
