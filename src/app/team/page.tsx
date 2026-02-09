import { extractTextFromRichText, getTeams } from "@/lib/strapi"
import { Team } from "@/types/team"
import Link from "next/link"

export default async function TeamPage() {
  const teams = await getTeams()

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Meet our team
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We're a dynamic group of individuals who are passionate about what we do
            and dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Cards */}
        <ul
          role="list"
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teams.map((team: Team) => (
            <li
              key={team.id}
              className="group rounded-2xl bg-slate-800/60 p-8 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-slate-800"
            >
               <Link href={`/team/${team.documentId}`} className="block group">
                  {/* Avatar */}
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-slate-700">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {team.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {team.designation}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-4">
                    {extractTextFromRichText(team.bio)}
                  </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
