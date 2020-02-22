import { Button, Checkbox, Form, Icon, Input } from "antd/es";
import { FormComponentProps } from "antd/es/form";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { RootState } from "..";
import { checkLogin } from "../store/Auth/action";

const AuthLogin: React.FC<RouteComponentProps> = (props) => {
    const isAuthenticated = useSelector<RootState, any>(state => state.Auth.isAuthenticated);

    let { from } = props.location.state || { from: { pathname: "/" } };

    return (
        isAuthenticated ? <Redirect to={from} /> : (
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", boxShadow:"3px 3px 1px grey", padding: "15px", border: "1px solid grey"}}>
                <WrappedLoginForm login={checkLogin}></WrappedLoginForm>
            </div>
        )
    );
}

interface LoginProps extends FormComponentProps {
    login: ({ username: string, password: ReactText }) => (dispatch) => void;
}

const Login: React.FC<LoginProps> = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.login({ username: values.username, password: values.password });
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit} className="login-form" style={{ maxWidth: "300px", minHeight: "300px", lineHeight: "16px" }}>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="" style={{float: "right"}}>
                    Forgot password
                    </a>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>
                    Log in
                    </Button>
            </Form.Item>
        </Form>
    )
}

const WrappedLoginForm = Form.create<LoginProps>({ name: 'normal_login' })(Login);

export default AuthLogin;