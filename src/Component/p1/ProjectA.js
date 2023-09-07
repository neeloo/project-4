import React, { useState } from 'react'
import List from './List';

const ProjectA = () => {
  //const [People, setPeople] = useState();
  return (
    <>
      <main>
        <section className="container">
          <h3>0 Birthday today</h3>
          <List/>
          <button> clear all</button>
        </section>
      </main>
    </>
  )
}

export default ProjectA;