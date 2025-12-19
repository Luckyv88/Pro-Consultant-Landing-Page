const Client = require('../models/Client')

exports.addClient = async (req, res) => {
  const client = new Client(req.body)
  await client.save()
  res.status(201).json(client)
}

exports.getClients = async (req, res) => {
  const clients = await Client.find()
  res.json(clients)
}
