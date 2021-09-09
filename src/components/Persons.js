import React from 'react'
import Person from './Person'

const Persons = ( {filteredPersons}) => {
    return (
        <div>
            <ul style={{'listStyleType': 'none', 'listStylePostion': 'inside', 'margin': 0, 'padding': 0}}>
            {filteredPersons.map(person => 
                <Person key={person.name} person={person} />
            )}
            </ul>
        </div>
    )
}

export default Persons