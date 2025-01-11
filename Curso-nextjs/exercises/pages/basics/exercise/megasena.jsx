import styles from './exercises.module.css'
import { useState } from 'react'

export default function mouse() {
  const [numbers, setNumbers] = useState(['', '', '', '', '', ''])

  // array de 8 (x) números de 1 a 60

  function randNum() {
    const RandonNumber = (Math.floor(Math.random() * 60) + 1)
      .toString()
      .padStart(2, '0')
    return RandonNumber
  }

  function generateMegasenaNumbers() {
    const megaSenaNumbers = []
    for (let i = 0; i < 6; i++) {
      megaSenaNumbers.push(randNum())
    }
    setNumbers(megaSenaNumbers)
  }

  const Number = ({ number }) => {
    return <h1 className={styles.number}>{number}</h1>
  }

  return (
    <div className={styles.exercise}>
      <div style={{ display: 'flex' }}>
        {numbers.map((number, index) => (
          <Number key={index} number={number} />
        ))}
      </div>
      <h1>MEGASENA</h1>
      <div>
        <button className={styles.button} onClick={generateMegasenaNumbers}>
          Generate Numbers
        </button>
      </div>
    </div>
  )
}
