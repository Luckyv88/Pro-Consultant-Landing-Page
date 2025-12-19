const multer = require('multer')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const cropImage = async (req, res, next) => {
  if (!req.file) return next()

  const filename = Date.now() + '.jpg'
  const filepath = path.join(__dirname, '../uploads/', filename)

  await sharp(req.file.buffer)
    .resize(450, 350)
    .toFile(filepath)

  req.body.image = `/uploads/${filename}`
  next()
}

module.exports = { upload, cropImage }
