import React from 'react'

const Categries = ({filterItems}) => {
  return (
    <>
    <div className="btn-container">
        <button className="filter-btn" onClick={()=>filterItems('breakfast')}>click</button>
    </div>
 
    </>
  )
}

export default Categries