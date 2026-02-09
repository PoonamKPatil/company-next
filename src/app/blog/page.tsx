import Link from "next/link"
import { extractTextFromRichText, getBlogs } from "@/lib/strapi"

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Insights & Articles
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Learn from our experiences building and scaling modern digital products.
          </p>
        </div>

        {/* Blog Grid */}
        <ul
          role="list"
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog: any) => {
            const excerpt = extractTextFromRichText(blog.content)

            return (
              <li
                key={blog.id}
                className="group overflow-hidden rounded-2xl bg-slate-800/60 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-slate-800"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  {blog.featured_image ? (
                    <img
                      src={`${blog.featured_image}`}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-600/20">
                      <span className="text-sm text-slate-300">
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <time>{blog.published_date}</time>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
                    {excerpt}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-5 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    Read more →
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
