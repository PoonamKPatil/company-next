import { Blog } from "@/types/blog"
import { RichTextChild, RichTextContent } from "@/types/common"
import { Team } from "@/types/team"

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
  const teams = res?.data.map((item: Team) => ({
    ...item,
    image: item.photo
      ? resolveStrapiMediaUrl(item.photo.url)
      : null,
  }))
  return teams
}

export function resolveStrapiMediaUrl(
  url?: string | Blob
): string | null {
  if (!url || typeof url !== "string") return null

  // Cloudinary / CDN → already absolute
  if (url.startsWith("http")) return url

  // Local / relative uploads
  return `${STRAPI_URL}${url}`
}


export async function getBlogs() {
  const res = await fetchFromStrapi(
    "/api/blogs?populate=*"
  )
  const blogs = res?.data.map((item: Blog) => ({
    ...item,
    image: item.featured_image
      ? resolveStrapiMediaUrl(item.featured_image.url)
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
      ? resolveStrapiMediaUrl(blogData.featured_image.url)
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
      ? resolveStrapiMediaUrl(teamData.photo.url)
      : null,
  }
}

export async function getFooter() {
  const res = await fetchFromStrapi(
    "/api/site-setting")

  return res?.data ?? null
}

export function getStrapiMedia(url?: string | Blob | undefined) {
  if (!url) return null

  return resolveStrapiMediaUrl(typeof url === "string" ? url : "")
}
  

export function extractTextFromRichText(blocks: RichTextContent | null | undefined) {
  if (!Array.isArray(blocks)) return ""

  return blocks
    .map(block =>
      block.children?.map((child: RichTextChild) => child.text).join("")
    )
    .join(" ")
}