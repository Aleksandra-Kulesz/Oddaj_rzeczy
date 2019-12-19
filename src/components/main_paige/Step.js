import React from "react";

const Step = (props) => {
    return (
        <div className="step">
            <div className="step_img"/>
            <p className="step_text">
                {props.text}
            </p>
        </div>
    )
};

export {Step};

