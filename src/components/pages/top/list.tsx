import { Card } from 'antd';
import { type ReactElement } from 'react';
import styled from 'styled-components';
import { type User } from '@/types/user';

const UserCard = styled.div`
  padding: 5px;

  h3 {
    font-size: 1.5em;
  }
`;

interface Props {
  user: User<false>;
}

const TopBody = (props: Props): ReactElement => {
  const { user } = props;

  return (
    <div>
      {user.type === 'active' && (
        <UserCard>
          <Card  cover={<img alt="icon" src={user.iconUrl} />} hoverable>
            <p>
              [{user.grade}] {user.studentNumber}
              <h3>
                {user.lastName} {user.firstName}
              </h3>
            </p>
          </Card>
        </UserCard>
      )}
    </div>
  );
};

export default TopBody;
