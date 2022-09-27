import { Space, Table, Tag } from 'antd';
import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';

export default function Performance(){
    const columns = [
        {
          title: 'Employee Name',
          dataIndex: 'employeeName',
          key: 'employeeName',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Program',
          dataIndex: 'program',
          key: 'program',
        },
        {
          title: 'Subprogram',
          dataIndex: 'subprogram',
          key: 'subprogram',
        },
        {
          title: 'Percentage',
          dataIndex: 'percentage',
          key: 'percentage',
        },
        {
          title: 'Progress',
          dataIndex: 'progress',
          key: 'progress',
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
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a onClick={viewPerformance} style={{color:'#2577CC'}}>View</a>
              <a onClick={editPerformance} style={{color:'#F6A609'}}>Edit</a>
            </Space>
          ),
        },
      ];
    const data = [
    {
        key: '1',
        employeeName: 'John Brown',
        program: 32,
        progress: 'New York No. 1 Lake Park',
        status: ['approved'],
    },
    {
        key: '2',
        employeeName: 'Jim Green',
        program: 42,
        progress: 'London No. 1 Lake Park',
        status: ['rejected'],
    },
    {
        key: '3',
        employeeName: 'Joe Black',
        program: 32,
        progress: 'Sidney No. 1 Lake Park',
        status: ['requested'],
    },
    ];

    const navigate = useNavigate();
    const viewPerformance = (e) => {
        console.log('view performance');
        navigate('/performance/view');
    }

    const editPerformance = (e) => {
        console.log('edit performance');
        navigate('/performance/edit');
    }

    return(
        <div className='content'>
            <h1>People Performance</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    )
};