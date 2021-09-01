import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import 'firebase/app'
import firebase from 'firebase/app'
import React from 'react'
import chitchat from '../chit chat.png'
import { auth } from '../components/firebase'

function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <img src={chitchat} width="100px" alt="logo" />
                <h2>Welcome to chit-chat</h2>
                <div className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign in with Google
                </div>
                <br /> <br />

                <div className="login-button facebook"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined/> Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login
