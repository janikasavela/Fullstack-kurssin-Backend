const express = require('express')
const router = express.Router()
const { Person } = require('../models/person')

/* const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]; */

router.get('/', async (req, res) => {
  const persons = await Person.find().sort('name')
  res.send(persons)
})

router.get('/info', async (req, res) => {
  const contacts = (await Person.find()).length
  const date = new Date()

  res.send(`<p>Phonebook has info for ${contacts} people. </p> <p>${date}</p>`)
})

router.get('/:id', async (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.send(person)
      } else {
        res.status(404).send('The person with the given ID was not found')
      }
    })
    .catch((err) => next(err))
})

router.delete('/:id', async (req, res, next) => {
  await Person.findByIdAndDelete(req.params.id)
    .then((person) => {
      if (person) {
        res.send(person)
      } else {
        return res
          .status(404)
          .send('The person with the given ID was not found')
      }
    })
    .catch((err) => next(err))
})

router.put('/:id', async (req, res, next) => {
  if (!req.body.name || !req.body.number)
    return res.status(400).send('Name and number are both required')

  await Person.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      number: req.body.number,
    },
    { new: true, runValidators: true, context: 'query' }
  )
    .then((person) => {
      if (person) {
        res.send(person)
      } else {
        res.status(404).send('The genre with the given ID was not found')
      }
    })
    .catch((err) => next(err))
})

router.post('/', async (req, res, next) => {
  if (!req.body.name || !req.body.number)
    return res.status(400).send('Name and number are both required')

  let person = new Person({
    name: req.body.name,
    number: req.body.number,
  })

  await person
    .save()
    .then((person) => {
      res.send(person)
    })
    .catch((err) => next(err))
})

module.exports = router
