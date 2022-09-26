import { Button } from '@mui/material'
import {signIn} from 'next-auth/react';
import styles from '../styles/Button.module.css'

const TwitterLoginButton = (props: {}): JSX.Element => {
  return (
    <div className={styles.twitter}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Button variant='contained' onClick={async (): Promise<void> => {
        await signIn('twitter')
      }}>Login with Twitter</Button>
    </div>
  )
}

export default TwitterLoginButton
