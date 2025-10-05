"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

interface ExperienceProps {
  experience: {
    title: string
    company: string
    period: string
    description: string
  }[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black/70 to-black/90">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Professional journey in DevOps and cloud engineering
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aws-blue/30 via-aws-orange/30 to-aws-blue/30"></div>

          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}
            >
              <div className="glass-card rounded-lg p-6">
                <div className="absolute top-6 left-0 md:left-auto md:top-6 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 bg-aws-blue rounded-full p-2 shadow-lg">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-4">
                  <p className="text-aws-orange font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
