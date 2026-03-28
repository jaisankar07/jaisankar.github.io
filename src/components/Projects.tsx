'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Infrastructure Pipeline Automation',
    description: 'Built CI/CD pipeline using GitHub Actions + Terraform for automated deployments of Lambda functions and cloud infrastructure.',
    tech: ['GitHub Actions', 'Terraform', 'AWS Lambda'],
    impact: 'Reduced deployment time by 60% and improved infrastructure consistency'
  },
  {
    title: 'SimpleTimeService (Microservice)',
    description: 'Python-based microservice with Docker containerization, featuring time-related utilities and API endpoints.',
    tech: ['Python', 'Docker', 'FastAPI'],
    impact: 'Delivered scalable microservice with automated CI/CD and infrastructure provisioning'
  },
  {
    title: 'CRSS Appian Project',
    description: 'Managed deployments, pipelines, and AWS infrastructure for critical business application.',
    tech: ['Appian', 'AWS', 'CI/CD'],
    impact: 'Improved deployment efficiency by 40% and enhanced system stability'
  }
]

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium">{project.impact}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}