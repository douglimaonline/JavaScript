const users = []

export default function form(req, res) {
  if (req.method === 'POST') {
    addUser(req)
    res.status(200).send()
  } else if (req.method === 'GET') {
    const userList = getUserList()
    res.status(200).json(userList)
  } else {
    res.status(405).send()
  }
}

function addUser(req) {
  users.push(JSON.parse(req.body))
}

function getUserList() {
  return users
}
