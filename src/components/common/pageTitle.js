import React from "react";

const PageTitle = (props) => {
    return (
        <div className="page-title">
            <div className="container">
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default PageTitle;
