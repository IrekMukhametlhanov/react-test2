import React, { FC, useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}


interface Cardprops {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactChild | React.ReactNode;
}


const Card: FC<Cardprops> = ({ width, height, children, variant }) => {


  return (
    <div style={{
      width, height, border: variant === CardVariant.outlined ? '1px solid gray ' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }}

    >
      {children}
    </div>
  )
}

export default Card