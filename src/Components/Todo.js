import React, { useEffect, useState } from 'react'

function Todo() {
    const [item,setItem] = useState('')
    const [allvalues, setvalues] =useState([])
    useEffect(()=>{
    },[allvalues])

    function addItem(){
        if(Item!=''){
            setvalues((allvalues)=>{
                const updated =[...allvalues,item];
                console.log(updated);
                return updated;
            })
        }
    }
  return (
    <div>Todo</div>
  )
}
