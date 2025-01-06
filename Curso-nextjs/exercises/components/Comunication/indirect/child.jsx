export default function Child(props) {
  const message = 'Passei no Enem!'

  return (
    <div>
      <h3>Child</h3>
      <button onClick={() => props.sendMessage(message)}>SendMessage</button>
    </div>
  )
}
