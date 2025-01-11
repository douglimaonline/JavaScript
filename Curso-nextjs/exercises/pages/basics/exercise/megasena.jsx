import styles from './exercises.module.css'
import { useState, useEffect } from 'react'

export default function mouse() {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    generateMegasenaNumbers()
  }, [])

  function randNum() {
    const RandonNumber = (Math.floor(Math.random() * 60) + 1)
      .toString()
      .padStart(2, '0')
    return RandonNumber
  }

  function generateMegasenaNumbers() {
    const megaSenaNumbers = []
    for (let i = 0; i < 6; i++) {
      let rendNumber = randNum()
      while (megaSenaNumbers.includes(rendNumber)) {
        rendNumber = randNum()
      }
      megaSenaNumbers.push(rendNumber)
    }
    setNumbers(megaSenaNumbers.sort())
  }

  const Number = ({ number }) => {
    return <h1 className={styles.number}>{number}</h1>
  }

  return (
    <div className={styles.exercise}>
      <h1>MEGASENA</h1>
      <div style={{ display: 'flex' }}>
        {numbers.map((number, index) => (
          <Number key={index} number={number} />
        ))}
      </div>
      <div>
        <button className={styles.button} onClick={generateMegasenaNumbers}>
          Gerar Aposta
        </button>
      </div>
    </div>
  )
}
