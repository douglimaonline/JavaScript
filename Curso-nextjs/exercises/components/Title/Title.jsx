export default function Title(props) {
    return props.small ?  (
        <div className="title">
        <h2 className="red">{props.main}</h2>
        <p>{props.subtitle}</p>
        </div>
    ) : (
        <div className="title">
        <h1>{props.main}</h1>
        <h2 className="blue">{props.subtitle}</h2>
        </div>

    )
};