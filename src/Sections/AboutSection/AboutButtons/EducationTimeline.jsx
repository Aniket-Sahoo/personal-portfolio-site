import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import timelineData from '../../../Data/timelineData.json';
import { Box, Grid2, Typography } from '@mui/material';
import {useTheme, useMediaQuery} from "@mui/material";
import { isMotionComponent } from "framer-motion";

const EducationTimeline = () => {
  // let icons = [<WorkIcon />, <WorkIcon />, <WorkIcon />, <WorkIcon />];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
  console.log(theme);
  console.log(isSmallScreen);
  return (
    <VerticalTimeline >
      {
        timelineData.education.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={education.date}
              contentStyle={{ background: 'linear-gradient(90deg, #0C366D 0%, #3D2A68 50%, #0C366D 100%)', color: '#fff' }}
              contentArrowStyle={{ borderRight: 'px solid  #0C366D' }}
              iconStyle={{boxShadow:"0px 0px px 4px #ffffff", background: 'linear-gradient(90deg, #0C366D 0%, #3D2A68 50%, #0C366D 100%)', color: '#fff'}}
              icon= {<SchoolIcon/>}
            >
              <Typography variant="h3" pb={1} className="vertical-timeline-element-title">
                {isSmallScreen? education.titleSmall:education.title}
              </Typography>
              <Typography variant="h4" className="vertical-timeline-element-subtitle">
                {education.subtitle}
              </Typography>
              <Grid2 container direction={"column"} pt={2.5}>
                {education.description.map((description, index) => (
                  <Typography variant="p" fontSize={"0.85rem"} key={index}>
                    {description}
                  </Typography>
                ))}
              </Grid2>
            </VerticalTimelineElement>
          )
        )
      }
    </VerticalTimeline>
  )
}

export default EducationTimeline;