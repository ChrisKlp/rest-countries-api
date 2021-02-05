import styled, { keyframes } from 'styled-components';

const ringAnimation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: grid;
  place-items: center;
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  opacity: 0.15;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.text} transparent transparent
      transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
    </Wrapper>
  );
};

export default Loader;
