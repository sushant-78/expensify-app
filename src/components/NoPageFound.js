import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => (
    <div className="no-page-found">
        <p>
            404,This page don't exist- <Link to="/">go to home page.</Link>
        </p>

    </div>
);
export default NoPageFound;
