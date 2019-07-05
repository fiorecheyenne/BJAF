import React from "react";

export default function IconButton({ icon, iconGroup = "fas", buttonSize, iconSize, onClick }) {
    return (
        <div className="field has-addons">
            <p className="control">
                <button type="button" onClick={onClick} className={`button ${buttonSize && "is-" + buttonSize}`}>
                    <span className={`icon ${iconSize && "is-" + iconSize}`}>
                        <i className={`${iconGroup} fa-${icon}`} />
                    </span>
                </button>
            </p>
        </div>
    );
}
