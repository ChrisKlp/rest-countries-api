import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import media from '../../global/mediaQueries';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';

const Wrapper = styled.div<{ secondary?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  min-width: 9.6rem;
  height: 2.8rem;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  box-shadow: 0 0.2rem 0.5rem -0.1rem rgba(0, 0, 0, 0.11);
  border-radius: 0.2rem;
  z-index: 0;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 0.8rem 0.7rem -0.3rem rgba(0, 0, 0, 0.11);
    border-radius: 0.2rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover::after {
    opacity: 1;
  }

  span {
    display: block;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.text};

    @media (${media.md}) {
      font-size: 1.4rem;
      line-height: 1.9rem;
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      gap: 0.8rem;
      width: 10.4rem;
      height: 3.2rem;
      border-radius: 0.6rem;

      &::after {
        border-radius: 0.6rem;
      }

      span {
        line-height: 2rem;
      }

      @media (${media.md}) {
        gap: 1rem;
        width: 13.6rem;
        height: 4rem;

        span {
          font-size: 1.6rem;
        }
      }
    `};
`;

const Icon = styled(ArrowLeftIcon)`
  fill: ${({ theme }) => theme.colors.text};
  @media (${media.md}) {
    width: 2rem;
    height: 2rem;
  }
`;

type ButtonProps = {
  secondary?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  to: string;
};

const Button: React.FC<ButtonProps> = ({
  secondary,
  children,
  onClick,
  to,
  ...props
}) => {
  return (
    <Link to={to}>
      <Wrapper secondary={secondary} {...props}>
        {secondary ? (
          <>
            <Icon />
            <span>Back</span>
          </>
        ) : (
          <span>{children}</span>
        )}
      </Wrapper>
    </Link>
  );
};

export default Button;
