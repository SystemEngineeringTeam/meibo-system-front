import { type ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const IndexPage = (): ReactElement => (
  <Container>
    <Title>Hello Vite + React SWC + React Router + styled-components + jotai + Antd!</Title>
  </Container>
);

export default IndexPage;
