import React, { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function SignupLoginModal(props) {
    const [visibleForm, setVisibleForm] = useState("LOGIN");
    return (
        <Modal {...props}>
            {visibleForm === "LOGIN" && (
                <LoginForm onRequestSignupForm={() => setVisibleForm("SIGNUP")} onLoginCompleted={props.onClose} />
            )}
            {visibleForm === "SIGNUP" && (
                <SignupForm onRequestLoginForm={() => setVisibleForm("LOGIN")} onLoginCompleted={props.onClose} />
            )}
        </Modal>
    );
}
