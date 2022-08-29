import React from 'react';
import SideBar from '../../component/SideBar';
import Login from '../../pages/Login';

export default function Home() {
    return (
        <div className='layout-grid'>
            <SideBar />
            <Login />
        </div>
    )
}

