import React from "react";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Menu 
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