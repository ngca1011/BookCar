import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import { Vehicle } from '../utils/consts';

interface VehicleRequestContextType {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  vehicleType: Vehicle | undefined;
  setVehicleType: Dispatch<SetStateAction<Vehicle | undefined>>;
}

const VehicleRequestContext = createContext<VehicleRequestContextType>({
  date: new Date(),
  setDate: () => {},
  text: '',
  setText: () => {},
  vehicleType: undefined,
  setVehicleType: () => {},
});

const useVehicleRequestContext = () => useContext(VehicleRequestContext);

const VehicleRequestContextProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<Vehicle | undefined>();

  return (
    <VehicleRequestContext.Provider
      value={{ date, setDate, text, setText, vehicleType, setVehicleType }}
    >
      {children}
    </VehicleRequestContext.Provider>
  );
};

export { VehicleRequestContextProvider, useVehicleRequestContext };
