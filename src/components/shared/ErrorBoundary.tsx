import { Button, Result } from 'antd';
import { type ReactNode, type ReactElement, useEffect } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const errMsg = {
  'not-found': {
    status: 404,
    subTitle: '――見つけたいものほど, 往々にして見つかるものではない.',
    extra: (
      <Button href="/" title="トップページに遷移する" type="primary">
        トップに戻る
      </Button>
    ),
  },
  forbidden: {
    status: 403,
    subTitle: 'READ & DESTROY',
    extra: (
      <Button href="/" title="トップページに遷移する" type="primary">
        トップに戻る
      </Button>
    ),
  },
  other: {
    status: 500,
    subTitle: 'Sorry, something went wrong.',
    extra: <Button type="primary">Back Home</Button>,
  },
} as const satisfies Record<
  string,
  {
    status: number;
    subTitle: string;
    extra: ReactNode;
  }
>;

const ErrorBoundary = (): ReactElement => {
  const error = useRouteError();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, []);

  if (!isRouteErrorResponse(error)) {
    return (
      <Container>
        <Result
          extra="申し訳ございません. 予期せぬエラーが発生しました."
          status="error"
          style={{
            height: 'fit-content',
          }}
          subTitle="エラーの詳細はデバッグコンソールを参照してください."
          title="クライアントエラー"
        />
      </Container>
    );
  }

  let msg;
  switch (error.status) {
    case 404:
      msg = errMsg['not-found'];
      break;
    case 403:
      msg = errMsg.forbidden;
      break;
    default:
      msg = errMsg.other;
      break;
  }

  return (
    <Container>
      <Result
        extra={msg.extra}
        status={msg.status}
        style={{
          height: 'fit-content',
        }}
        subTitle={
          <>
            <code>{error.data}</code>
            <p>エラーの詳細はデバッグコンソールを参照してください.</p>
            <br />
            <p>{msg.subTitle}</p>
          </>
        }
        title={error.statusText}
      />
    </Container>
  );
};

export default ErrorBoundary;
