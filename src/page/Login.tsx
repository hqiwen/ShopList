import { Button, Checkbox, Form, Icon, Input, Modal } from "antd/es";
import { FormComponentProps } from "antd/es/form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { RootState } from "..";
import { setAuthenticate, setCurUser, shouldLogin } from "../store/Auth/action";

function loginError() {
    Modal.error({
        title: "当前用户不存在",
        content: "请检查用户名和密码，重新输入"
    })
}

function getUseByUserName(user, username: string) {
    return user.filter((val) => { return val.userName === username })[0];
}

const AuthLogin: React.FC<RouteComponentProps> = (props) => {
    const isAuthenticated = useSelector<RootState, any>(state => state.Auth.isAuthenticated);
    const user = useSelector<RootState, any>(state => state.Auth.user);
    const dispatch = useDispatch();

    const login = (userName: string, userPassword: string | number) => {
        if (shouldLogin(user, userName, userPassword)) {
            let curUser = getUseByUserName(user, userName);
            console.log(curUser);
            dispatch(setCurUser(curUser));
            dispatch(setAuthenticate(true));
        } else {
            loginError();
        }
    };

    let { from } = props.location.state || { from: { pathname: "/" } };

    return (
        isAuthenticated ? <Redirect to={from} /> : (
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", boxShadow:"3px 3px 1px grey", padding: "15px", border: "1px solid grey"}}>
                <WrappedLoginForm login={login}></WrappedLoginForm>
            </div>
        )
    );
}

interface LoginProps extends FormComponentProps {
    login: (userName : string, userPassword: string | number) => void;
}

const Login: React.FC<LoginProps> = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.login(values.username, values.password);
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