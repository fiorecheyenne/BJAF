import React, { useState } from "react";
import { device } from "../shared/Device";

const basebox = {};
const position = {};
const center = {};

const imageSize = {
    // maxHeight: "180px",
    // marginTop: "5px",
};

//TODO: change display for mobile
export default function RandomizerPage(props) {
    const [shouldAnimateRotation, setShouldAnimationRotate] = useState(false);
    const [shouldChildAnimate, setShouldChildAnimationRotate] = useState(false);

    return (
        <main>
            <div class="basebg" />

            <div class="column is-full is-centered has-text-centered" id="randomizertitle">
                <p class="title is-2">CHOOSE YOUR BASE:</p>
            </div>

            <ul class={"circleContainer" + (shouldAnimateRotation ? " rotateActive" : "")} style={position}>
                {/* Coffee Card */}
                <li
                    className={"base box boxcard " + (shouldChildAnimate ? " rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        setTimeout(() => props.history.push("results?base=coffee"), 2000);
                    }}>
                    <img class="img" src="/image/coffee.png" alt="coffee" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        COFFEE
                    </span>
                </li>

                {/* Tea card */}
                <li
                    className={"base box boxcard " + (shouldChildAnimate ? " rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=tea"), 2000);
                    }}>
                    <img class="img" src="/image/tea.png" alt="tea" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        TEA
                    </span>
                </li>

                {/* Lemonade card */}
                <li
                    className={"base box boxcard " + (shouldChildAnimate ? " rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=lemonade"), 2000);
                    }}>
                    <img class="img" src="/image/lemonade.png" alt="lemonade" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        LEMONADE
                    </span>
                </li>

                {/* Rebel card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=rebel"), 2000);
                    }}>
                    <img class="img" src="/image/rebel.png" alt="rebel" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        REBEL
                    </span>
                </li>

                {/* Smoothie card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=smoothie"), 2000);
                    }}>
                    <img class="img" src="/image/smoothie.png" alt="smoothie" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        SMOOTHIE
                    </span>
                </li>

                {/* Frost card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=frost"), 2000);
                    }}>
                    <img class="img" src="/image/frost.png" alt="frost" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        FROST
                    </span>
                </li>

                {/* Soda card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=soda"), 2000);
                    }}>
                    <img class="img" src="/image/soda.png" alt="soda" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        SODA
                    </span>
                </li>

                {/* Chai card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=chai"), 2000);
                    }}>
                    <img class="img" src="/image/chai.png" clat="chai" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        CHAI
                    </span>
                </li>

                {/* Cocoa card */}

                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=cocoa"), 2000);
                    }}>
                    <img class="img" src="/image/cocoa.png" alt="cocoa" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        COCOA
                    </span>
                </li>
                {/* Mocha card */}
                <li
                    className={"base box boxcard " + (shouldChildAnimate ? "rotateBox" : "")}
                    style={basebox}
                    onClick={event => {
                        event.preventDefault();
                        setShouldAnimationRotate(!shouldAnimateRotation);
                        setShouldChildAnimationRotate(!shouldChildAnimate);
                        // setTimeout(() => props.history.push("results?base=mocha"), 2000);
                    }}>
                    <img class="img" src="/image/mocha.png" alt="mocha" style={imageSize} />
                    <span class="title is-4 basecenter" style={center}>
                        MOCHA
                    </span>
                </li>
            </ul>
        </main>
    );
}
