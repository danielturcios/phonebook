import React, { useState, useEffect } from "react"
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import "./App.css"

function App() {
  const [ persons, setPersons ] = useState([])
  const [ newName, setName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={setFilter} />

      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName} 
        setName={setName}
        newNumber={newNumber}
        setNumber={setNumber} 
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
      
    </div>
  );
}

export default App;
