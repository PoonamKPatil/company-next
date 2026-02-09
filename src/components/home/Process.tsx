const steps = [
  "Requirement Discovery",
  "Technical Planning",
  "UI/UX Design",
  "Development",
  "QA & Testing",
  "Deployment & Support",
]
  
export default function Process() {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-amber-500 text-2xl font-bold">
                {i + 1}
              </span>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  