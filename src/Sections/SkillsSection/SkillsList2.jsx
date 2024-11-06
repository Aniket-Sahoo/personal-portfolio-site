import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkillIconsContainer from './SkillGroupIcons';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';


const SkillsList2 = ({skills}) => {
  const theme = useTheme();
  return (
    <Box sx={{}} >
      {
        skills.map((skillGroup, index) => (
          <Accordion key={index} sx={{background: theme.palette.gradientBackground.secondary, color: 'white'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <Typography variant="h4">{skillGroup.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{background: theme.palette.gradientBackground.tertiary}}>
              <SkillIconsContainer skillGroup={skillGroup} />
            </AccordionDetails>
          </Accordion >
        ))
      }
    </Box>
  );
}

export default SkillsList2;
