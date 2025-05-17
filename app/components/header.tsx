"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("one")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["one", "two", "three", "four", "five"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      id="header"
      className="fixed bottom-0 left-0 top-0 z-10 flex w-full flex-col bg-zinc-800 p-4 text-white md:w-64"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex flex-col items-center text-center">
        <span className="mb-4 overflow-hidden rounded-full">
          <img
            src="/placeholder.svg?height=128&width=128"
            alt="David Zirinsky"
            className="h-32 w-32 rounded-full object-cover"
          />
        </span>
        <h1 className="text-xl font-bold">
          <a href="#">David Zirinsky</a>
        </h1>
        <p className="text-sm text-zinc-300">World&apos;s #0 Programmer</p>
      </header>

      <nav id="nav" className="mt-8 flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href="#one"
              className={`flex items-center gap-2 rounded px-3 py-2 transition-colors ${activeSection === "one" ? "bg-zinc-700" : "hover:bg-zinc-700/50"}`}
            >
              <span className="text-zinc-400">🏠</span> About
            </a>
          </li>
          <li>
            <a
              href="#two"
              className={`flex items-center gap-2 rounded px-3 py-2 transition-colors ${activeSection === "two" ? "bg-zinc-700" : "hover:bg-zinc-700/50"}`}
            >
              <span className="text-zinc-400">🌐</span> Web Based Projects
            </a>
          </li>
          <li>
            <a
              href="#three"
              className={`flex items-center gap-2 rounded px-3 py-2 transition-colors ${activeSection === "three" ? "bg-zinc-700" : "hover:bg-zinc-700/50"}`}
            >
              <span className="text-zinc-400">📱</span> Android Apps
            </a>
          </li>
          <li>
            <a
              href="#four"
              className={`flex items-center gap-2 rounded px-3 py-2 transition-colors ${activeSection === "four" ? "bg-zinc-700" : "hover:bg-zinc-700/50"}`}
            >
              <span className="text-zinc-400">💻</span> Other Software
            </a>
          </li>
          <li>
            <a
              href="#five"
              className={`flex items-center gap-2 rounded px-3 py-2 transition-colors ${activeSection === "five" ? "bg-zinc-700" : "hover:bg-zinc-700/50"}`}
            >
              <span className="text-zinc-400">✉️</span> Contact
            </a>
          </li>
        </ul>
      </nav>

      <footer className="mt-auto pt-4">
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="mailto:dzirinsky@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-colors hover:bg-zinc-600"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DavidZirinsky/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-colors hover:bg-zinc-600"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davidzirinsky/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-white transition-colors hover:bg-zinc-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </li>
        </ul>
      </footer>
    </motion.section>
  )
}
