import React from "react"
import "./birthDaySectionDetails.css"

const BirthDaySectionDetails = ({ name, birthDate, nextBirthDay, imagePath }) => {
    return (
        <React.Fragment>
            <div className="birthDaySectionDetails">
                <div className="row">
                    <div className="col-md-4 imageSection">
                        <img src={imagePath} alt={name} className="birthDayImageSection" />
                    </div>
                    <div className="col-md-8 birthdayDetails">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="name">
                                    <b>
                                        {name}
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="date">
                                    {birthDate}
                                </p>
                            </div>
                            <div className="col-md-9">
                                <p className="date" style={{ float: "right", marginRight: "10px" }}>
                                    Next Birth Day in {nextBirthDay} Days
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BirthDaySectionDetails