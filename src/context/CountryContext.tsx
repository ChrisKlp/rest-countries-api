import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

type ContextProps = {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  countries: any;
  setCountries: React.Dispatch<React.SetStateAction<any>>;
  error: string;
};

const CountryContext = createContext<Partial<ContextProps>>({});

type CountryProviderProps = {
  children: React.ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({
  children,
}) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const contextValue = {
    isLoading,
    setLoading,
    countries,
    setCountries,
    error,
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
