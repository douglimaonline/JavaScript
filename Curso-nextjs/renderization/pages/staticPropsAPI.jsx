export async function getStaticProps() {
  console.log(
    "This console log can't be seen on browser, because thisfunction is executed on server side. Also this will be printed only on build of application."
  )

  const resp = await fetch('http://localhost:3000/api/products')
  const products = await resp.json()
  return {
    props: {
      products,
    },
  }
}

export default function Static(props) {
  function renderProducts() {
    return props.products.map((prod) => {
      return (
        <li key={prod.id}>
          Product {prod.name} cost ${prod.price}
        </li>
      )
    })
  }

  return (
    <div>
      <h1>Static Props using API</h1>
      <ul>{renderProducts()}</ul>
    </div>
  )
}

// Explanation:
// Look the console.log on line 3.
