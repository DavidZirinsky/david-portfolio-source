"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function WebProjects() {
  const projects = [
    {
      title: "Inflation Calculator",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "This project brings together my expertise in economics and computer science to build a practical, user-friendly tool. It's a true full-stack inflation calculator with a React frontend, a Python backend, hosted on an AWS Lambda managed via Terraform.",
      link: "https://davidzirinsky.com/inflation/",
      github: "https://github.com/DavidZirinsky/InflationCalc",
    },
    {
      title: "A Simple Youtube Thumbnail App",
      image: "/placeholder.svg?height=300&width=500",
      description: "A simple react webpage to get a high definition thumbnail of a youtube video.",
      link: "http://davidzirinsky.com/youtube/",
      github: "https://github.com/DavidZirinsky/youtube-thumbnail-app",
    },
  ]

  return (
    <section id="two" className="bg-zinc-50 py-16 md:py-24 md:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Web Based Projects</h3>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-xl font-semibold">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-zinc-600"
                      >
                        {project.title}
                        <ExternalLink size={16} />
                      </a>
                    </h4>
                    <p className="mb-4 text-zinc-600">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-900 hover:underline"
                      >
                        View Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-900 hover:underline"
                      >
                        Source Code
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
