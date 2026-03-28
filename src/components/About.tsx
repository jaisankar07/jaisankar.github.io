'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate AWS DevOps Engineer with 3-5 years of experience in building and maintaining scalable cloud infrastructure.
              I specialize in automation, CI/CD pipelines, and ensuring system reliability in production environments.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My expertise lies in leveraging AWS services, Infrastructure as Code with Terraform, and containerization with Docker
              to create efficient and robust solutions.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300">AWS (CloudFormation, Lambda, RDS, CloudFront)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300">Terraform (Infrastructure as Code)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300">CI/CD (GitHub Actions, Pipeline Automation)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300">Docker / Containerization</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}