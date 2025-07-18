"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Rocket, Github } from "lucide-react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      src: "/couponClipper.png",
      alt: "Coupon Clipper Extension",
      title: "Coupon Clipper Extension",
      description:
        "A Chrome and Firefox extension that lets users clip the first 250 digital coupons at King Soopers",
      link: "https://www.kingsooperscoupons.com/",
      github: "https://github.com/DavidZirinsky/Coupon-Clipper",
    },
    {
      src: "/inflation.png",
      alt: "Inflation Calculator",
      title: "Inflation Calculator",
      description:
        "This project brings together my expertise in economics and computer science to build a practical, user-friendly tool. It's a true full-stack inflation calculator with a React frontend, a Python backend, hosted on an AWS Lambda managed via Terraform.",
      link: "https://davidzirinsky.com/inflation/",
      github: "https://github.com/DavidZirinsky/InflationCalc",
    },
  ];

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[16/9] overflow-hidden bg-zinc-800">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Always visible bottom overlay with title and description */}
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay with centered content and buttons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-black/85 to-zinc-900/90 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-3 sm:p-4 md:p-6 overflow-y-auto">
                <div className="max-w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 md:mb-6 text-center max-h-24 sm:max-h-32 overflow-y-auto">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-[180px] sm:max-w-[200px]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-300 w-full shadow-md shadow-purple-900/20"
                  >
                    <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>See It For Yourself</span>
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-300 w-full shadow-md"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
