"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function OtherSoftware() {
  return (
    <section id="four" className="bg-zinc-50 py-16 md:py-24 md:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">Other Published Software</h3>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Custom Ad"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-2 text-xl font-semibold">
                    <a
                      href="https://github.com/DavidZirinsky/Custom-Ad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-zinc-600"
                    >
                      Custom Ad Alternative
                      <ExternalLink size={16} />
                    </a>
                  </h4>
                  <p className="mb-4 text-zinc-600">
                    I made my own alternative to Google's Admob, to better monetize one of my apps.
                  </p>
                  <a
                    href="https://github.com/DavidZirinsky/Custom-Ad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-900 hover:underline"
                  >
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
