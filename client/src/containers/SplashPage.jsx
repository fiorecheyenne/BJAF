import React from "react";
import Hero from "./Hero";
import ContainerLeft from "./ContainerLeft";
import ContainerRight from "./ContainerRight";
// TODO: Design initial index/splash page
export default function SplashPage() {
    return (
        <main>
            <ContainerLeft>
                Hello<br />
                <a class="button is-primary">Select base</a>
            </ContainerLeft>
            <ContainerRight>Hello</ContainerRight>
        </main>
    );
}
