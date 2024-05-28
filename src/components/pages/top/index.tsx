import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import styled from 'styled-components';
import TopBody from './body';
import { userAtomLoadable } from '@/stores/usersAtom';

const Main = styled.main`
  min-height: 100vh;
`;

const TopPage = (): ReactElement => {
  const users = useAtomValue(userAtomLoadable);

  return (
    <Main>
      {users.state === 'hasError' && <p>エラー</p>}
      {users.state === 'loading' && <p>ローディング中</p>}

      {users.state === 'hasData' && <TopBody users={users.data} />}
    </Main>
  );
};

export default TopPage;
