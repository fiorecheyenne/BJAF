import React, { MouseEvent, CSSProperties } from "react";

type IconButtonProps = {
    icon: string;
    iconGroup?: string;
    buttonSize?: "large" | "medium" | "small";
    iconSize?: "large" | "medium" | "small";
    isRound?: boolean;
    extras?: string;
    onClick: (event: any) => void;
};

const buttonConstraints: CSSProperties = {
    margin: "0px",
};
export default function IconButton({
    icon,
    iconGroup = "fas",
    buttonSize,
    iconSize,
    isRound,
    extras,
    onClick,
}: IconButtonProps) {
    return (
        <div className="field has-addons">
            <p className="control">
                <button
                    type="button"
                    style={buttonConstraints}
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
