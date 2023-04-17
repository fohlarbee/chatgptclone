import React from 'react'

export default function OptionSelect({arrayItems, selectOption}) {
  return (
    <>
        <h1 className='heading
        '>React AI app</h1>
        <div className="grid-main">
           {arrayItems.map(item => {
            return(
              <div className="grid-child" key={item.id} onClick={() => selectOption(item.option)}> 
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
              </div>
              )
           
           })}

            
        </div>
    </>
   
  )
}

