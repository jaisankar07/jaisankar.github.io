"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface TechStackProps {
  techStack: {
    name: string
    logo: string
  }[]
}

export default function TechStack({ techStack }: TechStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize particles
    if (typeof window !== "undefined" && containerRef.current) {
      const createParticle = () => {
        const particle = document.createElement("div")
        particle.classList.add("absolute", "rounded-full", "bg-white/10")

        // Random size between 2-4px
        const size = Math.random() * 2 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`

        // Add to container
        containerRef.current?.appendChild(particle)

        // Animate movement
        const duration = Math.random() * 20 + 10
        particle.animate(
          [
            { transform: "translateY(0) translateX(0)" },
            { transform: `translateY(${Math.random() * 20 - 10}px) translateX(${Math.random() * 20 - 10}px)` },
          ],
          {
            duration: duration * 1000,
            iterations: Number.POSITIVE_INFINITY,
            direction: "alternate",
            easing: "ease-in-out",
          },
        )

        // Create connections between particles
        setTimeout(() => {
          const connection = document.createElement("div")
          connection.classList.add("absolute", "bg-white/5", "origin-left")

          const otherParticles = containerRef.current?.querySelectorAll("div.rounded-full")
          if (otherParticles && otherParticles.length > 1) {
            const otherParticle = otherParticles[Math.floor(Math.random() * otherParticles.length)]

            // Position and size the connection line
            const rect1 = particle.getBoundingClientRect()
            const rect2 = otherParticle.getBoundingClientRect()
            const containerRect = containerRef.current?.getBoundingClientRect()

            if (containerRect) {
              const x1 = rect1.left - containerRect.left + rect1.width / 2
              const y1 = rect1.top - containerRect.top + rect1.height / 2
              const x2 = rect2.left - containerRect.left + rect2.width / 2
              const y2 = rect2.top - containerRect.top + rect2.height / 2

              const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
              const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI

              connection.style.width = `${length}px`
              connection.style.height = "1px"
              connection.style.left = `${x1}px`
              connection.style.top = `${y1}px`
              connection.style.transform = `rotate(${angle}deg)`

              containerRef.current?.appendChild(connection)
            }
          }
        }, 1000)
      }

      // Create initial particles
      for (let i = 0; i < 30; i++) {
        createParticle()
      }
    }
  }, [])

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Expertise in modern DevOps tools and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glow-border flex flex-col items-center justify-center p-4 rounded-lg bg-black/20 backdrop-blur-sm"
            >
              <div className="relative w-16 h-16 mb-3">
                <Image src={tech.logo || "placeholder.svg"} alt={tech.name} fill className="object-contain" />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
