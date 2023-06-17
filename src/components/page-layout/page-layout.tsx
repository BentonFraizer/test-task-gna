import React from 'react';
import { Layout } from 'antd';
import './page-layout.css';

type PageLayoutProps = {
  children: JSX.Element;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <Layout className="layout">
      <Layout.Header className="header">
        <div className="container">Header</div>
      </Layout.Header>
      <Layout.Content className="main">
        <div className="container">{children}</div>
      </Layout.Content>
      <Layout.Footer className="footer">
        <div className="container">Footer</div>
      </Layout.Footer>
    </Layout>
  );
}

export default PageLayout;
