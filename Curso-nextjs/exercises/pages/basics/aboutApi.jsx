import { useState } from 'react'

export default function () {
  const [name, setName] = useState('Douglas')
  const [age, setAge] = useState(34)

  async function saveUser() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    })
    const userList = await fetch('/api/form').then((res) => res.json())
    console.log(userList)
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
