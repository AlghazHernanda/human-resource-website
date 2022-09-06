import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.login_wrapper}>
            <Card className={styles.cardLogin}>
                <Form
                    onFinish={() => {
                        console.log("sudah submitted")
                    }}
                >
                    <div className={styles.form_group}>
                        <label>Email</label>
                        <Input autoComplete='false' name='email' />
                    </div>
                    <div className={styles.form_group}>
                        <label>Password</label>
                        <Input.Password autoComplete='false' name='password' />
                    </div>
                    <div className={styles.form_group}>
                        <Button type='primary' htmlType='submit'>
                            Login
                        </Button>
                    </div>
                    <a className={styles.form_group} href="" target="">Register HR User</a>
                </Form>
            </Card>
        </div>
    )
}

