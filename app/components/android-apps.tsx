"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function AndroidApps() {
  const apps = [
    {
      title: "gbtRecipes",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Uses OpenAI's API to generate a recipe for any dish you can think of, including factoring in your dietary restrictions! Bon Appétit! Published: 6/21/23",
      link: "https://play.google.com/store/apps/details?id=com.davidz.gbtrecipes",
      github: "https://github.com/DavidZirinsky/gbtRecipies",
    },
    {
      title: "Pocket Accountant",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Android app that graphs a user's personal finances as well as exports a user's data to their favorite spreadsheet program. 850+ downloads, published: 1/26/16",
      link: "https://play.google.com/store/apps/details?id=com.DavidZirinsky.PocketAccountant&hl=en",
      github: null,
    },
    {
      title: "Beer 30",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "A simple Android Wear app that counts a user's drinks all from their wrist. 850+ downloads, published: 8/4/15",
      link: "https://play.google.com/store/apps/details?id=rapidrabbitsoftware.beer30&hl=en",
      github: null,
    },
  ];

  return (
    <section id="three" className="py-16 md:py-24 md:pl-64">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">
            Android Apps In Google Play
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, index) => (
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
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-xl font-semibold">
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-zinc-600"
                      >
                        {app.title}
                        <ExternalLink size={16} />
                      </a>
                    </h4>
                    <p className="mb-4 text-zinc-600">{app.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-900 hover:underline"
                      >
                        View on Google Play
                      </a>
                      {app.github && (
                        <a
                          href={app.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-zinc-900 hover:underline"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
