import React from "react";
import { Menu } from 'antd';

export default function SideBar() {
    return (
        <div className="sidebar">
            <Menu 
                theme="dark"
                items={[
                    {
                        key: 'myProfile',
                        label: "My Profile"
                    },
                    {
                        key: 'dashboard',
                        label: "Dashboard"
                    },
                    {
                        key: 'performance',
                        label: "Performance"
                    },
                    {
                        key: 'database',
                        label: "Database"
                    },
                    {
                        key: 'help',
                        label: "Help"
                    },
                ]}
            />

        </div>
    )
}