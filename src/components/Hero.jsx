import React from "react"
import { motion } from "framer-motion"
import {  Mail, Github, Linkedin } from "lucide-react"
import { FaMedium } from "react-icons/fa"

export default function Hero(props){
    return(
        <>

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
    Full-Stack Developer | Certified Cybersecurity Practitioner
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

        </>
    )
}