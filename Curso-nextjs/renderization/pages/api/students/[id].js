export default function handler(req, res) {
  const id = +req.query.id
  res.status(200).json({
    id,
    name: 'Alimeiro Danilo',
    email: 'alimoeiro@email.com',
  })
}
