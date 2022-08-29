import { Button, Card, Form, Input } from 'antd';
import React from 'react';

export default function Login() {
    return (
        <div className='login-wrapper'>
            <Card>
                <Form
                    onFinish={() => {
                        console.log("sudah submitted")
                    }}
                >
                    <div className='form-group'>
                        <label>Email</label>
                        <Input autoComplete='false' name='email' />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <Input.Password autoComplete='false' name='password' />
                    </div>
                    <div className='form-group'>
                        <Button type='primary' htmlType='submit'>
                            Login
                        </Button>
                    </div>
                    <a href="" target="">Register HR User</a>
                </Form>
            </Card>
        </div>
    )
}

