import React from "react";
import { motion } from "framer-motion";

export default function Projects(props){
    return(
        <>
        
<motion.section
  id="projects"
  variants={props.sectionFade}
  initial="hidden"
  whileInView="visible"
   onViewportEnter={() => props.setProjectsInView(true)}
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
  variants={props.sectionFade}
  className="text-2xl font-semibold text-zinc-100 mb-8 text-center"
>
  {props.typedProjectsHeading}
</motion.h3>


  <div className="flex items-center justify-center gap-6 mb-8 relative">
    <button
      onClick={() =>
        props.setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1))
      }
      className="text-white text-3xl hover:text-[#26b1a1] transition"
    >
      {"<"}
    </button>

    <div
      className="w-full max-w-md overflow-hidden relative rounded-lg"
      onTouchStart={props.handleTouchStart}
      onTouchEnd={props.handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${props.currentIndex * 100}%)` }}
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
        props.setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1))
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
        </>
    )
}