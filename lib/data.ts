export const bioData = {
  bio: {
    name: "Jaisankar Selvam",
    title: "AWS DevOps Engineer",
    description: [
        "AWS DevOps Engineer with 3+ years of experience in automating CI/CD, infrastructure, and cloud security.",
        "Skilled in AWS, Terraform, Kubernetes, Jenkins, and GitHub Actions.",
        "Reduced deployment cycles by 40% and cut AWS costs by 20% through automation and optimization.",
        "Focused on building reliable, scalable, and secure cloud systems.",
      ],

    contacts: {
      email: "jaisankars2017@gmail.com",
      phone: "+91 9597645870",
      location: "Coimbatore, India",
      social: {
        linkedin: "https://www.linkedin.com/in/jaisankar-selvam",
        github: "https://github.com/jaisankar07",
      },
    },
  },
  techStack: [
    { name: "AWS", logo: "/images/icon-aws.png" },
    { name: "Terraform", logo: "/images/icon-terraform.png" },
    { name: "Kubernetes", logo: "/images/icon-kubernetes.png" },
    { name: "Jenkins", logo: "/images/icon-jenkins.png" },
    { name: "GitHub Actions", logo: "/images/icon-github-actions.png" },
    { name: "Docker", logo: "/images/icon-docker.png" },
    { name: "Python", logo: "/images/icon-python.png" },
    { name: "Shell Scripting", logo: "/images/icon-shell.png" },
    { name: "Ansible", logo: "/images/icon-ansible.png" },
    { name: "Prometheus", logo: "/images/icon-prometheus.png" },
    { name: "Grafana", logo: "/images/icon-grafana.png" },
  ],
  skills: [
    { name: "CI/CD Pipeline Automation", level: 85 },
    { name: "AWS Cloud Architecture", level: 80 },
    { name: "Infrastructure as Code (IaC)", level: 75 },
    { name: "Containerization & Orchestration", level: 80 },
    { name: "Cloud Security Best Practices", level: 70 },
    { name: "Cost Optimization Strategies", level: 75 },
    { name: "Monitoring & Alerting", level: 70 },
  ],
  projects: [
    {
      title: "AWS Lambda CI/CD Automation",
      description: "Designed a Jenkins-based pipeline for automated AWS Lambda deployments with S3 artifact handling.",
      link: "https://github.com/jaisankar07",
      tags: ["AWS", "Jenkins", "CI/CD"],
    },
    {
      title: "GitHub Actions for Appian Deployments",
      description: "Automated Appian package deployment with integrated security scanning and unit testing.",
      link: "https://github.com/jaisankar07",
      tags: ["GitHub Actions", "Appian", "Security"],
    },
    {
      title: "IaC Automation with Terraform & CloudFormation",
      description: "Developed infrastructure pipelines in Jenkins for secure and scalable AWS deployments.",
      link: "https://github.com/jaisankar07",
      tags: ["Terraform", "CloudFormation", "IaC"],
    },
    {
      title: "AWS RDS Disaster Recovery",
      description:
        "Engineered cross-region snapshot management and automated read replicas, reducing data recovery time by 40%.",
      link: "https://github.com/jaisankar07",
      tags: ["AWS", "Disaster Recovery", "Database"],
    },
  ],
  experience: [
    {
      title: "DevOps Engineer",
      company: "Accenture",
      period: "Nov 2023 — Present",
      description:
        "Engineered automated CI/CD pipelines for AWS Lambda deployments using Jenkins & GitHub Actions, reducing deployment time by 40%. Optimized AWS infrastructure with auto-scaling and monitoring solutions, improving uptime by 30%. Cut AWS costs by 20% through reserved instances and rightsizing. Implemented AWS Disaster Recovery strategies, reducing RTO by 40%.",
    },
    {
      title: "Junior DevOps Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Oct 2021 — Jun 2023",
      description:
        "Developed AWS CI/CD pipelines using CodeBuild, CodeDeploy, and Jenkins, reducing deployment failures by 35%. Led on-premises to AWS migration for GSK, achieving 99.9% uptime post-migration. Automated AWS Lambda deployments, enhancing update efficiency by 50%.",
    },
  ],
  education: [
    {
      degree: "B.Tech/B.E. – Mechanical Engineering",
      institution: "Erode Sengunthar Engineering College",
      year: "2021 | CGPA: 7.81/10",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "AWS",
      year: "2024",
    },
    {
      title: "Terraform Associate (HashiCorp)",
      issuer: "HashiCorp",
      year: "In Progress",
    },
  ],
}
