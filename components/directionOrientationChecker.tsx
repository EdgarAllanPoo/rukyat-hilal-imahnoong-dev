import { useEffect, useState } from 'react';

export function DeviceOrientationChecker() {
    const [deviceOrientation, setDeviceOrientation] = useState({
        alpha: null,
        beta: null,
        gamma: null,
      });
      
    const handleDeviceOrientation = (event: { alpha: any; beta: any; gamma: any; }) => {
        const { alpha, beta, gamma } = event;
        setDeviceOrientation({ alpha, beta, gamma });
    };
          
    useEffect(() => {
        window.addEventListener('deviceorientation', handleDeviceOrientation, true);
        return () => {
          window.removeEventListener(
            'deviceorientation',
            handleDeviceOrientation,
            true
          );
        };
      }, []);

    return (
        <div>
          <p>Alpha: {deviceOrientation.alpha}</p>
          <p>Beta: {deviceOrientation.beta}</p>
          <p>Gamma: {deviceOrientation.gamma}</p>
        </div>
    );
      
}
