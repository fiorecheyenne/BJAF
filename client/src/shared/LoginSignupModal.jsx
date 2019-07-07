import React, { useState, useCallback } from "react";
import IconButton from "./IconButton";
import useUserToken from "../hooks/useUserToken";

const emailMatch = /.{2,}@.{2,}\..{2,}/;

export default function LoginSignupModal({ isVisible, onClose }) {
    const [userToken, setUserToken] = useUserToken();

    const [formToDisplay, setFormToDisplay] = useState("SIGNUP");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
    const [triggerValidation, setTriggerValidation] = useState(false);

    const validatePassword = useCallback(() => {
        let errorReasons = [];
        if (password.length < 6) {
            errorReasons.push("Password must have at least 6 characters.");
        }
        if (password.length > 0) {
            if (!/[0-9]/.test(password)) {
                errorReasons.push("Password must have at least one number.");
            }
            if (!/[A-Z]/.test(password)) {
                errorReasons.push("Password must have at least one uppercase character.");
            }
            if (!/[a-z]/.test(password)) {
                errorReasons.push("Password must have at least one lowercase character.");
            }
        }
        return errorReasons;
    }, [password]);

    const validateSignupInfo = useCallback(
        () => username.length > 0 && validatePassword().length <= 0 && emailMatch.test(email) && termsChecked,
        [username, email, termsChecked, validatePassword]
    );

    const [processingSignup, setProcessingSignup] = useState(false);

    const onSignupFormDidSubmit = useCallback(
        event => {
            event.preventDefault();
            setTriggerValidation(true);
            if (processingSignup || !validateSignupInfo()) {
                return;
            }
            setProcessingSignup(true);
            const newUserData = { username, email, password };
            fetch("/api/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUserData),
            })
                .then(data => data.json())
                .then(createdUser => {
                    setUserToken(createdUser);
                })
                .catch(err => {
                    console.warn(err);
                    // TODO: Show server signup error message to end user
                })
                .finally(() => {
                    setProcessingSignup(false);
                    onClose && onClose();
                });
        },
        [processingSignup, username, email, password, validateSignupInfo, setUserToken, onClose]
    );

    const [processingLogin, setProcessingLogin] = useState(false);
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const onLoginFormDidSubmit = useCallback(
        event => {
            event.preventDefault();
            if (processingLogin) {
                return;
            }
            setProcessingLogin(true);
            const userCredentials = {
                user: loginUser,
                password: loginPassword,
            };
            // TODO: Implement login authentication
            fetch("/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userCredentials),
            })
                .then(data => data.json())
                .then(loginData => {
                    console.warn("TESTING USER LOGIN", loginData);
                })
                .catch(err => {
                    // TODO: Show user server login error
                    console.log(err);
                })
                .finally(() => setProcessingLogin(false));
        },
        [processingLogin, loginUser, loginPassword]
    );

    return (
        <div className={`modal ${isVisible && "is-active"}`}>
            <div className="modal-background" onClick={onClose} />
            <div className="modal-content">
                <div id="signup-form" className={"box container" + (formToDisplay !== "SIGNUP" ? " is-hidden" : "")}>
                    <div className="columns is-centered">
                        <h2 className="is-size-3" style={{ margin: "1.15rem" }}>
                            <strong>Sign Up</strong>
                        </h2>
                    </div>
                    <form onSubmit={onSignupFormDidSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    className={`input${triggerValidation && username.length <= 0 ? " is-danger" : ""}`}
                                    type="text"
                                    placeholder="Example: JohnDoe"
                                    autoComplete="username"
                                />
                            </div>
                            {triggerValidation && username.length <= 0 && (
                                <p className="help is-danger">A username is needed to signup!</p>
                            )}
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    className={"input" + (triggerValidation && !emailMatch.test(email) ? " is-danger" : "")}
                                    type="text"
                                    placeholder="Example: johndoe@example.org"
                                    autoComplete="email"
                                />
                            </div>
                            {triggerValidation && !emailMatch.test(email) && (
                                <p className="help is-danger">A valid email is needed to signup!</p>
                            )}
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    className={
                                        "input" + (triggerValidation && validatePassword().length > 0 ? " is-danger" : "")
                                    }
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </div>
                            {triggerValidation && (
                                <ul>
                                    {validatePassword().map((reason, key) => (
                                        <li key={key} className="help is-danger">
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="field is-grouped is-vertical-center">
                            <div className="control">
                                <IconButton
                                    icon={termsChecked && "check"}
                                    onClick={() => setTermsChecked(!termsChecked)}
                                    iconSize="small"
                                    buttonSize="small"
                                />
                            </div>
                            <div className="control">
                                <p>
                                    I agree to the <a href="#login-form">Terms and Conditions</a>.
                                </p>
                            </div>
                        </div>
                        {triggerValidation && !termsChecked && (
                            <p className="help is-danger">Please agree to the terms and conditions to create your account.</p>
                        )}
                        <hr />
                        <div className="field is-grouped is-grouped-right is-vertical-center">
                            <div className="control">
                                <a href="#signup-form" onClick={() => setFormToDisplay("LOGIN")}>
                                    I already have an account
                                </a>
                            </div>
                            <div className="control">
                                <button className={"button is-primary" + (processingSignup ? " is-loading" : "")}>
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="login-form" className={"box container" + (formToDisplay !== "LOGIN" ? " is-hidden" : "")}>
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
                                    value={loginUser}
                                    onChange={event => setLoginUser(event.target.value)}
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
                                    value={loginPassword}
                                    onChange={event => setLoginPassword(event.target.value)}
                                    type="password"
                                    className="input"
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="field is-grouped is-grouped-right is-vertical-center">
                            <div className="control">
                                <a href="#signup-form" onClick={() => setFormToDisplay("SIGNUP")}>
                                    Create an account
                                </a>
                            </div>
                            <div className="control">
                                <button className={"button is-primary" + (processingLogin ? " is-loading" : "")}>
                                    Log into my Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClose} />
        </div>
    );
}
