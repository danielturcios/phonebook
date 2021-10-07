import React from 'react'
import personServices from '../services/persons'

const PersonForm = ( { persons, setPersons, newName, setName, newNumber, setNumber, setMessage, setError } ) => {
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber
        }
    
        // if person already exists in database, update number to new number
        if (persons.some( person => person.name.toLowerCase() === personObject.name.toLowerCase())) {          
          const person = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
          const changedPerson = {...person, number: newNumber}

          personServices
            .update(person.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
              setName('')
              setNumber('')
              setError(false)
            })
            // attempting to update number from person previously removed from database
            .catch(error => {
              setError(true) // changes css
              setMessage(
                `Information of ${changedPerson.name} has already been removed from server`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
              setPersons(persons.filter(p => p.id !== person.id))
            })
            // updated person's new number successfully 
            setMessage(
              `Updated ${personObject.name}'s number`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
        }
        // person does not exist in current database -> create new personObject in the database
        else {
          personServices
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setName('')
              setNumber('')
              setError(false)
            })
          setMessage(
            `Added ${personObject.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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