import { ChangeEventHandler } from 'react'
import { addPhoto, DarkHistoryPhoto } from './dark_history_photo'

export const useHooks = function (): { handleFiles: ChangeEventHandler<HTMLInputElement> } {
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const func = async (): Promise<void> => {
      const files = event.currentTarget.files
      if (files == null || files?.length === 0) return
      const file = files[0]
      console.log('file:', file)
      const contentType = file.name
      const arrayBuffer = await file.arrayBuffer()
      const base64String = btoa(
        String.fromCharCode.apply(null, Array.from<number>(new Uint8Array(arrayBuffer))),
      )
      console.log(`data:${contentType};base64,${base64String}`)
      const newPhoto: DarkHistoryPhoto = {
        binary: base64String,
        id: new Date().getTime(),
      }
      void addPhoto(newPhoto).then((r) => r)
    }
    void func()
  }
  return { handleFiles }
}
