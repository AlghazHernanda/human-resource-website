import React, { useState } from 'react';
import styles from './Login.module.css';
import { notification } from 'antd';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import uiIMG from "../../assets/images/ui.svg";
import logo from "../../assets/images/logofull.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
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

    return (
        <Container className={styles.loginContainer}>
            <Row>
                <Col id="formarea" lg={4} md={6} sm={12}>
                    <div className='d-flex justify-content-center'>
                        <img src={logo} alt="logo" className={styles.logo}/>
                    </div>
                    <div className="gap"></div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" className="center" type="submit">
                        Login
                    </Button>

                    <div className="text-center mt-3">
                        <a href="/register" className='reset'>Register</a> II
                        <a href="/forgot-password" className='reset ml-2'>  Forgot Password</a>
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