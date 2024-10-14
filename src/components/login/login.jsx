import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Redux/authReduser";
import { loginFormSchema, validateLoginForm } from "../../utils/validators/validators";

const Login = (props) => {
    if (props.isAuth) return <Navigate to='/profile' />
    return (
        <div>
            <h1>Login</h1>
            <Formik
    initialValues={{ email: "", password: "", rememberMe: false, captcha: "" }}
    validate={validateLoginForm}
    validationSchema={loginFormSchema}
    onSubmit={(values) => {
        props.login(values.email, values.password, values.rememberMe, values.captcha);
    }}
>
    {() => (
        <Form>
            <div>
                <Field type="email" name="email" placeholder="e-mail" />
            </div>
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            <div>
                <Field type="password" name="password" placeholder="password" />
            </div>
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <div>
                <Field type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe"> remember me </label>
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
            {props.captchaUrl && (
                <div>
                    <Field type="text" name="captcha" placeholder="Symbols from image" />
                    <ErrorMessage name="captcha" component="div" style={{ color: 'red' }} />
                </div>
            )}

            <button type="submit">Log in</button>
        </Form>
    )}
</Formik>

        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, { login })(Login);



