import { StrapiImageField } from "./common"
import { Stat } from "./stat"
import { Testimonial } from "./testimonial"


export type SiteSettings = {
  company_name: string
  tagline: string
  logo: StrapiImageField
  stats: Stat[]
  testimonials: Testimonial[]
}
