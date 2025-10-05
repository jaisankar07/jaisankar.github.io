"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactProps {
  contacts: {
    email: string
    phone: string
    location: string
    social: {
      linkedin: string
      github: string
    }
  }
}

export default function Contact({ contacts }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thank you for your message! This is a demo form.")
  }

  // Cloud animation for dark mode
  const cloudVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-black/70 to-black/90">
      {/* Floating AWS cloud shapes in dark mode */}
      <motion.div variants={cloudVariants} animate="animate" className="absolute top-20 right-10 text-white/5">
        <Cloud size={100} />
      </motion.div>
      <motion.div
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-10 text-white/5"
      >
        <Cloud size={80} />
      </motion.div>
      <motion.div
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute top-1/2 left-1/4 text-white/5"
      >
        <Cloud size={60} />
      </motion.div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out!
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-aws-blue mr-3" />
                  <a
                    href={`mailto:${contacts.email}`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {contacts.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-aws-blue mr-3" />
                  <a
                    href={`tel:${contacts.phone}`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {contacts.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-aws-blue mr-3" />
                  <span className="text-muted-foreground">{contacts.location}</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href={contacts.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-aws-blue/20 hover:bg-aws-blue/40 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href={contacts.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-aws-blue/20 hover:bg-aws-blue/40 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-black/20 border-aws-blue/30 focus:border-aws-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-black/20 border-aws-blue/30 focus:border-aws-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-black/20 border-aws-blue/30 focus:border-aws-blue min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-aws-blue hover:bg-aws-blue/80 text-white transition-all hover:shadow-[0_0_15px_rgba(0,149,255,0.5)]"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
