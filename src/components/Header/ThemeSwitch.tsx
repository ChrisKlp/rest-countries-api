import MoonIcon from '../Icons/MoonIcon';
import styled from 'styled-components';
import media from '../../global/mediaQueries';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const Icon = styled(MoonIcon)<{ darkTheme: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${({ theme, darkTheme }) =>
    darkTheme ? theme.colors.text : theme.colors.bg.secondary};
  stroke: ${({ theme }) => theme.colors.text};
  stroke-width: 1;

  @media (${media.md}) {
    width: 2rem;
    height: 2rem;
  }
`;

const Label = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;

type ThemeSwitchProps = {
  state: {
    isThemeDark: boolean;
    setIsThemeDark: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  state: { isThemeDark, setIsThemeDark },
}) => {
  const handleClick = () => setIsThemeDark(!isThemeDark);

  return (
    <Wrapper onClick={handleClick}>
      <Icon darkTheme={isThemeDark} />
      <Label>Dark Mode</Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
