import React from "react"
import BirthDaySectionDetails from "../BirthDaySectionDetails/BirthDaySectionDetails";
import "./birthDaySection.css"

const birthdayDetailsData = [
    {
        id: 1,
        name: "Sahil Rajput",
        birthDate: "22-04-1999",
        nextBirthDay: "30",
        imagePath: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg"
    },
    {
        id: 2,
        name: "Shivani Sinduriya",
        birthDate: "26-01-1998",
        nextBirthDay: "456",
        imagePath: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
    },
    {
        id: 3,
        name: "Viru",
        birthDate: "06-08-1999",
        nextBirthDay: "85",
        imagePath: "https://thumbs.dreamstime.com/b/grunge-heart-rainbow-color-lgbt-pride-symbol-vector-illustration-grunge-heart-rainbow-color-lgbt-pride-symbol-129392230.jpg"
    }
]

const BirthDaySection = () => {

    const [data, setData] = React.useState(birthdayDetailsData);

    const clearAllData = () => {
        setData([])
    }

    const addAllData = () => {
        setData(birthdayDetailsData)
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12 birthdaySection">
                            <h4>Upcoming Birthdays ...</h4>
                            <hr />

                            {
                                data.map((birthData) => {
                                    const { id, name, birthDate, nextBirthDay, imagePath } = birthData
                                    return <BirthDaySectionDetails key={id} name={name} birthDate={birthDate} nextBirthDay={nextBirthDay} imagePath={imagePath} />
                                })
                            }

                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn clearBtn" onClick={clearAllData}> Clear All</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn clearBtn" onClick={addAllData}> Add All</button>
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