import Child from './child'

function sendMessage(param) {
  console.log(param)
}
export default function Parent() {
  return (
    <div>
      <Child sendMessage={sendMessage} />
    </div>
  )
}
