import { App, ConfigProvider, Layout } from 'antd';
import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import '@fontsource-variable/noto-sans-jp';
import { createGlobalStyle } from 'styled-components';
import Header from '@/components/shared/Header';
import theme from '@/utils/theme';

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

const BaseLayout = (): ReactElement => (
  <ConfigProvider theme={theme}>
    <App>
      <GlobalStyle />
      <Layout>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </App>
  </ConfigProvider>
);

export default BaseLayout;
