const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  number: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (v) {
        // XX-XXXXXX tai XXX-XXXXXXXX
        return /^(\d{2,3})-\d{5,}$/.test(v)
      },
      message: (props) =>
        `${props.value} should be in the format XX-XXXXXX or XXX-XXXXXXXX.`,
    },
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Person = mongoose.model('Person', personSchema)

exports.Person = Person
