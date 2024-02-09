import { useState, useCallback } from 'react';

interface Location {
  location?: {
    latitude: number;
    longitude: number;
  };
  description: string;
}

interface LocationHook {
  origin: Location | null;
  destination: Location | null;
  setOriginLocation: (data: any, details: any) => void; 
  setDestinationLocation: (data: any, details: any) => void; 
}

const useLocation = (): LocationHook => {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);

  const setOriginLocation = useCallback((data: any, details: any) => {
    setOrigin({
      location: details?.geometry.location,
      description: data.description,
    });
  }, []);

  const setDestinationLocation = useCallback((data: any, details: any) => {
    setDestination({
      location: details?.geometry.location,
      description: data.description,
    });
  }, []);

  return {
    origin,
    destination,
    setOriginLocation,
    setDestinationLocation,
  };
};

export { useLocation };
