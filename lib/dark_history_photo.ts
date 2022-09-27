import localforage from 'localforage'

export type DarkHistoryPhoto = {
  binary: string
  readonly id: number
}

export async function addPhoto(photo: DarkHistoryPhoto): Promise<void> {
  // photoを追加する
  const photos = await getPhoto()
  const newPhotos = [photo, ...photos]
  await localforage.setItem('local-photos', newPhotos)
}

export async function getPhoto(): Promise<DarkHistoryPhoto[]> {
  // photoを取得する
  const photos = await localforage.getItem('local-photos')
  if (photos === undefined || photos === null) {
    return []
  } else {
    return photos as DarkHistoryPhoto[]
  }
}
