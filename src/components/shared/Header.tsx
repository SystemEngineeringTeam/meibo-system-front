import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Flex, type MenuProps } from 'antd';
import { type ReactElement } from 'react';
import styled from 'styled-components';
import colors from '@/utils/color';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colors.white};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: ${colors.white};
  }
`;

const items: MenuProps['items'] = [
  {
    key: 'my-page',
    label: (
      <a href="/me" title="マイページへ遷移">
        マイページ
      </a>
    ),
  },
  {
    key: 'logout',
    label: 'ログアウト',
  },
];

const Header = (): ReactElement => (
  <Container>
    <Title href="/" title="ホームへ遷移">
      名簿システム
    </Title>
    <Flex gap="1rem">
      <Nav>
        <a href="/top" title="トップページへ遷移">
          トップ
        </a>
        <a href="/admin" title="管理者ページへ遷移">
          管理者
        </a>
      </Nav>

      <Dropdown arrow menu={{ items }} placement="topRight" trigger={['click']}>
        <Flex
          align="center"
          gap="0.5rem"
          style={{
            cursor: 'pointer',
          }}
        >
          <Avatar icon={<UserOutlined />} size="large" />
          お名前
        </Flex>
      </Dropdown>
    </Flex>
  </Container>
);

export default Header;
