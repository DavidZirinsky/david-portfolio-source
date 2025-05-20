"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Rocket, Github } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "web", "android", "other"];

  const works = [
    {
      id: 1,
      title: "Inflation Calculator",
      category: "web",
      image: "/inflation.png",
      description:
        "Full-stack inflation calculator with React frontend, Python backend on AWS Lambda",
      link: "https://davidzirinsky.com/inflation/",
      github: "https://github.com/DavidZirinsky/InflationCalc",
    },
    {
      id: 2,
      title: "YouTube Thumbnail App",
      category: "web",
      image: "/app.png",
      description:
        "Simple React webpage to get high definition thumbnails of YouTube videos",
      link: "http://davidzirinsky.com/youtube/",
      github: "https://github.com/DavidZirinsky/youtube-thumbnail-app",
    },
    {
      id: 3,
      title: "gptRecipes",
      category: "android",
      image: "/gbtRecipes.png",
      description:
        "Uses OpenAI's API to generate a recipe for any dish you can think of, including factoring in your dietary restrictions! Bon Appétit! Published: 6/21/23",
      link: "https://play.google.com/store/apps/details?id=com.davidz.gbtrecipes",
      github: "https://github.com/DavidZirinsky/gbtRecipies",
    },
    {
      id: 4,
      title: "Pocket Accountant",
      category: "android",
      image: "/pocket.png",
      description:
        "Android app that graphs a user’s personal finances as well as exports a user’s data to their favorite spreadsheet program. 850+ downloads, published: 1/26/16",
      link: "https://play.google.com/store/apps/details?id=com.DavidZirinsky.PocketAccountant&hl=en",
    },
    {
      id: 5,
      title: "Beer 30",
      category: "android",
      image: "/beer_30.png",
      description:
        "A simple Android Wear app that counts a user’s drinks all from their wrist. 850+ downloads, published: 8/4/15",
      link: "https://play.google.com/store/apps/details?id=rapidrabbitsoftware.beer30&hl=en",
    },
    {
      id: 6,
      title: "Custom Ad Alternative",
      category: "other",
      image: "/screenshot.png",
      description:
        "I made my own alternative to Google's Admob, to better monetize one of my apps.",
      link: "https://github.com/DavidZirinsky/Custom-Ad",
      github: "https://github.com/DavidZirinsky/Custom-Ad",
    },
  ];

  const filteredWorks = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  );

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize border ${
                selectedCategory === category
                  ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-500"
                  : "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden rounded-lg border border-zinc-800 shadow-lg shadow-purple-900/10 !bg-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-lg -z-10"></div>
                  <CardContent className="p-0">
                    <div className="group relative">
                      <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-black/85 to-zinc-900/90 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {work.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-6 text-center">
                          {work.description}
                        </p>

                        <div className="flex flex-col gap-3 w-full max-w-[200px]">
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 w-full shadow-md shadow-purple-900/20"
                          >
                            {work.category === "android" ||
                            work.category === "other" ? (
                              <>
                                <PlayCircle className="h-4 w-4" />
                                Get It On Google Play
                              </>
                            ) : (
                              <>
                                <Rocket className="h-4 w-4" />
                                See It For Yourself
                              </>
                            )}
                          </a>

                          {work.github && (
                            <a
                              href={work.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 w-full shadow-md"
                            >
                              <Github className="h-4 w-4" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
