export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'pen', price: 4.6 },
    { id: 1, name: 'notebook', price: 10.3 },
    { id: 1, name: 'pencil', price: 7.0 },
    { id: 1, name: 'paper', price: 0.4 },
    { id: 1, name: 'stapler', price: 15.8 },
  ])
}
