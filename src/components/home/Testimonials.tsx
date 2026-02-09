"use client"

import { extractTextFromRichText } from "@/lib/strapi"
import { Testimonial } from "@/types/testimonial"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

type TestimonialsProps = {
  testimonials: Testimonial[]
}
export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [visible, setVisible] = useState(3)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setVisible(3)
      else if (window.innerWidth >= 768) setVisible(2)
      else setVisible(1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (!testimonials?.length) return null

  const totalPages = Math.ceil(testimonials.length / visible)

  const start = page * visible
  const end = start + visible
  const cards = testimonials.slice(start, end)

  const prev = () => {
    if (page > 0) setPage(page - 1)
  }

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1)
  }

  return (
    <section className="py-15 bg-[#f9f4ec]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((t: Testimonial) => (
            <div
              key={t.id}
              className="rounded-3xl bg-gray-800 p-8 text-white shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="text-6xl font-bold mb-6">“</div>
                <p className="text-base leading-relaxed">
                  {extractTextFromRichText(t.quote)}
                </p>
              </div>

              <div className="border-t border-white/30 mt-8 pt-6">
                <p className="font-semibold uppercase tracking-wide">
                  {t.author_name}
                </p>
                <p className="text-sm opacity-80">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prev}
              disabled={page === 0}
              className="h-12 w-12 rounded-full bg-amber-400 text-white flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={page === totalPages - 1}
              className="h-12 w-12 rounded-full bg-amber-400 text-white flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
