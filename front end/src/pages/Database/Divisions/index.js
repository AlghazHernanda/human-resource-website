import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 10,
  },
};

export default function Divisions() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };    

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className="content">
            <div className='form'>
                <h1>Division Database</h1>
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item
                        name="division name"
                        label="Division Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input className='textInput' placeholder='Enter Division name' />
                    </Form.Item>
                    
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.division !== currentValues.division}
                    >
                        {({ getFieldValue }) =>
                        getFieldValue('division') === 'other' ? (
                            <Form.Item
                            name="customizedivision"
                            label="Customize division"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>
                        ) : null
                        }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                        Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
