import React from 'react';


interface Cardprops {
    width: string;
    height: string;
}


const Card = ({width, height}: Cardprops) => {
  return (
    <div style={{width, background:'gray'}}>
        Card
        
    </div>
  )
}

export default Card