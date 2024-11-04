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
                {currentDate}
            </h2>
            <br />
            <div>
                {listGenerate(15)}
            </div>
            <br />
            <div>
                {gerarLista(10)}
            </div>
        </div>
    )
};

// Exercise List

function listGenerate (totalLines) {
    let list = Array.from({length: totalLines}, (_, index) => index + 1)
    let html = [];
    list.forEach((number) => {
        if (number === totalLines) {
            html.push(<span key={number}>{number}</span>)
        } else {
            html.push(
                <span key={number}>{number}, </span>
            );
        };
    });
    return html
}

// Solution

function gerarLista (total) {
    let list = [];
    for (let i = 1; i <= total; i++) {
        if (i === total) {
            list.push(<span key={i}>{i}</span>)
        } else {
            list.push(<span key={i}>{i}, </span>)
        };
    };
    return list
}