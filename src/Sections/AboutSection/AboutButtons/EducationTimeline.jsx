import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import timelineData from '../../../Data/timelineData.json';
import { Box, Grid2, Typography } from '@mui/material';

const EducationTimeline = () => {
  // let icons = [<WorkIcon />, <WorkIcon />, <WorkIcon />, <WorkIcon />];
  return (
    <VerticalTimeline >
      {
        timelineData.education.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={education.date}
              contentStyle={{ background: 'rgb(100, 50, 100)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(100, 50, 100)' }}
              iconStyle={{ background: 'rgb(100, 50, 100)', color: '#fff' }}
              icon= {<SchoolIcon/>}
            >
              <Typography variant="h3" pb={1} className="vertical-timeline-element-title">{education.title}</Typography>
              <Typography variant="h4" className="vertical-timeline-element-subtitle">
                {education.subtitle}
              </Typography>
              <Grid2 container direction={"column"} pt={2.5}>
                {education.description.map((description, index) => (
                  <Typography variant="p" key={index}>
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