import styles from './exercises.module.css'
import { useState } from 'react'

export default function mouse() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.mouse}>
      <h1>Count: {count}</h1>
      <div>
        <button className={styles.button} onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className={styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  )
}
