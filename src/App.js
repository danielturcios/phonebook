import React, { useState } from "react"
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import "./App.css"

function App() {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122'
    }
  ])
  const [ newName, setName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')

  let filteredPersons = persons
  if (newFilter) {
    filteredPersons = persons.filter(
      person => person.name.toLocaleLowerCase().indexOf(newFilter.toLocaleLowerCase()) !== -1)
  }

  // TODO: Finish filter
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
