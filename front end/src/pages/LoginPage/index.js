import React, { useState } from 'react';
import styles from './Login.module.css';
import {Col, Container, Row, Button} from "react-bootstrap";
import {Form, Input, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import uiIMG from "../../assets/images/ui.svg";
import logo from "../../assets/images/logofull.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLoginApi = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            const findUser = response.data.find((user) => {
              if (email === user.email && username === user.username) {
                return true;
              }
      
              return false;
            });
      
            if (findUser) {
              navigate("/");
            } else {
              notification.error({
                message: "Login Failed!",
                description: "Email or username is incorrect",
              });
            }
          });
        };

    const handleLogin = () => {
        if (email === "" ||  password === "") {
            notification.error({
                message: "Login Failed!",
                description: "Please fill all the fields",
            });
        } else {
            {/* handleLogin masih ngga semesteinya. Kalo dimasukin pass atau email salah masih bisa */}
            const findUser = (() => {
                if (email === "anya@forger.com" && password === "peanuts") {
                  return true;
                }
        
                return false;
              });
            if(email === "anya@forger.com" && password === "peanuts") {
                navigate("/");
            } else {
                notification.error({
                    message: "Login Failed!",
                    description: "Email or password is incorrect",
                });
            }
        }
    };

    return (
        <Container className={styles.loginContainer}>
            <Row>
                <Col id="formarea" lg={4} md={6} sm={12}>
                    <div className='d-flex justify-content-center'>
                        <img src={logo} alt="logo" className={styles.logo}/>
                    </div>
                    <div className="gap"></div>
                    <Form labelCol={{ span: 8 }} onFinish={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <Input
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="false"
                            name="email"
                            type="email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Input.Password
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="false"
                            name="password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </div>
                        <div className={ styles.loginButtonForm }>
                            <Button className = { styles.loginButton } type="primary" htmlType="submit">
                            Login
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <img className="w-100" src={uiIMG} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}