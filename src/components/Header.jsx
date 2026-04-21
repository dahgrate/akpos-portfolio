import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Folder, Database, HatGlasses } from "lucide-react"

export default function Header(props){
    return(
        <>
        
      <nav className="p-6 flex justify-between items-center border-b border-[#282538] bg-[#282538] shadow-sm relative z-10">
        <h1 className="text-xl font-bold text-[#EDEDF2]">Meet the Developer</h1>

        <ul className="hidden md:flex gap-6 text-sm items-center">
          {["home", "about", "tools", "expertise","projects"].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={props.tapEffect}
              className="flex items-center gap-1 text-[#EDEDF2] hover:text-[#26b1a1] transition"
            >
              {item === "home" && <Home size={16} />}
              {item === "about" && <User size={16} />}
              {item === "tools" && <Database size={16} />}
              {item === "projects" && <Folder size={16} />}
              {item == "expertise" && <HatGlasses size={16} />}
              <a href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
           
          </motion.li>
        </ul>

        <button className="md:hidden flex flex-col gap-1" onClick={props.toggleMenu}>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
          <span className="w-6 h-0.5 bg-[#EDEDF2]"></span>
        </button>
      </nav>

      <AnimatePresence>
        {props.isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-30"
              variants={props.backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => props.setIsOpen(false)}
            />
  <motion.div
  variants={props.sidebarVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  className="fixed top-0 left-0 h-full w-64 bg-[#2A253A]/60 backdrop-blur-lg shadow-lg flex flex-col gap-6 p-6 border-r border-[#282538] z-40 text-white"
>

  {["home", "about", "tools", "expertise", "projects"].map((item, idx) => (
    <a
      key={idx}
      href={`#${item}`}
      onClick={props.toggleMenu}
      className="flex items-center gap-2 text-lg"
    >
      {item === "home" && <Home size={20} />}
      {item === "about" && <User size={20} />}
      {item === "tools" && <Database size={20} />}
      {item === "projects" && <Folder size={20} />}
      {item === "expertise" && <HatGlasses size={20} />}
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </a>
  ))}

</motion.div>

          </>
        )}
      </AnimatePresence>
        </>
    )
}