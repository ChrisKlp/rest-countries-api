import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ButtonLink from '../components/Button/ButtonLink';
import Container from '../components/Container/Container';
import CountryContext from '../context/CountryContext';
import CountryDetail from '../components/Country/CountryDetail';
import media from '../global/mediaQueries';
import Loader from '../components/Loader/Loader';

const StyledContainer = styled(Container)`
  margin-top: 4rem;
  padding-bottom: 6rem;

  @media (${media.lg}) {
    margin-top: 8rem;
  }
`;

const Country: React.FC = () => {
  const { id }: { id: string } = useParams();
  const { countries, isLoading } = useContext(CountryContext);

  const data = countries?.find((item: any) => item.alpha3Code === id);

  return (
    <StyledContainer>
      <ButtonLink secondary to="/" />
      {isLoading ? <Loader /> : <CountryDetail data={data} />}
    </StyledContainer>
  );
};

export default Country;
