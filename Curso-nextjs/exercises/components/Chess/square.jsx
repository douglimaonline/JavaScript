import styles from './square.module.css'

export default function Square(prop) {
  return (
    <div
      className={styles.square}
      style={{
        background: prop.white ? 'white' : 'gray',
      }}
    ></div>
  )
}
