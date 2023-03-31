import { useEffect, useState } from 'react';
import SunCalc from 'suncalc';

export function MoonPosition() {
  const now = new Date();

  const [location, setLocation] = useState<{ latitude: number; longitude: number }>();

  useEffect(() => {
    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }

    getCurrentLocation();
  }, []);

  const moonPosition = location ? SunCalc.getMoonPosition(now, location.latitude, location.longitude) : null;
  const azimuth = moonPosition?.azimuth;
  const altitude = moonPosition?.altitude;

  return (
    <div>
      {azimuth && altitude ? (
        <div>
          <h1>Date: {now.getUTCDate()}</h1>
          <h1>Device Latitude: {location?.latitude.toFixed(2)}</h1>
          <h1>Device Longitude: {location?.longitude.toFixed(2)}</h1>
          <h1>Moon Azimuth: {azimuth.toFixed(2)}°</h1>
          <h1>Moon Altitude: {altitude.toFixed(2)}°</h1>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
