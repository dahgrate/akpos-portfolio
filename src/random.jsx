<footer className="relative text-center text-sm text-[#EDEDF2] py-10 border-t border-[#282538] bg-[#282538]">
  {/* Tabs */}
  <div className="flex justify-center gap-8 mb-8">
    {[
      { name: "Home", href: "#home", icon: <Home size={16} /> },
      { name: "About", href: "#about", icon: <User size={16} /> },
      { name: "Tools", href: "#tools", icon: <Database size={16} /> },
      { name: "Projects", href: "#projects", icon: <Folder size={16} /> },
    ].map((tab, idx) => (
      <motion.a
        key={idx}
        href={tab.href}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 text-[#EDEDF2] hover:text-[#26b1a1] transition"
      >
        {tab.icon}
        {tab.name}
      </motion.a>
    ))}
  </div>

  {/* Contact Icons */}
  <motion.div
    className="flex justify-center gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.4 }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    }}
  >
    {[
      {
        icon: <Mail size={20} color="#D14836" />, // Gmail red
        href: "mailto:ogbontheakpos@gmail.com",
        slideFrom: "top",
      },
      {
        icon: <Github size={20} color="#FFFFFF" />, // GitHub white
        href: "https://github.com/dahgrate",
        slideFrom: "bottom",
      },
      {
        icon: <Linkedin size={20} color="#0A66C2" />, // LinkedIn blue
        href: "https://www.linkedin.com/in/akpos-ogbon-3aa291351",
        slideFrom: "top",
      },
      {
        icon: <FaMedium size={22} color="#000000" />, // Medium black
        href: "https://medium.com/@dahgrate",
        slideFrom: "bottom",
      },
    ].map((link, idx) => (
      <motion.a
        key={idx}
        href={link.href}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#26b1a1] bg-[#282538] hover:scale-110 transition-transform"
        variants={{
          hidden: {
            opacity: 0,
            y: link.slideFrom === "top" ? -50 : 50,
          },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {link.icon}
      </motion.a>
    ))}
  </motion.div>

  <div className="mt-8">
    &copy; {new Date().getFullYear()} AkposWorld. All rights reserved.
  </div>
</footer>