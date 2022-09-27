import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function LayoutScreen() {
    return (        
        <Layout style={{ 'margin-left':'200px' }}>
            <SideBar />
            <TopBar />
            <Layout className="site-layout">
                {/* 
                    - cara biar sidebar ganti theme color
                    - cara biar logout ada di bagian bawah sidebar
                    - ganti font default
                    - warna default
                */}
                <Content style={{ margin: '0 16px' }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>HAHAHIHI Tau tau deadline :(</Footer>
            </Layout>
        </Layout>
    );
}