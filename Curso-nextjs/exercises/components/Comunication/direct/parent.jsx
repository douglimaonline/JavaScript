import Child from './child'

export default function Parent(props) {
  return (
    <div>
      <h1>Edmilson {props.family}</h1>
      <Child name="Igor" family={props.family} />
      <Child name="Diogo" family={props.family} />
    </div>
  )
}
