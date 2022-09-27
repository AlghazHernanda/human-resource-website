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
import logo from '../../assets/images/logofull.png';
import { useNavigate, Link } from "react-router-dom";
import styles from './style.module.css';
import { fixControlledValue } from "antd/lib/input/Input";
const { Sider } = Layout;


function getItem(label, key, icon, children, style) {
    return {
        label,
        key,
        icon,
        children,
        style
    };
}

const items = [
    getItem('My Profile', 'myProfile', <UserOutlined />, ), // note: harus sama kayak routenya
    getItem('Dashboard', 'dashboard', <HomeOutlined />),
    getItem('Performance', 'performance', <UserAddOutlined />),
    getItem('Database', 'database', <DatabaseOutlined />, [
        getItem('Roles', 'roles'),
        getItem('Divisions', 'divisions'),
        getItem('Program', 'program'),
        getItem('Employees', 'employees'),
    ], null),
    getItem('help', 'help', <QuestionCircleOutlined />),
    getItem('Sign Out', 'signout', <LogoutOutlined />, null, { color:'red' , bottom: '80px', position: 'absolute' }),
]

export default function LayoutPage() {
    const [collapsed, setCollapsed] = useState(false);
    const handleChangePage = (page) => {
        console.log(page);
        navigate(`/${page}`);
    }
    const navigate = useNavigate();
    return (
        <Sider theme='dark' trigger={null} style={{minWidth: '60vw', position: 'fixed'}} className={ styles.sidebarClass } collapsible collapsed={collapsed}>
            <Link to = '/'>
                <div className={ styles.logo }>
                    <img width='100vh' className="logoImage" src={logo} alt="logo" />
                </div>     
            </Link>
            <Menu theme='dark' className={ styles.menuSideBarClass } defaultSelectedKeys={['1']} mode="inline" items={ items } onClick={({item, key}) => handleChangePage(key)}/>
        </Sider>
    )
}