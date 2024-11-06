import styles from "./style.module.css"

export default function Title(props) {
    return props.small ?  (
        <div className={styles.title}>
        <h2 style={{transform: "scaleY(-1)"}} className={styles.red}>{props.main}</h2>
        <p>{props.subtitle}</p>
        </div>
    ) : (
        <div className={styles.title}>
        <h1>{props.main}</h1>
        <h2 className={styles.blue}>{props.subtitle}</h2>
        </div>
    )
};