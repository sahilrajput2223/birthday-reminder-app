import React from "react"
import BirthDaySectionDetails from "../BirthDaySectionDetails/BirthDaySectionDetails";
import "./birthDaySection.css"

const birthdayDetailsData = [
    {
        id: 1,
        name: "Sahil Rajput",
        birthDate: "22-04-1999",
        nextBirthDay: "30"
    }
]

const BirthDaySection = () => {

    const [data, setData] = React.useState(birthdayDetailsData);


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

                            {
                                data.map((birthData) => {
                                    const { id, name, birthDate, nextBirthDay } = birthData
                                    return <BirthDaySectionDetails key={id} name={name} birthDate={birthDate} nextBirthDay={nextBirthDay} />
                                })
                            }

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