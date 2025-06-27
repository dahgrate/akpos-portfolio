import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      <nav className="flex justify-between items-center p-6 border-b border-zinc-700">
        <h1 className="text-xl font-bold">Akpos</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-emerald-400">About</a></li>
          <li><a href="#projects" className="hover:text-emerald-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
          <li><a href="/Akpos_Resume.pdf" download className="bg-emerald-500 text-zinc-900 px-3 py-1 rounded hover:bg-emerald-400 font-medium">Download Resume</a></li>
        </ul>
      </nav>

      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Akpos</h2>
        <p className="text-lg text-zinc-300">Frontend Developer | Cybersecurity Enthusiast</p>
      </section>

      <section id="about" className="px-6 py-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-zinc-300">
          I'm a frontend developer with experience building real-world apps using React and Supabase. I also completed an intro cybersecurity program focused on OWASP Top 10 and secure coding. I enjoy creating responsive, accessible UIs and continuously learning more about web security and performance.
        </p>
      </section>

      <section id="projects" className="px-6 py-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <div className="bg-zinc-800 p-4 rounded shadow">
          <h4 className="text-xl font-semibold">DuetDays App</h4>
          <p className="text-zinc-300 mt-2">
            A productivity tracker built with React and Supabase. Includes user authentication, real-time task updates, and was indexed via Google Search Console for SEO visibility.
          </p>
          <a href="https://preview--duet-days.lovable.app" target="_blank" rel="noopener" className="text-emerald-400 hover:underline mt-2 inline-block">
            View Live
          </a>
        </div>
      </section>

      <section id="contact" className="px-6 py-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <ul className="space-y-2 text-zinc-300">
          <li>Email: <a href="mailto:ogbontheakpos@gmail.com" className="text-emerald-400 hover:underline">ogbontheakpos@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/dahgrate" className="text-emerald-400 hover:underline">github.com/dahgrate</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/akpos-ogbon-3aa291351" className="text-emerald-400 hover:underline">linkedin.com/in/akpos-ogbon</a></li>
        </ul>
      </section>

      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-700">
        &copy; {new Date().getFullYear()} Akpos. All rights reserved.
      </footer>
    </main>
  );
}