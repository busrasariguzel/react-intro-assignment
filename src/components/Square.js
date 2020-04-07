import React from 'react'

const Square = (props) => {
    return (

<div  className = "square">
<img src={props.image}
    style={{width: 200, height: 200, padding:
    '20px'}} alt="..." />
</div>

    )
}

export default Square