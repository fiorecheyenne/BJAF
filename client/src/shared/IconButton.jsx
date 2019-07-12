import React from "react";

export default function IconButton({ icon, iconGroup = "fas", buttonSize, iconSize, isRound, extras, onClick }) {
    return (
        <div className="field has-addons">
            <p className="control">
                <button
                    type="button"
                    onClick={onClick}
                    className={`button${buttonSize ? " is-" + buttonSize : ""}${isRound ? " is-rounded" : ""}${
                        extras ? " " + extras : ""
                    }`}>
                    <span className={`icon ${iconSize && "is-" + iconSize}`}>
                        <i className={`${iconGroup} fa-${icon}`} />
                    </span>
                </button>
            </p>
        </div>
    );
}
