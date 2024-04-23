import { App, ConfigProvider, Layout } from 'antd';
import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import 'the-new-css-reset/css/reset.css';
import '@/styles/global.css';
import '@fontsource-variable/noto-sans-jp';
import Header from '@/components/shared/Header';
import theme from '@/utils/theme';

const { Header: HeaderContainer, Content } = Layout;

const BaseLayout = (): ReactElement => (
  <ConfigProvider theme={theme}>
    <App>
      <Layout>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content style={{}}>
          <Outlet />
        </Content>
      </Layout>
    </App>
  </ConfigProvider>
);

export default BaseLayout;
