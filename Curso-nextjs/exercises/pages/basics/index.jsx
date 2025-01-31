import Link from 'next/link'

export default function navigation() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link href="/basics/first">First Page</Link>
      <Link href="/basics/jsx">Jsx</Link>
      <Link href="/basics/fragment">Fragment</Link>
      <Link href="/basics/aboutComponent">AboutComponent</Link>
      <Link href="/basics/aboutTsx">AboutTsx</Link>
      <Link href="../chess/chessBoard">Xadrez</Link>
      <Link href="/basics/aboutApi">AboutAPI</Link>
      <br />
      <h4>
        Procure as páginas linkadas acima dentro do projeto e veja como
        funciona.
      </h4>
    </div>
  )
}
