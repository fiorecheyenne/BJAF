import React, { Component } from "react";

const basebox = {
    maxWidth: "200px",
    borderRadius: "50%",
    marginTop: "5px",
};

const center = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "5px",
};

const imageSize = {
    // maxHeight: "190px",
};

//TODO: fix card display - desktop 2 rows of 5, mobile side by side - 200px md cards - 150 mobile cards - 300 lrg cards
export default function RandomizerPage(props) {
    return (
        <main>
            <div class="basebg" />

            <div class="column is-full is-centered has-text-centered" id="randomizertitle">
                <p class="title is-2">CHOOSE YOUR BASE:</p>
            </div>

            <ul class="circleContainer">
                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=coffee")}>
                    <img class="img" src="/image/coffee.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        COFFEE
                    </span>
                </li>
                {/* Tea card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=tea")}>
                    <img class="img" src="/image/tea.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        TEA
                    </span>
                </li>

                {/* Lemonade card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=lemonade")}>
                    <img class="img" src="/image/lemonade.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        LEMONADE
                    </span>
                </li>

                {/* Rebel card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=rebel")}>
                    <img class="img" src="/image/rebel.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        REBEL
                    </span>
                </li>

                {/* Smoothie card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=smoothie")}>
                    <img class="img" src="/image/smoothie.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        SMOOTHIE
                    </span>
                </li>

                {/* Frost card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=frost")}>
                    <img class="img" src="/image/frost.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        FROST
                    </span>
                </li>

                {/* Soda card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=soda")}>
                    <img src="/image/soda.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        SODA
                    </span>
                </li>

                {/* Chai card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=chai")}>
                    <img class="img" src="/image/chai.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        CHAI
                    </span>
                </li>

                {/* Cocoa card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=cocoa")}>
                    <img class="img" src="/image/cocoa.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        COCOA
                    </span>
                </li>
                {/* Mocha card */}

                <li className="base box" style={basebox} onClick={() => props.history.push("results?base=mocha")}>
                    <img class="img" src="/image/mocha.png" style={imageSize} />
                    <span class="title is-4" style={center}>
                        MOCHA
                    </span>
                </li>
            </ul>
        </main>
    );
}
