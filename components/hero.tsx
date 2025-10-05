"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Cloud, Terminal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  bio: {
    name: string
    title: string
    description: string[]
  }
}

export default function Hero({ bio }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY
        const element = containerRef.current
        element.style.backgroundPosition = `${scrollY * 0.05}% ${scrollY * 0.05}%`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="diagonal-section min-h-screen flex items-center justify-center py-20 aws-gradient aws-gradient-animated"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                {bio.name.split("").map((letter, index) => (
                  <span key={index} className="kinetic-text" style={{ animationDelay: `${index * 0.05}s` }}>
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white/90">
                {bio.title.split("").map((letter, index) => (
                  <span key={index} className="kinetic-text" style={{ animationDelay: `${index * 0.05 + 0.5}s` }}>
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="space-y-2"
            >
              {bio.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-white/80">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="bg-white text-black hover:bg-white/90 hover:shadow-lg transition-all">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
          </div>
          <div className="relative h-[400px]">
            <motion.div
              className="absolute top-10 right-10 text-white/30 floating"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              <Cloud size={80} />
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-20 text-white/20 floating"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <Cloud size={100} />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/3 text-white/40 floating"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            >
              <Terminal size={60} />
            </motion.div>

            {/* Updated Terminal-like element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
            >
              <div className="glass-card rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-black/80 p-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-white/70 text-sm">~/devops-terminal</div>
                </div>
                <div className="bg-black/70 p-4 font-mono text-sm text-green-400 space-y-1">
                  <div className="flex">
                    <span className="text-white/70 mr-2">$</span>
                    whoami
                  </div>
                  <div className="ml-6 text-white">Jai Sankar - AWS DevOps Engineer</div>

                  <div className="flex pt-2">
                    <span className="text-white/70 mr-2">$</span>
                    cat highlights.txt
                  </div>
                  <div className="ml-6 text-white">
                    - 3+ yrs automating CI/CD & cloud infra <br />
                    - 20% AWS cost savings via Terraform & monitoring <br />
                    - Kubernetes | Terraform | Cloud Security
                  </div>

                  <div className="flex pt-2">
                    <span className="text-white/70 mr-2">$</span>
                    deploy --env production
                  </div>
                  <div className="ml-6 text-white">
                    ✔️ Infrastructure optimized <br />
                    <span className="text-white">✅ Deployment complete. Systems running smoothly.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
