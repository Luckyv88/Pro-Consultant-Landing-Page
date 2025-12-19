const express = require('express')
const router = express.Router()
const Subscriber = require('../models/Subscriber')

router.post('/', async (req, res) => {
  const subscriber = new Subscriber(req.body)
  await subscriber.save()
  res.json({ message: 'Subscribed successfully' })
})

router.get('/', async (req, res) => {
  const subscribers = await Subscriber.find()
  res.json(subscribers)
})

module.exports = router
