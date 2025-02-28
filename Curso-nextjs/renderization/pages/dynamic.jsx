export function getServerSideProps() {
  return {
    props: {
      number: Math.random(),
    },
  }
}

export default function Dynamic(props) {
  return (
    <>
      <h1>Dynamic Props</h1>
      <span>{props.number}</span>
    </>
  )
}

// Explanation:
// Using getsServerSideProps function force the next to generate on server side.
