import React from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import uiIMG from "../../assets/images/ui.svg";
import logo from "../../assets/images/logofull.png";

export default function LoginPage() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col id="formarea" lg={4} md={6} sm={12}>
                    <img src={logo} alt="logo" className='logo'/>
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

                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <div className="text-left mt-3">
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