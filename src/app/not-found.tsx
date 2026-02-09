import Link from "next/link"

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#f9f4ec] px-6">
      <div className="max-w-xl text-center">
        
        {/* Big 404 */}
        <p className="text-[120px] font-bold leading-none text-amber-400">
          404
        </p>

        <h1 className="mt-4 text-3xl font-semibold text-gray-900">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/home"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Go to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200 opacity-30 blur-3xl" />
      </div>
    </section>
  )
}
