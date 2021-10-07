import React, { useState, useEffect } from "react"
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from "./components/Notification"

function App() {
  const [ persons, setPersons ] = useState([])
  const [ newName, setName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')
  const [successMessage, setMessage] = useState(null)
  const [isError, setError] = useState(false)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  let filteredPersons = persons
  if (newFilter) {
    filteredPersons = persons.filter(
      person => person.name.toLocaleLowerCase().indexOf(newFilter.toLocaleLowerCase()) !== -1)
  }

  const toDelete = ( name, id ) => {
    console.log(id)
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(success => {
          console.log("delete success")
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert(
            `${name} was already deleted from server`
          )
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        message={successMessage} 
        isError={isError} 
        setError={setError} 
      />

      <Filter value={newFilter} onChange={setFilter} />

      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName} 
        setName={setName}
        newNumber={newNumber}
        setNumber={setNumber}
        setMessage={setMessage}
        setError={setError}
      />

      <h2>Numbers</h2>
      <Persons 
        filteredPersons={filteredPersons}
        toDelete={toDelete} 
      />
      
    </div>
  );
}

export default App;
