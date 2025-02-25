// import { useEffect, useState } from 'react'

export default function Static() {
  // const [num, setNum] = useState()

  // useEffect(() => {
  //   setNum(Math.random())
  // }, [])

  return (
    <div>
      <h1>Static #1</h1>
      {/* <h1>{num}</h1> */}
    </div>
  )
}

// Explanation:
// The Next automatically use the better strategy of renderizarion according to your code.
// On the exemple above, the page will be render on server side.
// If I take off the comments, the render will change from SSR (Server-Side Rendering) to CSR (Client-Side Rendering).
