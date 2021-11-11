import { useDispatch } from 'react-redux';
import { Button, Alert,Form, Input,Row, Col } from 'antd';
import { useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { NavLink } from 'react-router-dom';

import classes from './Auth.module.css';
import { authActions } from '../../store/auth';

const Auth = () => {
  const dispatch = useDispatch();
  const [pwderror, setpwderror] = useState(false);
  const [loginform] = useForm();

  const onFinish = (values) => {
    var pwd = values.password;
    var cofpwd = values.confirmpwd;
    if(pwd!=cofpwd){
      setpwderror(true);
      return;
    }
    
    dispatch(authActions.login());
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    loginform.resetFields();
  };



  return (
    <main className={classes.auth}>
      
      {pwderror && <Alert style={{marginBottom:"5px"}} message="password does not match" type="error" showIcon closable />}
      
      <section>
            <h1 style={{marginBottom:'20px'}}>Login To Vet App</h1>
            <Form
              form={loginform}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input valid email!',type: 'string', pattern: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/ }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Pwd"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Pwd"
                name="confirmpwd"
                rules={[{ required: true, message: 'Please confirm your password!' }]}
              >
                <Input.Password />
              </Form.Item>




              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row>
                  <Col span={6}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  </Col>
                  <Col span={3}>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
      </section>
      <p>Forgot Password? Please <NavLink activeClassName={classes.active} to="/pwdReset"> Click </NavLink> here to reset</p>

    </main>
  );
};

export default Auth;
