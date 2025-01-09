import styles from './mouse.module.css'

function mouseMove() {
  console.log(event)
}

export default function mouse() {
  return (
    <div className={styles.mouse} onMouseOver={mouseMove}>
      <label>X: ?</label>
      <label>Y: ?</label>
    </div>
  )
}
