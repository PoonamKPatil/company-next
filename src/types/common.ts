export type RichTextChild = {
    type: "text"
    text: string
}

export type RichTextBlock = {
    type: "paragraph" | "heading" | "list" | "quote"
    children: RichTextChild[]
}

export type RichTextContent = RichTextBlock[]

export type StrapiImageField = {
    url: string | Blob
} | null
  