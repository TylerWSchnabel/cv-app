/* eslint-disable no-useless-constructor */
import React from "react";

const Education = (props) => {

    const { education, removeEducation, editEducation  } = props;

    return(
        <div className="educationDiv">
            {education.map((degree) => {
                return <div className="degree" id={degree.id} key={degree.id}>
                            <div className="school">
                                <h3>{degree.school}, <small>{degree.endDate}</small></h3>
                                <input type='text' className='editInputs' id={"schoolInupt-"+degree.id} defaultValue={degree.school}></input>
                                <input type='date' className='editInputs' id={"endDateInupt-"+degree.id} defaultValue={degree.endDate}></input>
                            </div>
                            <div className="major">
                                <p>Major : {degree.major}</p>
                                <input type='text' className='editInputs' id={"majorInupt-"+degree.id} defaultValue={degree.major}></input>
                                <p>Minor : {degree.minor}</p>
                                <input type='text' className='editInputs' id={"minorInupt-"+degree.id} defaultValue={degree.minor}></input>
                            </div>
                            
                            <div className="resumeBtns">
                                <button className="editEducation" onClick={()=>editEducation(degree.id)}>Edit Education</button>
                                <button className="deleteEducation" onClick={()=>removeEducation(degree.id)}>Delete Education</button>
                            </div>
                        </div>
                        
            })}
        </div>
        
    )
}


export default Education;