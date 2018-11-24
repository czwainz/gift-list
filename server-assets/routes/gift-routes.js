const router = require('express').Router()
let Gift = require('../models/Gift')

router.post('/', (req, res, next) => {
  Gift.create(req.body)
    .then(gift => {
      res.send(gift)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/', (req, res, next) => {
  Gift.find({})
    .then(gifts => {
      res.send(gifts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/', (req, res, next) => {
  Gift.findByIdAndUpdate(req.params.giftId, req.body, { new: true })
    .then(gift => {
      res.send(gift)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/', (req, res, next) => {
  Gift.findByIdAndDelete(req.params.giftId)
    .then(deletedGift => {
      res.send('Deleted!')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router