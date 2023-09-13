import React, { useState } from 'react'
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
  const [loading, setloading] = useState(true);
  const [tour, settour] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <h1>our tour project</h1>

    </>
  )
}

export default Tours