import React from "react";

const Notification = ({ message, isError, setError }) => {
    if (message === null) {
        return null
    }
    let isErr = ( isError ? 'error' : 'success' )

    return (
        <div className={`notification ${isErr}`}>
            {message}
        </div>
    )
}

export default Notification