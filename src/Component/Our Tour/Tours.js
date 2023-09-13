import React, { useState } from 'react'
import Loading from './Loading';
import Tour from './Tour';
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
      <main>
        <Tour/>
      </main>

    </>
  )
}

export default Tours