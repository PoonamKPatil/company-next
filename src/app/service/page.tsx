import { extractTextFromRichText, getServices, getStrapiMedia } from "@/lib/strapi"
import { Service } from "@/types/service"

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We design, build, and scale digital products that drive real business results.
          </p>
        </div>

        {/* Cards */}
        <ul
          role="list"
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service: Service) => {
            return (
              <li
                key={service.id}
                className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl"
              >
                {/* Background image */}
                <img
                  src={service.image?.url}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3">
                    {extractTextFromRichText(service.description)}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-400">
                      ${service.price}
                    </span>

                    <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
