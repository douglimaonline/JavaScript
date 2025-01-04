export default function Square(prop) {
  return (
    <div
      style={{
        background: prop.white ? 'white' : 'gray',
        width: '70px',
        height: '70px',
      }}
    ></div>
  )
}
