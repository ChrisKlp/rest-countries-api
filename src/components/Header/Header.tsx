import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../global/mediaQueries';
import Container from '../Container/Container';
import ThemeSwitch from './ThemeSwitch';

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.0562443);
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`;

type HeaderProps = {
  state: {
    isThemeDark: boolean;
    setIsThemeDark: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Header: React.FC<HeaderProps> = ({ state }) => {
  return (
    <Wrapper>
      <StyledContainer>
        <Heading>
          <Link to="/">Where in the world?</Link>
        </Heading>
        <ThemeSwitch state={state} />
      </StyledContainer>
    </Wrapper>
  );
};

export default Header;
