import { RichTextContent, StrapiImageField } from "./common"

export type Service = {
    id: number
    title: string
    price: number
    description: RichTextContent
    image?: StrapiImageField
}
  