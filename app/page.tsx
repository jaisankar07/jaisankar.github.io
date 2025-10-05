import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import { bioData } from "@/lib/data"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CustomCursor />
      <Hero bio={bioData.bio} />
      <TechStack techStack={bioData.techStack} />
      <Projects projects={bioData.projects} />
      <Experience experience={bioData.experience} />
      <Skills skills={bioData.skills} />
      <Contact contacts={bioData.bio.contacts} />
    </main>
  )
}
