import { Box } from "@mui/material";
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
              iconStyle={{boxShadow:"1px 1px 5px 5px #565336", borderColor: '#565336', background: "linear-gradient(90deg, #692828 0%,#69502B 50%, #692828 100%)", color: '#fff' }}
              icon = {icons[index]}
            >
              <h3 className="vertical-timeline-element-title">{work.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{work.subtitle}</h4>
              <p>
                {work.description.map((description, index) => (
                  <Box key={index}>
                    {description}
                  </Box>
                ))}
              </p>
            </VerticalTimelineElement>
          )
        )
      }
    </VerticalTimeline>
  )
}

export default WorkExTimeline;