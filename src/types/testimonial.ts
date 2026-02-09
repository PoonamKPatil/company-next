import { RichTextContent } from "./common"

export type Testimonial = {
  id: number
  quote: RichTextContent
  author_name: string
  title: string
}
