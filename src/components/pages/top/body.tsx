import { type ReactElement } from 'react';
import styled from 'styled-components';
import TopList from './list';
import { type User } from '@/types/user';

const UserList = styled.div`
  display: grid;
  justify-content: left;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

interface Props {
  users: Array<User<false>>;
}

const TopBody = (props: Props): ReactElement => {
  const { users } = props;

  return (
    <UserList>
      {users.map((user) => (
        <TopList key={user.id} user={user} />
      ))}
    </UserList>
  );
};

export default TopBody;
