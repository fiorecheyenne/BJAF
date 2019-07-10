import React, { useState, useCallback } from "react";
import useUserToken from "../hooks/useUserToken";

export default function LoginForm({ onRequestSignupForm, onLoginCompleted }) {
    const [, setUserToken] = useUserToken();

    const [processingLogin, setProcessingLogin] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onLoginFormDidSubmit = useCallback(
        event => {
            event.preventDefault();
            if (processingLogin) {
                return;
            }
            setProcessingLogin(true);
            const userCredentials = {
                user: user,
                password: password,
            };
            fetch("/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userCredentials),
            })
                .then(data => data.json())
                .then(loginData => {
                    setUserToken(loginData);
                })
                .catch(err => {
                    // TODO: Show user server login error
                    console.warn(err);
                })
                .finally(() => {
                    setProcessingLogin(false);
                    onLoginCompleted && onLoginCompleted();
                });
        },
        [processingLogin, user, password, setUserToken, onLoginCompleted]
    );

    return (
        <div id="login-form" className="box container">
            <div className="columns is-centered">
                <h2 className="is-size-3" style={{ margin: "1.15rem" }}>
                    <strong>Login</strong>
                </h2>
            </div>
            <form onSubmit={onLoginFormDidSubmit}>
                <div className="field">
                    <label className="label">Username or Email</label>
                    <div className="control">
                        <input
                            value={user}
                            onChange={event => setUser(event.target.value)}
                            type="text"
                            className="input"
                            autoComplete="username"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type="password"
                            className="input"
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                <hr />
                <div className="field is-grouped is-grouped-right is-vertical-center">
                    {onRequestSignupForm && (
                        <div className="control">
                            <a
                                href=""
                                onClick={event => {
                                    event.preventDefault();
                                    onRequestSignupForm();
                                }}>
                                Create an account
                            </a>
                        </div>
                    )}
                    <div className="control">
                        <button className={"button is-primary" + (processingLogin ? " is-loading" : "")}>
                            Log into my Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
