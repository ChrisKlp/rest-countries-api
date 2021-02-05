import { useContext } from 'react';
import styled from 'styled-components';
import CountryContext from '../../context/CountryContext';
import FilterContext from '../../context/FilterContext';
import media from '../../global/mediaQueries';
import Loader from '../Loader/Loader';
import CountryCard from './CountryCard';

const CardListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 26.4rem;
  gap: 2rem;

  @media (${media.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  @media (${media.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${media.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (${media.xl}) {
    gap: 7.5rem;
  }
`;

const CountryListWrapper: React.FC = () => {
  const { isLoading, countries } = useContext(CountryContext);
  const { name, region } = useContext(FilterContext);

  const filterByName = countries => {
    if (name) {
      return countries.filter(country =>
        country.name.toLowerCase().includes(name.toLowerCase().trim())
      );
    } else {
      return countries;
    }
  };

  const filterByRegion = countries => {
    if (region) {
      return countries.filter(country => country.region === region);
    } else return countries;
  };

  if (isLoading) return <Loader />;

  return (
    <CardListWrapper>
      {filterByName(filterByRegion(countries)).map((item: any) => (
        <CountryCard key={item.alpha3Code} data={item} />
      ))}
    </CardListWrapper>
  );
};

export default CountryListWrapper;
