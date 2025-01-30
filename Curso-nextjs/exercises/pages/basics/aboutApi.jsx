import { useState } from 'react'

export default function () {
  const [name, setName] = useState('Doug')
  const [age, setAge] = useState(34)
  const [userList, setUserList] = useState([])

  async function saveUser() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    })
    const updatedUserList = await fetch('/api/form').then((res) => res.json())
    setUserList(updatedUserList)
  }

  function renderListofUser() {
    return userList.map((user, i) => {
      return (
        <>
          <tbody>
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          </tbody>
        </>
      )
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
      {userList.length > 0 && (
        <div style={{ marginTop: '5px' }}>
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            {renderListofUser()}
          </table>
        </div>
      )}
    </div>
  )
}
