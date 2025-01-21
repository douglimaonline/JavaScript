import Line from '../../components/Chess/line'

export default function Board() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <Line white />
        <Line />
        <Line white />
        <Line />
        <Line white />
        <Line />
        <Line white />
        <Line />
      </div>
    </div>
  )
}
