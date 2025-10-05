"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProjectsProps {
  projects: {
    title: string
    description: string
    link: string
    tags: string[]
  }[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/90 to-black/70">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Innovative solutions for cloud infrastructure and automation
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-card rounded-lg overflow-hidden h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-white transition-colors" />
                    </Link>
                  </div>
                  <p className="text-muted-foreground flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-aws-blue/20 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AWS-inspired gradient overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 aws-gradient opacity-10 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Contextual animated SVG */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.15, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-4 bottom-4 text-white"
                    >
                      {project.tags.includes("AWS") && (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="animate-morphIcon"
                        >
                          <path d="M13.106 10.12c.1-.466.571-.787 1.047-.787h4.694c.53 0 1.023.327 1.023.925 0 .366-.098.63-.366.925-.268.296-.63.562-1.072.9-.035.034-.035.068 0 .103.035.034.07.034.105 0 .441-.338.804-.604 1.072-.9.268-.295.366-.56.366-.925 0-.598-.493-.925-1.023-.925h-4.694c-.476 0-.947.32-1.047.787-.1.466.133.992.53 1.29.397.3.927.3 1.324 0 .397-.298.63-.824.53-1.29zm-2.212 0c-.1-.466-.571-.787-1.047-.787H5.153c-.53 0-1.023.327-1.023.925 0 .366.098.63.366.925.268.296.63.562 1.072.9.035.034.035.068 0 .103-.035.034-.07.034-.105 0-.441-.338-.804-.604-1.072-.9-.268-.295-.366-.56-.366-.925 0-.598.493-.925 1.023-.925h4.694c.476 0 .947.32 1.047.787.1.466-.133.992-.53 1.29-.397.3-.927.3-1.324 0-.397-.298-.63-.824-.53-1.29zm1.106 3.76c-.1-.466-.571-.787-1.047-.787H6.259c-.53 0-1.023.327-1.023.925 0 .366.098.63.366.925.268.296.63.562 1.072.9.035.034.035.068 0 .103-.035.034-.07.034-.105 0-.441-.338-.804-.604-1.072-.9-.268-.295-.366-.56-.366-.925 0-.598.493-.925 1.023-.925h4.694c.476 0 .947.32 1.047.787.1.466-.133.992-.53 1.29-.397.3-.927.3-1.324 0-.397-.298-.63-.824-.53-1.29zm2.212 0c.1-.466.571-.787 1.047-.787h4.694c.53 0 1.023.327 1.023.925 0 .366-.098.63-.366.925-.268.296-.63.562-1.072.9-.035.034-.035.068 0 .103.035.034.07.034.105 0 .441-.338.804-.604 1.072-.9.268-.295.366-.56.366-.925 0-.598-.493-.925-1.023-.925h-4.694c-.476 0-.947.32-1.047.787-.1.466.133.992.53 1.29.397.3.927.3 1.324 0 .397-.298.63-.824.53-1.29z" />
                        </svg>
                      )}
                      {project.tags.includes("Jenkins") && (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="animate-morphIcon"
                        >
                          <path d="M4.042 21.667c-.35 0-.595-.063-.735-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.385-.187.735-.187.348 0 .592.062.732.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.384.188-.732.188zm15.916 0c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm-7.958 0c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm-3.979-3.334c-.35 0-.596-.062-.736-.187-.14-.125-.21-.344-.21-.657 0-.312.07-.53.21-.656.14-.125.387-.188.736-.188.35 0 .595.063.735.188.14.125.21.344.21.656 0 .313-.07.532-.21.657-.14.125-.386.187-.735.187zm7.958 0c-.35 0-.596-.062-.736-.187-.14-.125-.21-.344-.21-.657 0-.312.07-.53.21-.656.14-.125.387-.188.736-.188.35 0 .595.063.735.188.14.125.21.344.21.656 0 .313-.07.532-.21.657-.14.125-.386.187-.735.187zm3.979-3.333c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm-7.958 0c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm-3.979-3.333c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm7.958 0c-.35 0-.596-.063-.736-.188-.14-.125-.21-.344-.21-.656 0-.313.07-.532.21-.657.14-.125.387-.187.736-.187.35 0 .595.062.735.187.14.125.21.344.21.657 0 .312-.07.53-.21.656-.14.125-.386.188-.735.188zm-3.979-3.334c-.35 0-.596-.062-.736-.187-.14-.125-.21-.344-.21-.657 0-.312.07-.53.21-.656.14-.125.387-.188.736-.188.35 0 .595.063.735.188.14.125.21.344.21.656 0 .313-.07.532-.21.657-.14.125-.386.187-.735.187z" />
                        </svg>
                      )}
                      {project.tags.includes("Terraform") && (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="animate-morphIcon"
                        >
                          <path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z" />
                        </svg>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="https://github.com/jaisankar07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-aws-blue hover:text-aws-blue/80 transition-colors"
          >
            View more projects on GitHub
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
