const express = require("express");
const router = express.Router();

const persons = [
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
];

router.get("/", (req, res) => {
  res.send(persons);
});

router.get("/info", (req, res) => {
  const contacts = persons.length;
  const date = new Date();

  res.send(`<p>Phonebook has info for ${contacts} people. </p> <p>${date}</p>`);
});

router.get("/:id", (req, res) => {
  const person = persons.find(
    (person) => person.id === parseInt(req.params.id)
  );
  if (!person)
    return res.status(404).send("The person with the given ID was not found");
  res.send(person);
});

router.delete("/:id", (req, res) => {
  const person = persons.find(
    (person) => person.id === parseInt(req.params.id)
  );
  if (!person)
    return res.status(404).send("The person with the given ID was not found");

  const index = persons.indexOf(person);
  persons.splice(index, 1);
  res.send(person);
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.number)
    return res.status(400).send("Name and number are both required");

  if (persons.find((person) => person.name === req.body.name))
    return res.status(400).send("Name already added to a phonebook");

  const person = {
    id: Math.floor(Math.random() * 990) + 10,
    name: req.body.name,
    number: req.body.number,
  };

  persons.push(person);
  res.send(person);
});

module.exports = router;
