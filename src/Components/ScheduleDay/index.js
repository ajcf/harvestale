import ScheduleItem from '../ScheduleItem';

const ScheduleDay = (props) => (
  <div className="schedule-day">
    <div className="schedule-day-header">
      <div className="schedule-day-label">{props.day}</div>
      {props.date && <div className="schedule-day-date">{props.date}</div>}
      <div className="schedule-day-rule" />
    </div>
    <div className="schedule-day-items">
      {props.events.map((child, index) => (
        <ScheduleItem
          key={index}
          label={child.label}
          time={child.time}
          description={child.description}
        />
      ))}
    </div>
  </div>
);

export default ScheduleDay;
