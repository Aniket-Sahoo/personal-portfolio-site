import { Box, Typography, Grid2 } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import timelineData from '../../../Data/timelineData.json';

const WorkExTimeline = () => {
  let icons = [<WorkIcon />, <WorkIcon />, <WorkIcon />, <WorkIcon />];
  return (
    <VerticalTimeline >
      {
        timelineData.work.map((work, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={work.date}
              contentStyle={{ background: 'linear-gradient(90deg, #692828 0%,#69502B 50%, #692828 100%)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '8px solid #692828'}}
              iconStyle={{boxShadow:"0px 0px px 4px #ffffff", background: "linear-gradient(90deg, #692828 0%,#69502B 50%, #692828 100%)", color: '#fff'}}
              icon = {icons[index]}
            >
              <Typography variant="h3" pb={1} className="vertical-timeline-element-title">{work.title}</Typography>
              <Typography variant="h4" className="vertical-timeline-element-subtitle">{work.subtitle}</Typography>
              <Grid2 container direction={"column"} pt={2.5}>
                {work.description.map((description, index) => (
                  <Typography variant="p" fontSize={"0.9rem"} key={index}>
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

export default WorkExTimeline;