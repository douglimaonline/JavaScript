export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { id: '123' } },
      { params: { id: '234' } },
      { params: { id: '345' } },
    ],
  }
}

export function getStaticProps() {
  return {
    props: {},
  }
}

export default function studentById() {
  return (
    <div>
      <h1>Student Details</h1>
    </div>
  )
}
