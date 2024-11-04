export default function knowingJSX() {
    const subtitle = "Integrate JS with JSX"
    let currentDate = new Date().toJSON().slice(0, 10);
    
    return (
        <div>
            <h1>
                Knowing about JSX.
            </h1>
            <br />
            <h2>
                {subtitle}
            </h2>
            <br />
            <h2>
                {currentDate}
            </h2>
            <h4>
                {between(7, 1, 9)}
            </h4>
        </div>
    )
};

function between (value, min, max) {
    if (value >= min && value <= max) return "Sim"
}