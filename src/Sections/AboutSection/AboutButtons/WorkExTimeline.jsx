import { Button } from "@mui/material";
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
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon= {icons[index]}
            >
              <h3 className="vertical-timeline-element-title">{work.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{work.subtitle}</h4>
              <p>
                {work.description}
              </p>
            </VerticalTimelineElement>
          )
        )
      }
    </VerticalTimeline>
  )
}

export default WorkExTimeline;