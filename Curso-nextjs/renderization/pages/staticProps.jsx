export function getStaticProps() {
  return {
    revalidate: 6, // segundos
    props: {
      number: Math.random(),
    },
  }
}

export default function Static(props) {
  return (
    <>
      <h1>static Props</h1>
      <span>{props.number}</span>
    </>
  )
}

// Explanation:
// Using getStaticProps function force the next to generate only once the data you are getting.
