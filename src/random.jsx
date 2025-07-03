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
  className="relative px-6 py-12 max-w-3xl mx-auto rounded-lg shadow z-10 overflow-hidden"
>
  {/* Corners */}
  <span className="absolute top-0 left-0 w-12 border-t-2 border-[#EDEDF2]"></span>
  <span className="absolute top-0 left-0 h-12 border-l-2 border-[#EDEDF2]"></span>

  <span className="absolute top-0 right-0 w-12 border-t-2 border-[#EDEDF2]"></span>
  <span className="absolute top-0 right-0 h-12 border-r-2 border-[#EDEDF2]"></span>

  <span className="absolute bottom-0 left-0 w-12 border-b-2 border-[#EDEDF2]"></span>
  <span className="absolute bottom-0 left-0 h-12 border-l-2 border-[#EDEDF2]"></span>

  <span className="absolute bottom-0 right-0 w-12 border-b-2 border-[#EDEDF2]"></span>
  <span className="absolute bottom-0 right-0 h-12 border-r-2 border-[#EDEDF2]"></span>

  {/* Faded background pseudo-element */}
  <div className="absolute inset-0 z-0"
    style={{
      background: "#4A4460",
      maskImage: "radial-gradient(ellipse at center, white 85%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, white 85%, transparent 100%)",
    }}
  />

  {/* Actual content stays above */}
  <div className="relative z-10">
    <motion.h3
      variants={sectionFade}
      className="text-2xl font-semibold mb-4 text-center text-zinc-100"
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
          className="text-[#26b1a1] text-3xl"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  </div>
</motion.section>
