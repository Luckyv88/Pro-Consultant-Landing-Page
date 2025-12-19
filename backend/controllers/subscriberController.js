const Subscriber = require('../models/Subscriber')

exports.addSubscriber = async (req, res) => {
  const subscriber = new Subscriber(req.body)
  await subscriber.save()
  res.json({ message: 'Subscribed successfully' })
}

exports.getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find()
  res.json(subscribers)
}
