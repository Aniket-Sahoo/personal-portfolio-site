import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import timelineData from '../../Data/timelineData.json';

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
              <h3 className="vertical-timeline-element-title">{education.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{education.subtitle}</h4>
              <p>
                {education.description}
              </p>
            </VerticalTimelineElement>
          )
        )
      }
    </VerticalTimeline>
  )
}

export default EducationTimeline;