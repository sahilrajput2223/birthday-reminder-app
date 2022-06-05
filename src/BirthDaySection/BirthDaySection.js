import React from "react"
import BirthDaySectionDetails from "../BirthDaySectionDetails/BirthDaySectionDetails";
import "./birthDaySection.css"

const BirthDaySection = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12 birthdaySection">
                            <h4>Upcoming Birthdays</h4>
                            <hr />
                            <BirthDaySectionDetails />
                            <BirthDaySectionDetails />
                            <BirthDaySectionDetails />
                            <BirthDaySectionDetails />
                            <BirthDaySectionDetails />

                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn clearBtn"> Clear All</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </React.Fragment>
    );
}

export default BirthDaySection;