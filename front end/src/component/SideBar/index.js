import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    HomeOutlined,
    UserAddOutlined,
    DatabaseOutlined,
    QuestionCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import styles from './SideBar.module.css';
import logo from '../../assets/images/logofull.png';
const { Sider } = Layout;



function getItem(label, key, icon, children, style) {
    return {
        key,
        icon,
        children,
        label,
        style
    };
}

const items = [
    getItem('My Profile', 'myProfile', <UserOutlined />),
    getItem('Dashboard', 'dashboard', <HomeOutlined />),
    getItem('Performance', 'performance', <UserAddOutlined />),
    getItem('Database', 'database', <DatabaseOutlined />, [
        getItem('Roles', 'roles'),
        getItem('Divisions', 'divisions'),
        getItem('Program', 'program'),
        getItem('Employees', 'employees'),
    ]),
    getItem('help', 'help', <QuestionCircleOutlined />),
    getItem('Sign Out', 'signout', <LogoutOutlined />, null, { color: 'red'}),
]

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme='dark' style={{minWidth: '60vw'}} className={ styles.sidebarClass } collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="Logo">
                    <img width='100vh' className="logoImage" src={logo} alt="logo" />
                </div>
                <Menu theme='dark' className={ styles.menuSideBarClass } defaultSelectedKeys={['1']} mode="inline" items={ items } />
                
            </Sider>
        </Layout>
    )
}