export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/students/tutors')
  const tutorsId = await res.json()

  const paths = tutorsId.map((id) => {
    return { params: { id: `${id}` } }
  })

  return {
    fallback: false,
    paths,
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
