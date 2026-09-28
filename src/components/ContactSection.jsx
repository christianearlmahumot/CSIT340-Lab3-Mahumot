import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:earlchristian1605@gmail.com" text="earlchristian1605@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/christianearlmahumot" text="github.com/christianearlmahumot" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/christianearlmahumot" text="linkedin.com/in/christianearlmahumot" />
      </ul>
    </section>
  )
}

export default ContactSection
