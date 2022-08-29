import React from 'react';
import { Card, Button } from 'antd'

export default function Sidebar() {
    return(
        <div className='layout'>
            <div className='sidebar'>
                <Menu 
                items={[]}>
                    
                </Menu>
            </div>

            <div className='navbar'>

            </div>

            <div className='content'>
                <div className='post-wrapper'>
                   
                </div>
            </div>

        </div>
    )
}