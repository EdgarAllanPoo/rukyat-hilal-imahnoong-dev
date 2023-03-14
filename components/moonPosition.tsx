import { moonposition, sexagesimal, angle } from 'astronomia';

export function MoonPosition() {
    const now = new Date();

    // Calculate the moon's position
    const moonPos = moonposition(now);
    
    // Get the moon's latitude and longitude
    const { lat, lon } = moonPos;
    
    // Convert the latitude and longitude to sexagesimal notation
    const latDeg = sexagesimal.strFromDD(lat);
    const lonDeg = sexagesimal.strFromDD(lon);
    
    console.log(`Latitude: ${latDeg}`);
    console.log(`Longitude: ${lonDeg}`);

    return (
        <div>
            <h1>Moon Latitude: {latDeg}°</h1>
            <h1>Moon Longitude: {lonDeg}°</h1>
        </div>
      );
}