import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Location {
  location?: {
    lat: number;
    lng: number;
  };
  description: string;
}

interface LocationContextType {
  origin: Location | null;
  destination: Location | null;
  setOriginLocation: (data: any, details: any) => void;
  setDestinationLocation: (data: any, details: any) => void;
}

const LocationContext = createContext<LocationContextType>({
  origin: null,
  destination: null,
  setOriginLocation: () => {},
  setDestinationLocation: () => {},
});

const useLocationContext = () => useContext(LocationContext);

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);

  const setOriginLocation = (data: any, details: any) => {
    setOrigin((prevOrigin) => ({
      ...prevOrigin,
      location: details?.geometry?.location,
      description: data.description,
    }));
  };

  const setDestinationLocation = (data: any, details: any) => {
    setDestination((prevDestination) => ({
      ...prevDestination,
      location: details?.geometry?.location,
      description: data.description,
    }));
  };
  return (
    <LocationContext.Provider
      value={{ origin, destination, setOriginLocation, setDestinationLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, useLocationContext };
