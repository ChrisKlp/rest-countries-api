import { useContext} from 'react';
import styled from 'styled-components';
import FilterContext from '../../context/FilterContext';
import media from '../../global/mediaQueries';
import SearchIcon from '../Icons/SearchIcon';

const Wrapper = styled.form`
  margin-bottom: 4rem;
  padding: 1.4rem 3.2rem;
  display: flex;
  align-items: center;
  gap: 2.6rem;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.0532439);
  border-radius: 0.5rem;

  @media (${media.md}) {
    margin: 0;
    flex-grow: 1;
    padding: 1.8rem 3.2rem;
    max-width: 48rem;
  }
`;

const Icon = styled(SearchIcon)`
  fill: ${({ theme }) => theme.colors.input};
  width: 1.6rem;
  height: 1.6rem;

  @media (${media.md}) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Input = styled.input`
  padding: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.input};
  background-color: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input};
  }

  @media (${media.md}) {
    font-size: 1.4rem;
  }
`;

const Search: React.FC = () => {
  const { name, setName } = useContext(FilterContext);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName && setName(e.target.value);

  return (
    <Wrapper autoComplete="off">
      <Icon />
      <Input
        placeholder="Search for a country…"
        type="text"
        name="search"
        value={name}
        onChange={handleNameChange}
      />
    </Wrapper>
  );
};

export default Search;
