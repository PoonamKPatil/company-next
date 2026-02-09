import { extractTextFromRichText, getBlogBySlug } from "@/lib/strapi"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) {
    notFound()
  }

  return (
    <article>
      <section className="relative h-[90vh] w-full">
        {blog.featured_image ? (
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800" />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-20 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {blog.title}
            </h1>

            <div className="mt-4 text-sm text-white/80">
              By {blog.author} ·{" "}
              {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
                <div className="prose prose-lg max-w-none">
                  {extractTextFromRichText(blog.content)}
                </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
