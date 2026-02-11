import { generateUploadButton } from '@uploadthing/react'
import { HOST } from './api-client'

export const UploadButton = generateUploadButton({
  url: `${HOST}/v1/uploadthing`,
})
