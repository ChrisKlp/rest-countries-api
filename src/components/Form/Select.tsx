import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import styled, { keyframes } from 'styled-components';
import FilterContext from '../../context/FilterContext';
import media from '../../global/mediaQueries';
import ArrowIcon from '../Icons/ArrowIcon';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3.2rem;
  z-index: 10;

  @media (${media.md}) {
    margin: 0;
    width: 20rem;
  }
`;

const Header = styled.button`
  padding: 1.4rem 1.9rem 1.4rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem hsla(0, 0%, 0%, 0.053);
  border-radius: 0.5rem;
  cursor: pointer;

  @media (${media.md}) {
    padding: 1.8rem 1.8rem 1.8rem 2.4rem;
  }
`;

const Label = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (${media.md}) {
    font-size: 1.4rem;
  }
`;

const Icon = styled(ArrowIcon)<{ isOpen: boolean }>`
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.colors.text};
  transform: rotate(${({ isOpen }) => isOpen && '180deg'});
  transition: transform 0.2s;

  @media (${media.md}) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const OptionsWrapper = styled.ul`
  position: absolute;
  top: 5.2rem;
  width: 100%;
  padding: 1.6rem 0;
  display: grid;
  background: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.9rem hsla(0, 0%, 0%, 0.053);
  border-radius: 0.5rem;
  animation: ${fadeInUp} 0.2s;

  @media (${media.md}) {
    top: 6rem;
  }
`;

const Option = styled.li<{ selected: boolean }>`
  padding: 0.6rem 2.4rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ selected }) => selected && 'hsla(0, 0%, 0%, 0.06)'};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: hsla(0, 0%, 0%, 0.08);
  }

  @media (${media.md}) {
    font-size: 1.4rem;
    padding: 0.8rem 2.4rem;
  }
`;

type SelectProps = {
  title: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ title, options }) => {
  const initialState = useMemo(
    () => ({
      isOpen: false,
      label: title,
      options: options.map((item, index) => ({
        id: index,
        title: item,
        selected: false,
      })),
    }),
    [title, options]
  );

  type ACTIONTYPE =
    | { type: 'TOGGLE_SELECT' }
    | {
        type: 'SELECT_ITEM';
        payload: { id: number; title: string; selected: boolean };
      };

  const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case 'TOGGLE_SELECT':
        return {
          ...state,
          isOpen: !state.isOpen,
        };
      case 'SELECT_ITEM':
        return {
          ...state,
          isOpen: false,
          label:
            action.payload.title !== state.label ? action.payload.title : title,
          options: state.options.map(option =>
            option.id === action.payload.id && !option.selected
              ? { ...option, selected: true }
              : { ...option, selected: false }
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const { setRegion } = useContext(FilterContext);

  const toggleSelect = useCallback(() => dispatch({ type: 'TOGGLE_SELECT' }), [
    dispatch,
  ]);

  const selectItem = useCallback(
    (option: typeof initialState.options[0], e) => {
      e.stopPropagation();
      dispatch({ type: 'SELECT_ITEM', payload: option });

      setRegion && setRegion(prev => option.title !== prev ? option.title : '' );
    },
    [initialState, setRegion]
  );

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (
        selectRef.current !== null &&
        !selectRef.current.contains(e.target as HTMLElement)
      ) {
        toggleSelect();
      }
    };

    if (state.isOpen === true) {
      window.addEventListener('click', outsideClick);
    }
    return () => {
      window.removeEventListener('click', outsideClick);
    };
  }, [state.isOpen, toggleSelect]);

  return (
    <Wrapper ref={selectRef}>
      <Header onClick={toggleSelect}>
        <Label>{state.label}</Label>
        <Icon isOpen={state.isOpen} />
      </Header>
      {state.isOpen && (
        <OptionsWrapper>
          {state.options.map(item => (
            <Option
              key={item.id}
              onClick={e => selectItem(item, e)}
              selected={item.selected}
            >
              {item.title}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
};

export default Select;
