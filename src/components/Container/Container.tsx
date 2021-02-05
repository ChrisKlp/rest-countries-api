import styled from 'styled-components';
import media from '../../global/mediaQueries';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  max-width: 128rem;
  width: 91.46%;
  margin: 0 auto;

  @media (${media.md}) {
    width: 88.88%;
  }
`;

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default Container;
