import { Button, Flex } from 'antd';
import { type ReactElement } from 'react';
import styled from 'styled-components';

const Flexbox = styled(Flex)`
  height: 100%;
`;

const LoginPage = (): ReactElement => (
  <Flexbox align="center" justify="center" vertical>
    <p>ログインしてください</p>
    <Button type="primary">ログイン</Button>
  </Flexbox>
);

export default LoginPage;
