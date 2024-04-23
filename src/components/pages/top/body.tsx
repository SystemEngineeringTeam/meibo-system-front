import { type ReactElement } from 'react';
import { type User } from '@/types/user';

interface Props {
  user: User<false>;
}

const TopBody = (props: Props): ReactElement => {
  const { user } = props;

  return (
    <div key={user.id}>
      <p>
        {user.lastName} {user.firstName}
      </p>
    </div>
  );
};

export default TopBody;
