import { Button } from '@mui/material'
import React from 'react'
import { useHooks } from '../lib/hooks'

const UploadImage = (props: {}): JSX.Element => {
  const { handleFiles } = useHooks()
  return (
    <Button variant='contained' component='label'>
      Upload Image
      <input hidden accept='image/*' multiple type='file' onChange={handleFiles} />
    </Button>
  )
}
export default UploadImage
