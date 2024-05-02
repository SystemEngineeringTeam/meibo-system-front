import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import TopBody from './body';
import { userAtomLoadable } from '@/stores/usersAtom';

const TopPage = (): ReactElement => {
  const users = useAtomValue(userAtomLoadable);

  return (
    <main>
      {users.state === 'hasError' && <p>エラー</p>}
      {users.state === 'loading' && <p>ローディング中</p>}

      {users.state === 'hasData' && <TopBody users={users.data} />}
    </main>
  );
};

export default TopPage;
