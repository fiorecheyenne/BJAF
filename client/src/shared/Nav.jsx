import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupLoginModal from "./SignupLoginModal";
import useUserToken from "../hooks/useUserToken";

export default function Nav(props) {
    const [signupVisible, setSignupVisible] = useState(false);
    const [visibleForm, setVisibleForm] = useState("LOGIN");
    const [token, setToken] = useUserToken();
    return (
        <>
            <nav class="navbar is-fixed-top " role="navigation">
                <div class="navbar-brand">
                    <Link to="/">
                        <a class="navbar-item">
                            <i class="fas fa-random" id="random" />
                            <span id="appname">MIXTLY</span>
                        </a>
                    </Link>
                    {!signupVisible && (
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    )}
                </div>
                {!signupVisible && (
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    {!token ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setVisibleForm("SIGNUP");
                                                    setSignupVisible(true);
                                                }}
                                                class="button is-primary">
                                                Sign Up
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setVisibleForm("LOGIN");
                                                    setSignupVisible(true);
                                                }}
                                                class="button is-light">
                                                Login
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    props.history.push("/user/favorites");
                                                }}
                                                class="button is-primary">
                                                My Favorites
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setToken(null);
                                                    props.history.push("/");
                                                }}
                                                class="button is-light">
                                                Log Out
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <SignupLoginModal
                isVisible={signupVisible}
                onClose={() => setSignupVisible(false)}
                visibleForm={visibleForm}
                setVisibleForm={setVisibleForm}
            />
        </>
    );
}
