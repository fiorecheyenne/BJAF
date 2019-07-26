import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupLoginModal from "./SignupLoginModal";
import useUserToken from "../hooks/useUserToken";

export default function Nav(props) {
    const [signupVisible, setSignupVisible] = useState(false);
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [visibleForm, setVisibleForm] = useState("LOGIN");
    const [token, setToken] = useUserToken();
    return (
        <>
            <nav class="navbar" role="navigation">
                <div class="navbar-brand">
                    <Link to="/">
                        <a class="navbar-item">
                            <i class="fal fa-random" id="random" />
                            {/* <span id="appname">MIXTLY</span> */}
                        </a>
                    </Link>
                    {!signupVisible && (
                        <a
                            role="button"
                            class={"navbar-burger" + (mobileNavActive ? " is-active" : "")}
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={() => setMobileNavActive(!mobileNavActive)}>
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    )}
                </div>
                {!signupVisible && (
                    <div class={"navbar-menu" + (mobileNavActive ? " is-active" : "")}>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    {token && token.token && token.token.token ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setMobileNavActive(false);
                                                    props.history.push("/user/favorites");
                                                }}
                                                class="button is-primary">
                                                My Favorites
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setToken(null);
                                                    setMobileNavActive(false);
                                                    props.history.push("/");
                                                }}
                                                class="button is-light">
                                                Log Out
                                            </button>
                                        </>
                                    ) : (
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
                                                    setMobileNavActive(false);
                                                    setSignupVisible(true);
                                                }}
                                                class="button is-light">
                                                Login
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
                onClose={() => {
                    setMobileNavActive(false);
                    setSignupVisible(false);
                }}
                visibleForm={visibleForm}
                setVisibleForm={setVisibleForm}
            />
        </>
    );
}
