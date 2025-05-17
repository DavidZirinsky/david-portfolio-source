"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="relative bg-zinc-900 py-24">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let Me Tell You A Little Bit About Myself
          </motion.h2>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 top-0 h-20 w-1 bg-gradient-to-b from-purple-500 to-transparent"></div>
            <div className="absolute -right-4 bottom-0 h-20 w-1 bg-gradient-to-t from-purple-500 to-transparent"></div>

            <motion.div
              className="relative z-10 rounded-lg bg-black/50 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                My name is David Zirinsky and thanks for visiting my personal
                website! Professionally, I develop reliable, scalable software
                with a strong focus on correctness and timely delivery.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Beyond my professional work, I enjoy expanding my technical
                toolkit through Android app development and web projects. Below
                you&apos;ll find examples of my work across these platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
