"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
          <p className="mb-8 text-gray-400">
            For any questions or feedback about my work please email me at:{" "}
            <a
              href="mailto:dzirinsky@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              dzirinsky@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:dzirinsky@gmail.com"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/DavidZirinsky/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/davidzirinsky/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="white" strokeWidth="0.1" />
          ))}
        </svg>
      </div>
    </section>
  )
}
