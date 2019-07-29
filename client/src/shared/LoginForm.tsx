import React, { useState, useCallback } from "react";
import useUserToken from "../hooks/useUserToken";

type LoginFormProps = {
    onRequestSignupForm: () => void;
    onLoginCompleted: () => void;
};

export default function LoginForm({ onRequestSignupForm, onLoginCompleted }: LoginFormProps) {
    const [, setUserToken] = useUserToken();

    const [processingLogin, setProcessingLogin] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [loginIssue, setLoginIssue] = useState("");
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
                    if (!loginData.success) {
                        throw loginData;
                    }
                    setUserToken(loginData);
                    setLoginIssue("");
                    onLoginCompleted && onLoginCompleted();
                })
                .catch(err => {
                    setLoginIssue(err.errorMessage);
                })
                .finally(() => {
                    setProcessingLogin(false);
                });
        },
        [processingLogin, user, password, setUserToken, onLoginCompleted]
    );

    return (
        <div id="login-form" className="box container">
            <div id="loginbg" />
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
                            className={"input" + (loginIssue.length > 0 ? " is-danger" : "")}
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
                            className={"input" + (loginIssue.length > 0 ? " is-danger" : "")}
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                {loginIssue.length > 0 ? <p className="has-text-danger">{loginIssue}</p> : null}
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
