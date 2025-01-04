import Square from './square'

export default function Line(prop) {
  return (
    <div style={{ display: 'flex' }}>
      <Square white={prop.white} />
      <Square white={!prop.white} />
      <Square white={prop.white} />
      <Square white={!prop.white} />
      <Square white={prop.white} />
      <Square white={!prop.white} />
      <Square white={prop.white} />
      <Square white={!prop.white} />
    </div>
  )
}
