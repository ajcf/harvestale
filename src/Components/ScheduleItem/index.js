const ScheduleItem = (props) => (
  <div className="schedule-item">
    <div className="schedule-item-row">
      <div className="schedule-time">{props.time}</div>
      <div className="schedule-label">{props.label}</div>
    </div>
    {props.description && (
      <div className="schedule-description">{props.description}</div>
    )}
  </div>
);

export default ScheduleItem;
