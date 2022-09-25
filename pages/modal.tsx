import Image from 'next/image'
import React from 'react'
import styles from '../styles/Modal.module.css'

const Modal = (props: { showFlag: boolean; closeModal: () => void }) => {
  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div id='overlay' className={styles.overlay}>
          <div id='modalContent' className={styles.content}>
            <div className={styles.success}>Success!!!</div>
            <Image src='/fire-flower-pose.gif' width={1440} height={810}></Image>
            <a className={styles.close} onClick={props.closeModal}>
              close
            </a>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  )
}

export default Modal
