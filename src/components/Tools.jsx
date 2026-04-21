import React from "react"
import { motion } from "framer-motion"
import { Database } from "lucide-react"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa"

export default function Tools(props){
    return(
        <>
        
        {/* TOOLS */}
        <motion.section
          id="tools"
          variants={props.sectionFade}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => props.setToolsInView(true)}
          viewport={{ once: false, amount: 0.4 }}
          className="px-6 py-12 max-w-3xl mx-auto relative z-10 anton-regular"
        >
         <motion.h3
          variants={props.sectionFade}
          className="text-2xl font-semibold text-zinc-100 mb-4 text-center"
        >
          {props.typedToolsHeading}
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
                  onClick={() => props.setToolDescription(i === props.toolDescription ? null : i)}
                  whileHover={{
                    rotate: [0, 360],
                    transition: { repeat: Infinity, ease: "linear", duration: 1.5 },
                    filter: `drop-shadow(0 0 12px ${shadow})`,
                    scale: 1,
                  }}
                  animate={
                    props.toolDescription === i
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
                {props.toolDescription === i && (
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
        
        </>
    )
}