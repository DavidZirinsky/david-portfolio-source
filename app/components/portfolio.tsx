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
      alt: "Screenshot of the Inflation Calculator web application",
      description:
        "Full-stack inflation calculator with React frontend, Python backend on AWS Lambda",
      link: "https://davidzirinsky.com/inflation/",
      github: "https://github.com/DavidZirinsky/InflationCalc",
    },
    {
      id: 2,
      title: "Coupon Clipper Extension",
      category: "web",
      image: "/couponClipper.png",
      alt: "Logo of the Coupon Clipper browser extension",
      description:
        "A Chrome and Firefox extension that lets users clip the first 250 digital coupons at King Soopers",
      link: "https://www.kingsooperscoupons.com/",
      github: "https://github.com/DavidZirinsky/Coupon-Clipper",
    },
    {
      id: 3,
      title: "YouTube Thumbnail App",
      category: "web",
      image: "/app.png",
      alt: "Screenshot of the YouTube Thumbnail web application",
      description:
        "Simple React webpage to get high definition thumbnails of YouTube videos",
      link: "http://davidzirinsky.com/youtube/",
      github: "https://github.com/DavidZirinsky/youtube-thumbnail-app",
    },
    {
      id: 4,
      title: "gbtRecipes",
      category: "android",
      image: "/gbtRecipes.png",
      alt: "Screenshot of the gbtRecipes Android application",
      description:
        "Uses OpenAI's API to generate recipes with dietary restrictions",
      link: "https://play.google.com/store/apps/details?id=com.davidz.gbtrecipes",
      github: "https://github.com/DavidZirinsky/gbtRecipies",
    },
    {
      id: 5,
      title: "Pocket Accountant",
      category: "android",
      image: "/pocket.png",
      alt: "Screenshot of the Pocket Accountant Android application",
      description:
        "Android app that graphs personal finances and exports data to spreadsheets",
      link: "https://play.google.com/store/apps/details?id=com.DavidZirinsky.PocketAccountant&hl=en",
    },
    {
      id: 6,
      title: "Beer 30",
      category: "android",
      image: "/beer30.png",
      alt: "Screenshot of the Beer 30 Android Wear application",
      description:
        "Android Wear app that counts a user's drinks from their wrist",
      link: "https://play.google.com/store/apps/details?id=rapidrabbitsoftware.beer30&hl=en",
    },
    {
      id: 7,
      title: "Custom Ad Alternative",
      category: "other",
      image: "/screenshot.png",
      alt: "Code snippet demonstrating a custom ad alternative",
      description: "Alternative to Google's Admob for better app monetization",
      link: "https://github.com/DavidZirinsky/Custom-Ad",
      github: "https://github.com/DavidZirinsky/Custom-Ad",
    },
    {
      id: 8,
      title: "tl;dw",
      category: "other",
      image: "/pypi.svg",
      alt: "Logo of the tl;dw Python package on PyPI",
      description:
        "A Python package that summarizes lengthy YouTube videos into concise, easy-to-digest summaries.",
      link: "https://pypi.org/project/tldw/",
      github: "https://github.com/DavidZirinsky/tl-dw",
    },
  ];

  const filteredWorks = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  );

  return (
    <section id="portfolio" className="bg-black py-20">
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
                <Card className="overflow-hidden rounded-lg border border-zinc-800 shadow-lg shadow-purple-900/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.alt || work.title}
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
                          {/* Only show the "Get It On Google Play" or "See It For Yourself" button for android, web, or pypi categories */}
                          {(work.category !== "other" ||
                            work.title === "tl;dw") && (
                            <a
                              href={work.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 w-full shadow-md shadow-purple-900/20"
                            >
                              {work.category === "android" ? (
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
                          )}

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
