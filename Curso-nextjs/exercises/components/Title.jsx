export default function Title(props) {
    return props.small ?  (
        <>
        <h2>{props.main}</h2>
        <p>{props.subtitle}</p>
        </>
    ) : (
        <>
        <h1>{props.main}</h1>
        <h2>{props.subtitle}</h2>
        </>

    )
};