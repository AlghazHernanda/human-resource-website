import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    HomeOutlined,
    UserAddOutlined,
    DatabaseOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
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
]

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={ items } />
            </Sider>
        </Layout>
    )
}