import React from 'react'

const Filter = ( { value, onChange } ) => {

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        onChange(event.target.value)
    }

    return (
        <form>
            <div>
            filter shown with <input 
                value={value}
                onChange={handleFilterChange}
            />
            </div>
        </form>
    )
}

export default Filter