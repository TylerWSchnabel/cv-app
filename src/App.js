
import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import uniqid from "uniqid";


const App = props => {
    const [state, setState] = useState({
        fullName :'',
        phoneNumber : '',
        email : '',
        linkedIn : '',
        about : '',
        degree: {school : '', major : '', minor : '', endDate:'', id: uniqid()},
        education: [],
        experience: { company:'', position:'', description:'', startDate:'', endDate:'', id: uniqid()},
        workHistory: [],
        }
    )

        /* removeEducation = removeEducation.bind(this);
        removeExperience = removeExperience.bind(this);
        editExperience = editExperience.bind(this);
        editEducation = editEducation.bind(this); */
        

    const removeExperience = (id) => {
        setState( {
            ...state,
            workHistory: state.workHistory.filter(degree=> degree.id !== id)
        })
    };

    const editExperience = (id) => {
        const newHistory = state.workHistory.map((experience) => {
            if(experience.id === id){
                return{
                    company: document.getElementById("companyInupt-"+experience.id).value,
                    position: document.getElementById("positionInupt-"+experience.id).value,
                    startDate: document.getElementById("startDateInupt-"+experience.id).value,
                    endDate: document.getElementById("endDateInupt-"+experience.id).value,
                    description: document.getElementById("descriptionInupt-"+experience.id).value,
                    id: uniqid()
                };
            } else {
                return experience;
            }
        
        })
        setState({
            ...state,
            workHistory: newHistory.concat(),
        })
    }
    
    
    const removeEducation = (id) => {
        setState( {
            ...state,
            education: state.education.filter(experience=> experience.id !== id)
        })
    };

    const editEducation = (id) => {
        const newArray = state.education.map((degree) => {
            if(degree.id === id){
                return{
                    school: document.getElementById("schoolInupt-"+degree.id).value,
                    major: document.getElementById("majorInupt-"+degree.id).value,
                    endDate: document.getElementById("endDateInupt-"+degree.id).value,
                    minor: document.getElementById("minorInupt-"+degree.id).value,
                    id: uniqid()
                };
            } else{
                return degree;
            }
        
        })
        setState({
            ...state,
            education: newArray.concat(),
        })
    }
    
    const infoChange = (e) => {
        setState({
            ...state,
            fullName: document.getElementById('nameInput').value,
            phoneNumber: document.getElementById('numberInput').value,
            email: document.getElementById('emailInput').value,
            linkedIn: document.getElementById('linkedInInput').value,
            about: document.getElementById('aboutInput').value
        })
    }
    
    const educationChange = (e) => {
        setState({
            ...state,
            degree: {
                school: document.getElementById('schoolInput').value,
                major: document.getElementById('majorInput').value,
                minor: document.getElementById('minorInput').value,
                endDate: document.getElementById('schoolEndInput').value,
                id: state.degree.id
            }
        })
    }
    const experienceChange= (e) => {
        setState({
            ...state,
            experience: {
                company: document.getElementById('companyInput').value,
                position: document.getElementById('positionInput').value,
                description: document.getElementById('descriptionInput').value,
                startDate: document.getElementById('positionStartInput').value,
                endDate: document.getElementById('positionEndInput').value,
                id: state.experience.id
            }
        })
    }

    const submitEducation = (e) => {
        e.preventDefault();
        setState({
            ...state,
            education : state.education.concat(state.degree),
            degree: {
                school: '',
                major: '',
                minor: '',
                endDate: '',
                id: uniqid()
            }
        })
    }

    const submitExperience = (e) => {
        e.preventDefault();
        setState({
            ...state,
            workHistory : state.workHistory.concat(state.experience),
            experience: {
                company: '',
                position: '',
                description: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
        })
    }  
    
    const previewMode = ()=> {
        let divs = document.querySelectorAll('.resumeBtns');
        let inputs = document.querySelectorAll('.editInputs');
        divs.forEach(element => {
            element.style.display = "none";
        });
        inputs.forEach(input => {
            input.style.display = "none";
        })
    }

    const editMode = ()=>{
        let divs = document.querySelectorAll('.resumeBtns');
        let inputs = document.querySelectorAll('.editInputs');
        divs.forEach(element => {
            element.style.display = "grid";
        });
        inputs.forEach(input => {
            input.style.display = "block";
        })
    }



        const { education, workHistory} = state;

    return(
        <div className='main'>
            <h1 className='mainTitle'>Resume Builder</h1>
            <div id='infoDiv'>
                <h2 className='formTitle'>Basic Info</h2>
                <form id='infoForm'>
                    <input 
                        onChange={infoChange}
                        type='text'
                        id = 'nameInput'
                        value={state.fullName}
                        placeholder='Full Name'
                    />
                    <input 
                        onChange={infoChange}
                        type='tel'
                        id = 'numberInput'
                        value={state.phoneNumber}
                        placeholder='Phone Number'
                    />
                    <input
                        onChange={infoChange}
                        type='email'
                        id = 'emailInput'
                        value={state.email}
                        placeholder='Email'
                    />
                    <input
                        onChange={infoChange}
                        type='url'
                        id = 'linkedInInput'
                        value={state.linkedIn}
                        placeholder='LinkedIn'
                    />
                    <textarea
                        onChange={infoChange}
                        type='url'
                        id = 'aboutInput'
                        value={state.about}
                        placeholder='About'
                    />
                </form>
            </div>
            <div id='experienceDiv'>
                <h2 className='formTitle'>Work History</h2>
                <form id='experienceForm' onSubmit={submitExperience}>
                    <label id='companyLabel' className='label'>Company</label>
                    <input 
                        onChange={experienceChange}
                        type='text'
                        id = 'companyInput'
                        value={state.experience.company}
                    />
                    <label id='positionLabel' className='label'>Position</label>
                    <input 
                        onChange={experienceChange}
                        type='text'
                        id = 'positionInput'
                        value={state.experience.position}
                    />
                    <label id='positionStartLabel' className='label'>Start Date</label>
                    <input 
                        onChange={experienceChange}
                        type='month'
                        id = 'positionStartInput'
                        value={state.experience.startDate}
                    />
                    <label id='positionEndLabel' className='label'>End Date</label>
                    <input 
                        onChange={experienceChange}
                        type='month'
                        id = 'positionEndInput'
                        value={state.experience.endDate}
                    />
                    <label id='descriptionLabel' className='label'>Description</label>
                    <textarea
                        onChange={experienceChange}
                        type='text'
                        id = 'descriptionInput'
                        value={state.experience.description}
                    />
                    <button type='submit' className='submitBtn'>Add Experience</button>
                </form>
            </div>
            <div id='educationDiv'>
                <h2 className='formTitle'>Education</h2>
                <form id='educationForm' onSubmit={submitEducation}>
                    <label id='schoolLabel' className='label'>University</label>
                    <input 
                        onChange={educationChange}
                        type='text'
                        id = 'schoolInput'
                        value={state.degree.school}
                    />
                    <label id='majorLabel' className='label'>Major</label>
                    <input 
                        onChange={educationChange}
                        type='text'
                        id = 'majorInput'
                        value={state.degree.major}
                    />
                    <label id='minorLabel' className='label'>Minor</label>
                    <input 
                        onChange={educationChange}
                        type='text'
                        id = 'minorInput'
                        value={state.degree.minor}
                    />
                    <label id='schoolEndLabel' className='label'>Graduation Date</label>
                    <input 
                        onChange={educationChange}
                        type='month'
                        id = 'schoolEndInput'
                        value={state.degree.endDate}
                    />
                    <button type='submit' className='submitBtn'>Add Education</button>
                </form>
            </div>
            <div className='resumeContainer'>
                <h2 className='resumeTitle'>Resume Preview</h2>
                <div className='previewBtnsDiv'>
                    <button onClick={editMode} className='previewBtns'>Edit Mode</button>
                    <button onClick={previewMode} className='previewBtns'>Peview Mode</button>
                </div>
                <div id='resume'>
                    <div className='resumeHead'>
                        <Header name = {state.fullName} phone = {state.phoneNumber} email = {state.email} linkedIn = {state.linkedIn} about = {state.about}/>
                    </div>
                    <div className='resumeMain'>
                        <About about = {state.about}/>
                        <h2 className='secHead'>Experience</h2>
                        <Experience  workHistory={workHistory} removeExperience={removeExperience} editExperience={editExperience}/>
                        <h2 className='secHead'>Education</h2>
                        <Education  education={education} removeEducation={removeEducation} editEducation={editEducation}/>
                    </div>
                </div>
            </div>
        
        </div>
    )
}



export default App;

