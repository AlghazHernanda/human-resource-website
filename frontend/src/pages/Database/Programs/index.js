import { Space, Table, Tag } from 'antd';
import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';

export default function Programs(){
    const columns = [
        {
          title: 'Program Name',
          dataIndex: 'programName',
          key: 'programName',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Subprogram',
          dataIndex: 'subprogram',
          key: 'subprogram',
        },
        
        {
            title: 'PIC',
            dataIndex: 'PIC',
            key: 'PIC',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => (
                <>
                {status.map((tag) => {
                    let color = tag === 'requested' ? 'geekblue' : 'green';
        
                    if (tag === 'rejected') {
                    color = 'volcano';
                    }
        
                    return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                    );
                })}
                </>
            ),
        },
        {
          title: 'Progress',
          dataIndex: 'progress',
          key: 'progress',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a onClick={viewProgram} style={{color:'#2577CC'}}>View</a>
              <a onClick={editProgram} style={{color:'#F6A609'}}>Edit</a>
              <a onClick={deleteProgram} style={{color:'#FB4E4E'}}>Edit</a>
            </Space>
          ),
        },
      ];
    const data = [
    {
        key: '1',
        programName: 'Program spy',
        program: 32,
        progress: 'New York No. 1 Lake Park',
        status: ['approved'],
    },
    {
        key: '2',
        programName: 'Jim Birthday',
        program: 42,
        progress: 'London No. 1 Lake Park',
        status: ['rejected'],
    },
    {
        key: '3',
        programName: 'Baby anya',
        program: 32,
        progress: 'Sidney No. 1 Lake Park',
        status: ['requested'],
    },
    ];

    const navigate = useNavigate();
    const createProgram = (e) => {
        console.log('create program');
        navigate('/program/create');
    }
    const viewProgram = (e) => {
        console.log('view program');
        navigate('/program/view');
    }

    const editProgram = (e) => {
        console.log('edit program');
        navigate('/program/edit');
    }
    const deleteProgram = (e) => {
        console.log('delete program');
        navigate('/program/delete');
    }

    return(
        <div className='content'>
            <h1>Program List</h1>
            <div className='createButtonArea'>
                <button className='createButton' onClick={createProgram}>Create Program</button>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
};