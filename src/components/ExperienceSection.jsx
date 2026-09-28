import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2026"
          title="Developer, DaycareLog"
          place="Personal project"
          description="Built a daycare management system with a React web app, a Spring Boot API, and an Android app."
        />
        <TimelineItem
          period="2023 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Now in my fourth year, focusing on web and mobile development."
        />
        <TimelineItem
          period="2013"
          title="High School"
          place="Oroquieta City"
          description="Graduated from high school."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
