import { RichTextContent } from "./common"

export type Blog = {
    id: number
    title: string
    slug: string
    author: string
    published_date: string
    featured_image : {
        url: string | Blob | undefined 
    }
    image : string | Blob | undefined
    content: RichTextContent
}