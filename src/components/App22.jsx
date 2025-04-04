import React from 'react'

export default function App22() {
    const NAME=import.meta.env.REACT_APP_NAME
    return (
        <div>
            <h3>App22</h3>
            Hello{NAME}
        </div>
    )
}
