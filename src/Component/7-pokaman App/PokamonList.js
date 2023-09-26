import React from 'react'

const PkamonList = ({pokaman}) => {
  return (
    <>

{pokaman.map(p=>( 
  <div key={p}>{p}</div>
))}


    </>
  )
}

export default PkamonList;