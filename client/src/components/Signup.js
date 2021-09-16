import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const history = useHistory();

    console.log(errors)

    function handleSubmit(e) {
        e.preventDefault();
        setErrors("");
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "email": email
            }),
        }
        fetch("/signup", configObj)
            .then(response => {
                if (response.ok) {
                    response.json().then((user) => {
                        onLogin(user);
                        setUsername("");
                        setEmail("");
                        history.push("/books");
                    });
                } else {
                    response.json().then(error => {
                        console.log(error.errors)
                        setErrors(error.errors.join("; "))
                    })
                };
            });
    };

    return (
        <div className="auth-form">
            <div className="auth-form-header">
                <h1>Create an Account</h1>
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

                    <label htmlFor="email" />
                    <input
                      type="text"
                      id="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />                    
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;