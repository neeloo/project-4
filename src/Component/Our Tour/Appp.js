import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project';

const Apps = () => {
  const [loading, setloading] = useState(true);
  const [tour, settour] = useState([]);
  const featcrTour = async () => {
    setloading(true);
    try {
      const reponce = await fetch(url);
      const tours = await reponce.json();
      setloading(false);
      settour(tour);
    } catch (error) {
      setloading(false);

    }

  };
  useEffect(() => {
    featcrTour();
  }, [])

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
        <Tour tour={tour} />
      </main>

    </>
  )
}

export default Apps;