import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkillIconsContainer from './SkillGroupIcons';
import Box from '@mui/material/Box';

const SkillsList = ({skills}) => {
  return (
    <Box sx={{}} >
      {
        skills.map((skillGroup, index) => (
          <Accordion key={index} sx={{background: 'linear-gradient(90deg, #692828 0%,#69502B 50%, #692828 100%)', color: 'white'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              {skillGroup.title}
            </AccordionSummary>
            <AccordionDetails>
              <SkillIconsContainer skillGroup={skillGroup} />
            </AccordionDetails>
          </Accordion >
        ))
      }
    </Box>
  );
}

export default SkillsList;
