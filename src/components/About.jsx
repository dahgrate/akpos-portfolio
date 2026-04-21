import React from "react"
import { motion } from "framer-motion"

export default function About(props){
    return(
        <>
        
{/* ABOUT */}
<motion.section
  id="about"
  variants={props.sectionFade}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
   onViewportEnter={() => props.setAboutInView(true)}
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
  variants={props.sectionFade}
  className="text-2xl font-semibold text-zinc-100 mb-4 text-center"
>
  {props.typedAboutHeading}
</motion.h3>
<motion.p variants={props.sectionFade} className="text-zinc-200">
  {props.typedAboutContent}
</motion.p>

</motion.section>
        </>
    )
}
