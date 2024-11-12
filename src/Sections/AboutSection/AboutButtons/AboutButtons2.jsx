import { Button, Box, Grid2, useTheme } from '@mui/material';
import { useReducer, useRef } from 'react';
import WorkExTimeline from './WorkExTimeline';
import EducationTimeline from './EducationTimeline';
import HobbiesComponent from './HobbiesComponent/HobbiesComponent';
import TestComponent from './HobbiesComponent/TestComponent';
import { motion, AnimatePresence } from 'framer-motion';


const SET_WORK = "SET_WORK";
const SET_EDUCATION = "SET_EDUCATION";
const SET_SKILLS = "SET_SKILLS";
const SET_HOBBIES = "SET_HOBBIES";

// Initial state
const initialState = { work: false, education: false, hobbies: false };

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_WORK:
            return { work: !state.work, education: false, hobbies: false };
        case SET_EDUCATION:
            return { work: false, education: !state.education, hobbies: false };
        case SET_SKILLS:
            return { work: false, education: false, hobbies: false };
        case SET_HOBBIES:
            return { work: false, education: false, hobbies: !state.hobbies };
        default:
            return state;
    }
};

const AboutButtons = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const theme = useTheme();

  const handleSkillsClick = () => {
    dispatch({ type: SET_SKILLS });
    // Scroll to the skills section if ref is defined
    window.location.hash = 'skills';
  };

  return (
    <Box>
      <Grid2 container pt={4} pb={4} justifyContent={"center"} spacing={{ xs: 1, sm: 3, md: 5 }}>
        <Button 
          variant={state.work ? "contained" : "outlined"}
          color= {state.work ? 'brown' : "hazel"}
          onClick={() => dispatch({ type: SET_WORK })}
        >
          Work Experience
        </Button>
        <Button 
          variant={state.education ? "contained" : "outlined"}
          color= {state.education ? 'blue' : "primary"}
          onClick={() => dispatch({ type: SET_EDUCATION })}
        >
          Education
        </Button>
        <Button 
          variant={state.hobbies ? "contained" : "outlined"}
          color= {state.hobbies ? 'green' : "success"}
          onClick={() => dispatch({ type: SET_HOBBIES })}
        >
          Hobbies
        </Button>
      </Grid2>
      <Grid2>
        {state.work && <WorkExTimeline />}
        {state.education && <EducationTimeline />}
        <AnimatePresence>
          {state.hobbies && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Animate to this state
              exit={{ opacity: 0, y: -20 }} // Exit state
              transition={{ duration: 0.3 }} // Duration of transition
            >
              <HobbiesComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </Grid2>
    </Box>
  );
};

export default AboutButtons;
