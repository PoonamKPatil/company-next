import Background from "./Background"
import Stats from "./Stats"
import Process from "./Process"
import Testimonials from "./Testimonials"

export default function HomePage({
  siteSettings,
}: any) {
  return (
    <main className="bg-[#f9f4ec]">
      <Background siteSettings={siteSettings} />
      <Stats stats={siteSettings.stats}/>
      <Process />
      <Testimonials testimonials={siteSettings.testimonials}/>
    </main>
  )
}
