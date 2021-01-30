import React from 'react'

const MVPDevelopmentSection4Data = (props) => {
    return (
        <>
            <div className="col-6">
                <div className="s4-box">
                    <img alt="img" src={props.cardImg1} className="img-fluid s4-emoji" />
                    <h3 className="text-center">{props.cardText}</h3>
                    <img alt="img" src={props.cardImg2} className="img-fluid s4-building" />
                </div>
            </div>

        </>
    )
}

export default MVPDevelopmentSection4Data
