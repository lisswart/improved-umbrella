import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ onLogin }) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setErrors("");
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username
            }),
        }
        fetch("/login", configObj)
            .then(response => {
                if (response.ok) {
                    response.json().then((user) => {
                        onLogin(user);
                        setUsername("");
                        history.push("/me");
                    });
                } else {
                    response.json().then(error => {
                        console.log(error.errors);
                        setErrors(error.errors);
                    });
                };
            });
    };


    return (
        <div className="auth-form">
            <div className="auth-form-header">
                <h1>Log In</h1>
            </div>
            <div className="auth-form-body">
                <form onSubmit={handleSubmit}>
                    {errors ? <div className="errors">{errors}</div> : null}
                    <label htmlFor="username" className="visuallyhidden" />
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;