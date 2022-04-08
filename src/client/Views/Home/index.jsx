/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import { Button } from 'antd';
import './index.css';
import {
  Menu, Button, Carousel, PageHeader, Avatar, Layout
} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  MediumOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
// 轮播图style设置
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
// layout的部分内容
const {
  Header, Footer, Sider, Content
} = Layout;

export default class Home extends Component {
  state = { name: 'home', url: 'http://localhost:3000', current: 'mail' };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { name, url, current } = this.state;
    return (
      <Layout className="HomePage">
        <Header className="header" style={{ padding: '0 50px', margin: '10px' }}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<MediumOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title="Navigation Three - Submenu"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>

        </Header>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <div className="Carousel" style={{ margin: '10px', minHeight: '200px' }}>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
