/* eslint-disable no-useless-constructor */
import React from "react";

const Experience = (props) => {
    const { workHistory, removeExperience, editExperience } = props;
    
    
    return( 
        <div className="workHistoryDiv">
            {workHistory.map((experience) => {
                return <div className="experienceDiv" id={experience.id} key={experience.id}>
                            <div className="company">
                                <h3>{experience.company}</h3>
                                <input type='text' className='editInputs' id={"companyInupt-"+experience.id} defaultValue={experience.company}></input>
                            </div>
                            <div className="experienceInfo">
                                <div className="position">
                                    <h4>{experience.position}, {experience.startDate} to {experience.endDate}</h4>
                                    <input type='text' className='editInputs' id={"positionInupt-"+experience.id} defaultValue={experience.position}></input>
                                    <input type='month' className='editInputs' id={"startDateInupt-"+experience.id} defaultValue={experience.startDate}></input>
                                    <input type='month' className='editInputs' id={"endDateInupt-"+experience.id} defaultValue={experience.endDate}></input>
                                </div>
                            </div>
                            <div className="description">
                                <p>{experience.description}</p>
                                <textarea type='text' className='editInputs descriptionEdit' id={"descriptionInupt-"+experience.id} defaultValue={experience.description}></textarea>
                            </div>
                            <div className="resumeBtns">
                                <button className="editExperience" onClick={()=>editExperience(experience.id)}>Edit Experience</button>
                                <button className="deleteExperience" onClick={()=>removeExperience(experience.id)}>Delete Experience</button>
                            </div>
                        </div>
            })}
        </div>
    );
}
export default Experience;