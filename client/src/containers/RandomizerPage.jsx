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
//TODO: fix card display - desktop 2 rows of 5, mobile side by side
export default class RandomizerPage extends Component {
    render() {
        return (
            <main>
                <div class="column is-full is-centered has-text-centered" id="randomizertitle">
                    <p class="title is-1">CHOOSE YOUR BASE:</p>
                </div>
                <div class="columns is-multiline is-centered is-mobile" id="basecardcol">
                    {/* coffee card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/coffee.png" />
                            <p class="title is-4" style={center}>
                                COFFEE
                            </p>
                        </div>
                    </div>
                    {/* Tea card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/tea.png" />
                            <p class="title is-4" style={center}>
                                TEA
                            </p>
                        </div>
                    </div>

                    {/* Lemonade card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/lemonade.png" />
                            <p class="title is-4" style={center}>
                                LEMONADE
                            </p>
                        </div>
                    </div>

                    {/* Rebel card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/rebel.png" />
                            <p class="title is-4" style={center}>
                                REBEL
                            </p>
                        </div>
                    </div>

                    {/* Smoothie card */}
                    <div class="column is-narrow">
                        <div className="base box " style={basebox}>
                            <img src="./images/smoothie.png" />
                            <p class="title is-4" style={center}>
                                SMOOTHIE
                            </p>
                        </div>
                    </div>

                    {/* Frost card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/frost.png" />
                            <p class="title is-4" style={center}>
                                FROST
                            </p>
                        </div>
                    </div>

                    {/* Soda card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/soda.png" />
                            <p class="title is-4" style={center}>
                                SODA
                            </p>
                        </div>
                    </div>

                    {/* Chai card */}
                    <div class="column is-narrow">
                        <div className="base box" style={basebox}>
                            <img src="./images/chai.png" />
                            <p class="title is-4" style={center}>
                                CHAI
                            </p>
                        </div>
                    </div>
                    {/* Cocoa card */}
                    <div class="column is-narrow">
                        <div className="base box " style={basebox}>
                            <img src="./images/hot_cocoa.png" />
                            <p class="title is-4" style={center}>
                                COCOA
                            </p>
                        </div>
                    </div>
                    {/* Mocha card */}
                    <div class="column is-narrow">
                        <div className="base box " style={basebox}>
                            <img src="./images/mocha.png" />
                            <p class="title is-4" style={center}>
                                MOCHA
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
