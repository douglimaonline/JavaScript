import { useState, useEffect } from 'react'

export default function () {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    console.log('name:', name)
    console.log('age:', age)
  }, [name, age])

  function saveUser() {
    fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    })
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <button onClick={saveUser}>Submit</button>
      </div>
    </div>
  )
}
