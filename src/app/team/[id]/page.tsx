import { extractTextFromRichText, getTeamBySlug } from "@/lib/strapi"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    id: string
  }
}

export default async function TeamMemberPage({ params }: PageProps) {
    const { id } = await params
    const team = await getTeamBySlug(id)
    if (!team) {
        notFound()
    }
    return (
        <section className="min-h-[calc(100vh-5rem)] bg-slate-950 text-white py-24">
            <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
                <img
                    src={team.photo}
                    alt={team.name}
                    className="h-full w-full object-cover"
                />
                </div>

                {/* Content */}
                <div>
                <h1 className="text-4xl font-bold">
                    {team.name}
                </h1>

                <p className="mt-2 text-lg text-slate-400">
                    {team.designation}
                </p>

                <div className="mt-8 prose prose-invert max-w-none">
                    {extractTextFromRichText(team.bio)}
                </div>
                </div>
            </div>
        </section>
    )
}
