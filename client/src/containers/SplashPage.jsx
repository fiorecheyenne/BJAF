import React, { useState } from "react";
import SignupLoginModal from "../shared/SignupLoginModal";

// TODO: Design initial index/splash page
export default function SplashPage() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <main>
            <SignupLoginModal isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </main>
    );
}
