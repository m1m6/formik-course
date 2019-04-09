import React from 'react'

const Error = props => {
    return (
        <div style={{color: "red", marginTop: "0.5rem"}}>
            {props.children}
        </div>
    )
}

export default Error