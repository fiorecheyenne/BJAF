import React, { useState, useCallback } from "react";
import IconButton from "./IconButton";
import useUserToken from "../hooks/useUserToken";

type SignupFormProps = {
    onRequestLoginForm: () => void;
    onSignupCompleted: () => void;
};

const emailMatch = /.{2,}@.{2,}\..{2,}/;

export default function SignupForm({ onRequestLoginForm, onSignupCompleted }: SignupFormProps) {
    const [, setUserToken] = useUserToken();

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
    const [serverIssue, setServerIssue] = useState("");

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
                    if (!createdUser.success) {
                        throw createdUser;
                    }
                    setUserToken(createdUser);
                    onSignupCompleted && onSignupCompleted();
                })
                .catch(err => {
                    setServerIssue("There was an issue trying to create your account.");
                })
                .finally(() => {
                    setProcessingSignup(false);
                });
        },
        [processingSignup, username, email, password, validateSignupInfo, setUserToken, onSignupCompleted]
    );

    return (
        <div id="signup-form" className="box container">
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
                            className={"input" + (triggerValidation && validatePassword().length > 0 ? " is-danger" : "")}
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
                            icon={termsChecked ? "check" : ""}
                            onClick={() => setTermsChecked(!termsChecked)}
                            iconSize="small"
                            buttonSize="small"
                        />
                    </div>
                    <div className="control">
                        <p>
                            I agree to the <a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms and Conditions</a>.
                        </p>
                    </div>
                </div>
                {triggerValidation && !termsChecked && (
                    <p className="help is-danger">Please agree to the terms and conditions to create your account.</p>
                )}
                {serverIssue.length > 0 ? <p className="has-text-danger">{serverIssue}</p> : ""}
                <hr />
                <div className="field is-grouped is-grouped-right is-vertical-center">
                    {onRequestLoginForm && (
                        <div className="control">
                            <a
                                href="#"
                                onClick={event => {
                                    event.preventDefault();
                                    onRequestLoginForm();
                                }}>
                                I already have an account
                            </a>
                        </div>
                    )}
                    <div className="control">
                        <button className={"button is-primary" + (processingSignup ? " is-loading" : "")}>
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
