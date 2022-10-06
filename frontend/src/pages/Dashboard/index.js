import { Space, Table, Tag, Button, Dropdown, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Programs(){
    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'fullname',
          key: 'fullname',
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
            title: 'progress',
            key: 'progress',
            dataIndex: 'progress',
            render: (_, { progress }) => (
                <>
                {progress.map((tag) => {
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
      ];
    const data = [
    {
        key: '1',
        program: 'Program spy',
        subProgram: 32,
        progress: ['approved'],
    },
    {
        key: '2',
        program: 'Jim Birthday',
        subProgram: 42,
        progress: ['rejected'],
    },
    {
        key: '3',
        program: 'Baby anya',
        subProgram: 32,
        progress: ['requested'],
    },
    ];

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: '1st menu item',
              key: '1',
              icon: <UserOutlined />,
            },
            {
              label: '2nd menu item',
              key: '2',
              icon: <UserOutlined />,
            },
            {
              label: '3rd menu item',
              key: '3',
              icon: <UserOutlined />,
            },
          ]}
        />
      );

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
            <Container>
                <Row>
                    <Col>
                        <h1>Hello Anya Forger</h1>
                        <h5>Here's what we have for you today</h5>
                        <Dropdown overlay={menu}>
                            <Button>
                                <Space>
                                Choose Division
                                <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Line
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [
                            {
                                label: 'My First dataset',
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                data: [65, 59, 80, 81, 56, 55, 40]
                            }
                            ]
                        }}
                    
                    />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};