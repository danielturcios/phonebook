import React from 'react'
import Person from './Person'

const Persons = ( {filteredPersons}) => {
    return (
        <div>
            <ul>
            {filteredPersons.map(person => 
                <Person key={person.name} person={person} />
            )}
            </ul>
        </div>
    )
}

export default Persons