import React from 'react'
import Square from './Square'

const Body = () => {
return (
<div className="body" style={{
    backgroundColor:'yellow',
    textAlign: 'center'}}>
<img src="/images/cat.jpg" alt="..."
style={{width: 400, height: 200}}
/>
<p> Cats are our best friends because they teach us how to love. </p>
<Square  image="/images/square1.jpg" />
<Square  image="/images/square2.jpg"/>
<Square  image="/images/square3.jpg"/>
<Square  image="/images/square4.jpg"/>
</div>
)
}

export default Body