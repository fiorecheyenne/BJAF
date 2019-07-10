import React, { useState } from "react";
import LoginSignupModal from "../shared/LoginSignupModal";

// TODO: Design initial index/splash page
export default function SplashPage() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <main>
            <LoginSignupModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </main>
    );
}
