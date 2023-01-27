import {useContext, createContext} from 'react';

type kenoData = {
  kenoNumbers: number[];
  setKenoNumbers: (k: number[]) => void;
  kenoBet: number;
  setKenoBet: (k: number) => void;
};

export const KenoContext = createContext<kenoData>({
  kenoNumbers: [],
  setKenoNumbers: () => {},
  kenoBet: 0,
  setKenoBet: () => {},
});

export const useKenoContext = () => useContext(KenoContext);
