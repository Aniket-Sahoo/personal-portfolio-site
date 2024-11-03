import { Button, Grid, Grid2 } from '@mui/material';
import { useState, useReducer } from 'react';
import WorkExTimeline from './WorkExTimeline';
import EducationTimeline from './EducationTimeline';
import HobbiesComponent from './HobbiesComponent';


const SET_WORK = "SET_WORK";
const SET_EDUCATION = "SET_EDUCATION";
const SET_SKILLS = "SET_SKILLS";
const SET_HOBBIES = "SET_HOBBIES";

// Initial state
const initialState = { work: false, education: false, skills: false, hobbies: false };

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_WORK:
            return { work: !state.work, education: false, skills: false, hobbies: false };
        case SET_EDUCATION:
            return { work: false, education: !state.education, skills: false, hobbies: false };
        case SET_SKILLS:
            return { work: false, education: false, skills: true, hobbies: false };
        case SET_HOBBIES:
            return { work: false, education: false, skills: false, hobbies: true };
        default:
            return state;
    }
};



const AboutButtons = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Grid2 container py={3} justifyContent={"center"} spacing={{xs: 1, sm: 3, md: 5}} >
        <Button 
          variant={state.work? "contained" : "outlined"}
          color="primary"
          onClick={() => dispatch({ type: SET_WORK })}
        >
          Work Experience
        </Button>
        <Button 
          variant={state.education? "contained" : "outlined"}
          color="secondary" 
          onClick={() => dispatch({ type: SET_EDUCATION })}
        >
          Education
        </Button>
        <Button 
          variant={state.skills? "contained" : "outlined"}
          color='success' 
          onClick={() => dispatch({ type: SET_SKILLS })}
        >
          Skills
        </Button>
        <Button 
          variant={state.hobbies? "contained" : "outlined"}
          color='warning' 
          onClick={() => dispatch({ type: SET_HOBBIES })}
        >
          Hobbies
        </Button>
      </Grid2>
      <Grid2 container>
        {state.work && <WorkExTimeline />}
        {state.education && <EducationTimeline />}
        {state.skills && <h1>Skills</h1>}
        {state.hobbies && <HobbiesComponent />}
      </Grid2>
    </>
  )
}

export default AboutButtons;