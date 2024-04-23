import { Button } from 'antd';
import { type ReactNode, type ReactElement, useMemo } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorBoundaryBody from './body';

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
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return (
      <ErrorBoundaryBody
        extra="申し訳ございません. 予期せぬエラーが発生しました."
        subTitle="エラーの詳細はデバッグコンソールを参照してください."
        title="クライアントエラー"
      />
    );
  }

  const msg = useMemo(() => {
    switch (error.status) {
      case 404:
        return errMsg['not-found'];
      case 403:
        return errMsg.forbidden;
      default:
        return errMsg.other;
    }
  }, [errMsg]);

  return (
    <ErrorBoundaryBody
      extra={msg.extra}
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
  );
};

export default ErrorBoundary;
