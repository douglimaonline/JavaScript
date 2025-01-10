import styles from './mouse.module.css'
import { useState } from 'react'

export default function mouse() {
  const [mouseLog, setMouseLog] = useState({
    x: '',
    y: '',
  })

  return (
    <div
      className={styles.mouse}
      onMouseMove={() => {
        setMouseLog({
          x: event.clientX,
          y: event.clientY,
        })
      }}
    >
      <span>X: {mouseLog.x}</span>
      <span>Y: {mouseLog.y}</span>
    </div>
  )
}
