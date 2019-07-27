import React from "react";
import Modal, { ModalProps } from "./Modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type Form = "LOGIN" | "SIGNUP";

type SignupLoginModalProps = {
    visibleForm: Form;
    setVisibleForm: (visibleForm: Form) => void;
} & ModalProps;

export default function SignupLoginModal(props: SignupLoginModalProps) {
    const { visibleForm, setVisibleForm } = props;
    return (
        <Modal {...props}>
            {visibleForm === "LOGIN" && (
                <LoginForm
                    onRequestSignupForm={() => setVisibleForm("SIGNUP")}
                    onLoginCompleted={() => props.onClose && props.onClose()}
                />
            )}
            {visibleForm === "SIGNUP" && (
                <SignupForm
                    onRequestLoginForm={() => setVisibleForm("LOGIN")}
                    onSignupCompleted={() => props.onClose && props.onClose()}
                />
            )}
        </Modal>
    );
}
