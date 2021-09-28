import React from 'react'
import Person from './Person'

const Persons = ( {filteredPersons, toDelete}) => {
    return (
        <div>
            <ul>
            {filteredPersons.map(person => 
                <Person 
                    key={person.name} 
                    person={person} 
                    toDelete={() => toDelete( person.name, person.id )} 
                />
            )}
            </ul>
        </div>
    )
}

export default Persons