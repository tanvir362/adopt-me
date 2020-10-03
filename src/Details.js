import React from 'react'

const Details = (props) => {
    return (
        <pre>
            <code>{JSON.stringify(props, null, 4 )}</code>
            <h1>{`Hi, ${props.name}`}</h1>
        </pre>
    )
}

export default Details