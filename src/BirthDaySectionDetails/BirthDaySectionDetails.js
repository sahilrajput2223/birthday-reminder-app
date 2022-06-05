import React from "react"
import "./birthDaySectionDetails.css"

const BirthDaySectionDetails = () => {
    return (
        <React.Fragment>
            <div className="birthDaySectionDetails">
                <div className="row">
                    <div className="col-md-4 imageSection">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="sdflkfjskdnlk" className="birthDayImageSection" />
                    </div>
                    <div className="col-md-8 birthdayDetails">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="name">
                                    <b>
                                        Sahil Rajput
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className="date">
                                    22-04-1999
                                </p>
                            </div>
                            <div className="col-md-9">
                                <p className="date" style={{ float: "right", marginRight: "10px" }}>
                                    Next Birth Day in 25 Days
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