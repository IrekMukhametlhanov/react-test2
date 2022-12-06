import React, { FC } from 'react'

interface ListProps<T>{
     Items: T[];
     renderItem: (item: T) => React.ReactNode
}


export default function List<T>(props: ListProps<T>){
    return(
        <div>
            {props.Items.map(props.renderItem)}
        </div>
    )
}