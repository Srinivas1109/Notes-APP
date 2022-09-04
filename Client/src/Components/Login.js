import React, { useEffect, useState } from 'react'
import auth_details from './auth'
import { gapi } from 'gapi-script'
import { GoogleLogin } from 'react-google-login'
import "../Styles/Login.css"
import jwt_decode from 'jwt-decode'

const Login = () => {
    const [result, setResult] = useState(null)

    const onSuccess = (res) => {
        console.log("response: ",res)
        console.log("access token: ", res.accessToken)
        setResult(JSON.stringify(res.accessToken))
    }
    const onFailure = (err) => {
        // console.log(err)
        setResult(JSON.stringify(err))
    }
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: auth_details.web.client_id,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    })
    return (
        <div className='login-container'>
            <GoogleLogin
                clientId={auth_details.web.client_id}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <br/>
            <br/>
            <br/>
            <div>

                {result && <div>{result}</div>}
            </div>
        </div>
    )
}

export default Login