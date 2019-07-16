import React, { Component } from "react";

const basebox = {
    maxWidth: "200px",
    padding: "5px",
    position: "relative",
};

const center = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
};

const imageSize = {
    maxHeight: "190px",
};
//TODO: fix card display - desktop 2 rows of 5, mobile side by side - 200px md cards - 150 mobile cards - 300 lrg cards
export default function RandomizerPage(props) {
    return (
        <main>
            <div class="column is-full is-centered has-text-centered" id="randomizertitle">
                <p class="title is-2">CHOOSE YOUR BASE:</p>
            </div>
            <div class="columns is-multiline is-centered is-mobile" id="basecardcol">
                {/* coffee card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=coffee")}>
                        <img src="/image/coffee.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            COFFEE
                        </p>
                    </div>
                </div>
                {/* Tea card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=tea")}>
                        <img src="/image/tea.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            TEA
                        </p>
                    </div>
                </div>

                {/* Lemonade card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=lemonade")}>
                        <img src="/image/lemonade.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            LEMONADE
                        </p>
                    </div>
                </div>

                {/* Rebel card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=rebel")}>
                        <img src="/image/rebel.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            REBEL
                        </p>
                    </div>
                </div>

                {/* Smoothie card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=smoothie")}>
                        <img src="/image/smoothie.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            SMOOTHIE
                        </p>
                    </div>
                </div>

                {/* Frost card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=frost")}>
                        <img src="/image/frost.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            FROST
                        </p>
                    </div>
                </div>

                {/* Soda card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=soda")}>
                        <img src="/image/soda.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            SODA
                        </p>
                    </div>
                </div>

                {/* Chai card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=chai")}>
                        <img src="/image/chai.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            CHAI
                        </p>
                    </div>
                </div>
                {/* Cocoa card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=cocoa")}>
                        <img src="/image/cocoa.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            COCOA
                        </p>
                    </div>
                </div>
                {/* Mocha card */}
                <div class="column is-narrow">
                    <div className="base box" style={basebox} onClick={() => props.history.push("results?base=mocha")}>
                        <img src="/image/mocha.png" style={imageSize} />
                        <p class="title is-4" style={center}>
                            MOCHA
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
