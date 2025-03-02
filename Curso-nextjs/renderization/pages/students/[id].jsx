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

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:3000/api/students/${context.params.id}`
  )
  const student = await resp.json()
  return {
    props: { student },
  }
}

export default function studentById(props) {
  const { student } = props
  return (
    <div>
      <h1>Student Details</h1>
      <p>Id: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
    </div>
  )
}
