export default function handler(req, res) {
  const id = +req.query.id
  res.status(200).json({
    id,
    name: 'Alimoeiro Danilo',
    email: `alimoeiro${id}@email.com`,
  })
}
