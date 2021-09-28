import React from 'react'
import personServices from '../services/persons'

const PersonForm = ( { persons, setPersons, newName, setName, newNumber, setNumber } ) => {
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber
        }
    
        if (persons.some( person => person.name === personObject.name)) {
          console.log(personObject.name + ' already exists')
          window.alert(`${personObject.name} is already added to phonebook`)
        }
        else {
          personServices
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setName('')
              setNumber('')
            })
        }
    }
    
    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNumber(event.target.value)
      }

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm