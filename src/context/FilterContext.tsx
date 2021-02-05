import { createContext, useState } from 'react';

type ContextProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

const FilterContext = createContext<Partial<ContextProps>>({});

type FilterProviderProps = {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');

  const contextValue = {
    name,
    region,
    setRegion,
    setName
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
