import { LoadingOutlined } from '@ant-design/icons';
import { App, ConfigProvider, Flex, Layout } from 'antd';
import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import styled, { createGlobalStyle } from 'styled-components';
import LoginPage from '@/components/pages/login';
import Header from '@/components/shared/Header';
import { currentUserAtomLoadable } from '@/stores/currentUserAtom';
import { theme } from '@/utils/theme';

const { Header: HeaderContainer, Content } = Layout;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.125rem;
  }

  @media (width < 768px) {
    html {
      font-size: 1rem;
      scroll-padding-top: 60px; /* header height */
    }
  }
`;

const GlobalLayout = styled(Layout)`
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid: auto 1fr / 1fr;
`;

const BaseLayout = (): ReactElement => {
  const user = useAtomValue(currentUserAtomLoadable);

  if (user.state === 'hasError') throw Error('Failed to fetch user data');

  return (
    <ConfigProvider theme={theme}>
      <App>
        <GlobalStyle />
        <GlobalLayout>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <Content>
            {user.state === 'loading' && (
              <Flex align="center" justify="center" vertical>
                <LoadingOutlined />
              </Flex>
            )}
            {user.state === 'hasData' && (user.data != null ? <Outlet /> : <LoginPage />)}
          </Content>
        </GlobalLayout>
      </App>
    </ConfigProvider>
  );
};

export default BaseLayout;
