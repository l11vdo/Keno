import {useContext, createContext} from 'react';

type kenoData = {
  kenoNumbers: Number[];
  setKenoNumbers: (k: Number[]) => void;
  kenoBet: Number;
  setKenoBet: (k: Number) => void;
};

export const KenoContext = createContext<kenoData>({
  kenoNumbers: [],
  setKenoNumbers: () => {},
  kenoBet: 0,
  setKenoBet: () => {},
});

export const useKenoContext = () => useContext(KenoContext);
