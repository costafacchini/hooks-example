import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionLocation)
  }, [])

  function handlePositionLocation({ coords }) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }

  return (
    <>
      Latitude: {location.latitude} <br/>
      Longitude: {location.longitude}
    </>
  );
}
