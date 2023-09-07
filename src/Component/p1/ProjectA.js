import React, { useState } from 'react'
import data from './Data'
import List from './List'


const ProjectA = () => {
const[people,setpeople]=useState(data)
  return (
    <>
        <main>
            <section className="container">
                <h3>  {people.length} birthday today </h3>
               <List people={people}/>
               <button  onClick={()=>setpeople([])}>Clear all</button>
            </section>
        </main>
    </>
  )
}

export default ProjectA