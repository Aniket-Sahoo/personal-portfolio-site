import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkillIconsContainer from './SkillGroupIcons';
import Box from '@mui/material/Box';


const SkillsList2 = ({skills}) => {
  return (
    <Box sx={{}} >
      {
        skills.map((skillGroup, index) => (
          <Accordion key={index} sx={{background: 'linear-gradient(90deg, #401818 0%, #A63F3F 100%)', color: 'white'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              {skillGroup.title}
            </AccordionSummary>
            <AccordionDetails sx={{background: 'linear-gradient(180deg, #5F4A1C 0%, #846641 50%, #634646 100%)'}}>
              <SkillIconsContainer skillGroup={skillGroup} />
            </AccordionDetails>
          </Accordion >
        ))
      }
    </Box>
  );
}

export default SkillsList2;
