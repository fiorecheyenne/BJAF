import React, { useState } from "react";

// TODO: Design initial index/splash page
export default function SplashPage() {
    return (
        <main>
            <div class="column is-full has-text-centered" id="divleft">
                <p>
                    <h1>Welcome to mixtly</h1>
                </p>
                <i class="fas fa-random" id="randombig" />
            </div>
            <div class="columns">
                <div
                    class="column is-offset-one-quarter is-one-quarter has-text-right is-full-mobile is-full-mobile has-text-centered-mobile"
                    id="basebutton">
                    <a class="button is-primary is-medium">Select a Base</a>
                </div>
                <div class="column is-one-quarter is-full-mobile has-text-centered-mobile" id="randomizebutton">
                    <a class="button is-primary is-medium">Randomize All</a>
                </div>
            </div>
        </main>
    );
}
