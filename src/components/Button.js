import React from 'react'

function Button({title,properties,icon}) {
  return (
    <>  
        <button className={`px-5 py-2 ${properties}`}>{icon}{title}</button>
    </>
  )
}

export default Button