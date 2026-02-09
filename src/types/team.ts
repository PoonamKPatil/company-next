import { RichTextContent } from "./common"

export type Team = {
    id: number
    documentId: string
    name: string
    designation: string
    photo:  {
        url : string | Blob | undefined
    }
    bio: RichTextContent
    image: string | Blob | undefined 
}
  