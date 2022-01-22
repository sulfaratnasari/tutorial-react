import React from 'react';import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
	const navigate = useNavigate();
	if (e.key === 5) {
		navigate("/home");
	}
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Yupi's Daily">
		<Menu.Item key="5">Grooming</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Yupi's Photos Collection">
          <Menu.Item key="5">Holiday</Menu.Item>
          <Menu.Item key="6">Birthday</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">1st year</Menu.Item>
            <Menu.Item key="8">2nd year</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Food Review">
          <Menu.Item key="9">Whiskas</Menu.Item>
          <Menu.Item key="10">Royal Canin</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default SideMenu;