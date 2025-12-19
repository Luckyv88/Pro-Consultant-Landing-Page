const Contact = require('../models/Contact')

exports.addContact = async (req, res) => {
  const contact = new Contact(req.body)
  await contact.save()
  res.json({ message: 'Contact saved successfully' })
}

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find()
  res.json(contacts)
}
