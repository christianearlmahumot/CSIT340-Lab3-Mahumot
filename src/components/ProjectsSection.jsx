import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="DaycareLog"
          description="A daycare management system for tracking children, attendance, and health records, with a React web app, a Spring Boot API, and an Android app."
          tech="React · Spring Boot · Kotlin · PostgreSQL"
          link="https://github.com/christianearlmahumot/daycarelog"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
