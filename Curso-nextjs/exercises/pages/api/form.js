export default function form(req, res) {
  res.status(200).json({
    data: JSON.parse(req.body),
  })
}
