"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

interface SkillsProps {
  skills: {
    name: string
    level: number
  }[]
}

export default function Skills({ skills }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="skills" ref={containerRef} className="py-20 bg-gradient-to-b from-black/90 to-black/70">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Technical proficiencies and specialized knowledge
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${index !== skills.length - 1 && index % 2 === 0 ? "diagonal-divider" : ""}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className={`progress-bar-fill h-full rounded-full ${
                    skill.level >= 80 ? "bg-aws-orange" : "bg-aws-blue"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-aws-orange mb-2">3+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-aws-blue mb-2">40%</div>
              <p className="text-muted-foreground">Reduced Release Cycles</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-aws-orange mb-2">20%</div>
              <p className="text-muted-foreground">Cloud Cost Reduction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
