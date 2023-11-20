import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Typography } from 'antd';
import './index.css'
import { LoginApiResponse, getLogin } from "../../../services/Services";
import { AppDispatch } from "../../../redux/Store";
import { useDispatch } from 'react-redux';
import { AuthState, logIn } from "../../../redux/features/AuthSlice";
import { SetUserDetailCookies } from "../../../cookies/HandleCookies";

const LoginPage = () =>{

    const { Title } = Typography;
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();



    const handleLogin = async (username: string,password : string) => {
        console.log('username',username,password)
        try {
          const response: LoginApiResponse = await getLogin(username, password);
          
          console.log('userssss',response.success , response.data)
          if (response.success && response.data) {
            SetUserDetailCookies(response.data)

            dispatch(logIn(response.data))
            navigate('/')
            
          } else {
            
            console.log('Login fails ');
            
          }
        } catch (error) {
    
          console.error('Login',error);
        }
      };
    
    const onFinish = async(values: any) => {

        handleLogin(values.username, values.password)
      };

      
    const info = () => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>Please contact your Admin. </p>
              
            </div>
          ),
          onOk() {},
        });
      };  

  
       
    return(
        <div className="login-google-container">
            <div className="google-container">
            <Title level={2}>Login</Title>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
            </Form.Item>

            <Form.Item>

                <Link to='' className="login-form-forgot" onClick={info} >
                    Forgot password
                </Link>
            </Form.Item>

            </Form>
            </div>
        </div>
    )
}

export default LoginPage