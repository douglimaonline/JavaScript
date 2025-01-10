import styles from './exercises.module.css'
import { useState } from 'react'

export default function mouse() {
  const [mouseLog, setMouseLog] = useState({
    x: 0,
    y: 0,
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
      <h1>X: {mouseLog.x}</h1>
      <h1>Y: {mouseLog.y}</h1>
    </div>
  )
}
