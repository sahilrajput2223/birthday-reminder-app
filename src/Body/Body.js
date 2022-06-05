import React from "react";
import BirthDaySection from "../BirthDaySection/BirthDaySection";
import "./body.css"

const Body = () => {
    return (
        <React.Fragment>
            <div className="body">
                <BirthDaySection />
            </div>
        </React.Fragment>
    );
}

export default Body;