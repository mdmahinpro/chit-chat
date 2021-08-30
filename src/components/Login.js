import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import React from 'react'

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to chit-chat</h2>
                <div className="login-button google">
                    <GoogleOutlined/> Sign in with Google
                </div>
                <br /> <br />

                <div className="login-button facebook">
                    <FacebookOutlined/> Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login
