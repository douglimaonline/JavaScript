export default function chessBoard() {
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
      <div>{gridGenerate()}</div>
    </div>
  )

  function rowGenerate(x) {
    let row = []
    for (let i = 1; i <= 4; i++) {
      if (x % 2 == 0) {
        row.push(
          <>
            <div
              style={{ background: 'gray', width: '70px', height: '70px' }}
            ></div>
            <div
              style={{ background: 'white', width: '70px', height: '70px' }}
            ></div>
          </>
        )
      } else {
        row.push(
          <>
            <div
              style={{ background: 'white', width: '70px', height: '70px' }}
            ></div>
            <div
              style={{ background: 'gray', width: '70px', height: '70px' }}
            ></div>
          </>
        )
      }
    }
    return row
  }

  function gridGenerate() {
    let grid = []
    for (let i = 1; i <= 8; i++) {
      grid.push(
        <div>
          <div style={{ display: 'flex' }}>{rowGenerate(i)}</div>
        </div>
      )
    }
    return grid
  }
}
