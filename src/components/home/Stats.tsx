import { StatsProps } from "@/types/stat";

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-4xl font-bold text-amber-400">{s.value}</p>
            <p className="mt-2 text-sm tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

  