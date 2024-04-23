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
      {users.state === 'hasData' && users.data.map((user) => <TopBody key={user.id} user={user} />)}
    </main>
  );
};

export default TopPage;
