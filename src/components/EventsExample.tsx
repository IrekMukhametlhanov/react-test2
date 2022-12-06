
import React, { FC, useRef, useState } from 'react'

const EventsExample : FC = () => {
    const[value, setValue] = useState<string>('');
    const[isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const chageHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
       setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(inputRef.current?.value)
    }



 const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
    console.log("drag")
 }

 const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) =>{
  e.preventDefault()
  setIsDrag(true)
 }

 const leaveHandler = (e: React.DragEvent<HTMLDivElement>) =>{
  e.preventDefault()
  setIsDrag(true)
 }

 const dropHandler = (e:React.DragEvent<HTMLDivElement>)=>{
   e.preventDefault()
   setIsDrag(false)
   console.log('drop')
 }

  return (
    <div>
        <input value={value} onChange={chageHandler} type="text" placeholder='управляемый '/>
        <input ref={inputRef} type="text" placeholder='не упр'/>
        <button onClick={clickHandler}> fsd</button>
        <div onDrag={dragHandler} draggable style={{width: 200, height: 400, background:"red", marginTop:15}}></div>
        <div 
        onDrop={dropHandler}  
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
         style={{width: 200, height: 400, background:isDrag? "blue" : "red", marginTop:15}}></div>
    </div>
  )
}

export default EventsExample