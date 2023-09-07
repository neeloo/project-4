import React, { useState } from 'react'

const Project = () => {
  const [People, setPeople] = useState();
  return (
    <>
      <main>
        <section className="container">
          <h3>{People.length} birthday today</h3>
          {/* <List People={People} /> */}
          <button onClick={() => setPeople([])}> clear all</button>
        </section>
      </main>
    </>
  )
}

export default Project;