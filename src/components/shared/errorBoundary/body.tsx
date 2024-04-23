import { Result } from 'antd';
import { type ReactNode, type ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

interface Props {
  extra: ReactNode;
  subTitle: ReactNode;
  title: string;
}

const ErrorBoundaryBody = (props: Props): ReactElement => {
  const { extra, subTitle, title } = props;

  return (
    <Container>
      <Result
        extra={extra}
        status="error"
        style={{
          height: 'fit-content',
        }}
        subTitle={subTitle}
        title={title}
      />
    </Container>
  );
};

export default ErrorBoundaryBody;
