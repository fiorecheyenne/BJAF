import React from "react";

const size = {
    mobile: "599px",
    tabletP: "600px",
    tabletL: "900px",
    desktop: "1200px",
    desktopL: "1800px",
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletP: `(min-width: ${size.tabletP})`,
    tabletL: `(min-width: ${size.tabletL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
};
