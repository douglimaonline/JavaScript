// ECMA Script é um sistema de módule que substitui o 'require' e 'module.export'
// No caso de export default, não é necessário dar nome à function, neste caso pode-se importar com qualquer nome
// Em caso de nome export default, podemos importar com outro nome usando a palavra chave 'as'
// Caso a function não seja importada sem ser a default, devemos utilizar o {} no import

export default function () {
  return <h1>Comp1</h1>
}

export function Comp2() {
  return <h1>Comp2</h1>
}

export const Comp3 = () => {
  return <h1>Comp3</h1>
}

const Comp4 = () => <h1>Comp4</h1>

const Comp5 = (props) => <h1>{props.msg}</h1>

export { Comp4, Comp5 }
