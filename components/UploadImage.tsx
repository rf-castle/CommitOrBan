import React from 'react';
import {Button} from '@mui/material';

const UploadImage = (props: {}): JSX.Element => {
  return <Button variant="contained" component="label">
    Upload Image
    <input hidden accept="image/*" multiple type="file" />
  </Button>
}
export default UploadImage