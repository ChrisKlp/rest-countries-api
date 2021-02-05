import styled from 'styled-components';
import Search from '../components/Form/Search';
import Container from '../components/Container/Container';
import Select from '../components/Form/Select';
import media from '../global/mediaQueries';
import CountryListWrapper from '../components/Country/CountryListWrapper';
import { FilterProvider } from '../context/FilterContext';

const StyledContainer = styled(Container)`
  margin-top: 2.4rem;
  margin-bottom: 6.5rem;

  @media (${media.lg}) {
    margin-top: 4.8rem;
    margin-bottom: 4.5rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.md}) {
    margin-bottom: 4.8rem;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const Home: React.FC = () => {
  return (
    <FilterProvider>
      <StyledContainer>
        <InnerWrapper>
          <Search />
          <Select
            title="Filter by Region"
            options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          />
        </InnerWrapper>
        <CountryListWrapper />
      </StyledContainer>
    </FilterProvider>
  );
};

export default Home;
