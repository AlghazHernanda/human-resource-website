import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.css';
import {Col, Container, Row, Button} from "react-bootstrap";
import {Form, Input, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import uiIMG from "../../assets/images/ui.svg";
import logo from "../../assets/images/logofull.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import axios from '../../api/axios';
const LOGIN_URL = '/login';

export default function LoginPage(){
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    var from = "/";
    try{
        from = location.state.from.pathname || "/";
    } catch {
        from = "/";
    }
    

    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response.data));
            //console.log(JSON.stringify(response));
            const accessToken = response.data.accessToken;
            const roles = response.data.roles;
            setAuth({ email, password, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 400) {
                setErrMsg('Missing email or Password');
            } else if (err.response.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
    <Container className={styles.loginContainer}>
        <Row>
            <Col id="formarea" lg={4} md={6} sm={12}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className='d-flex justify-content-center'>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />
                <div className={ styles.loginButtonForm }>
                    <Button className = "loginButton" type="primary" htmlType="submit">
                    Login
                    </Button>
                </div>
            </form>
            <p>
                Don't have an Account?<br />
                Contact your Administrator :)
            </p>
            </Col>
            <Col lg={8} md={6} sm={12}>
                <img className="w-100" src={uiIMG} alt=""/>
            </Col>
        </Row>
    </Container>
    )
}