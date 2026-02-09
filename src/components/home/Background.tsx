import { getStrapiMedia } from "@/lib/strapi"
import Image from "next/image"

export default function Background({ siteSettings }: any) {
    const logoUrl = getStrapiMedia(siteSettings?.logo?.url)
  return (
    <section className="relative h-[90vh] flex items-center">
        {
          logoUrl && (
            <img
                src={logoUrl}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
          )
        }

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <p className="uppercase tracking-widest text-amber-400">
          {siteSettings?.company_name}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {siteSettings?.tagline}
        </h1>

        <div className="mt-8 flex gap-4">
          <button className="bg-amber-500 px-6 py-3 rounded">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
