import React from 'react'

interface Person {
  name: string
  age?: number
}

export default function Person(props: Person) {
  return (
    <div style={{ margin: '1px' }}>
      <h1>Pessoa:</h1>
      <h4>{props.name}</h4>
      <h4>{props.age ?? 'Not Informed.'}</h4>
    </div>
  )
}
