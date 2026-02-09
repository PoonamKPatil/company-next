const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export async function fetchFromStrapi(path: string) {
  const res = await fetch(`${STRAPI_URL}${path}`)
  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status}`)
  }

  return res.json()
}

export async function getSiteSettings() {
  const res = await fetchFromStrapi(
    "/api/site-setting?populate=logo&populate[]=stats&populate[]=testimonials&populate[]=services&populate[]=blogs"
  )
  return res?.data ?? null
}

export async function getServices() {
  const res = await fetchFromStrapi(
    "/api/services?populate=image"
  )
  return res?.data ?? []
}

export async function getTeams() {
  const res = await fetchFromStrapi(
    "/api/team-members?populate=*"
  )
  const teams = res?.data.map((item: any) => ({
    ...item,
    photo: item.photo
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.photo.url}`
      : null,
  }))
  return teams
}

export async function getBlogs() {
  const res = await fetchFromStrapi(
    "/api/blogs?populate=*"
  )
  const blogs = res?.data.map((item: any) => ({
    ...item,
    featured_image: item.featured_image
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.featured_image.url}`
      : null,
  }))
  return blogs
}

export async function getBlogBySlug(slug: string) {
  const res = await fetchFromStrapi(
    `/api/blogs?filters[slug][$eq]=${slug}&populate=*`
  )
  const blogData = res?.data?.[0] ?? null

  if (!blogData) return null

  return {
    ...blogData,
    featured_image: blogData.featured_image
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${blogData.featured_image.url}`
      : null,
  }
}

export async function getTeamBySlug(documentId: string) {
  const res = await fetchFromStrapi(
    `/api/team-members/${documentId}?populate=photo`
  )
  const teamData = res?.data ?? null
  if (!teamData) return null

  return {
    ...teamData,
    photo: teamData.photo
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${teamData.photo.url}`
      : null,
  }
}

export async function getFooter() {
  const res = await fetchFromStrapi(
    "/api/site-setting")

  return res?.data ?? null
}

export function getStrapiMedia(url?: string) {
  if (!url) return null

  // already absolute
  if (url.startsWith("http")) return url

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`
}
  

export function extractTextFromRichText(blocks: any[]) {
  if (!Array.isArray(blocks)) return ""

  return blocks
    .map(block =>
      block.children?.map((child: any) => child.text).join("")
    )
    .join(" ")
}