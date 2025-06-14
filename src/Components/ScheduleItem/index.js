import ListItem from "@mui/material/ListItem";

const ScheduleItem = (props) => (
    <ListItem className={`schedule-item schedule-item-${props.side}`}>
        <div>
            <div className="schedule-label">
                {props.label}
            </div>
            <div className="schedule-time">
                {props.time}
            </div>
        </div>
        <div className="schedule-item-divider"></div>
        <div>
            <div className="schedule-location">
                {props.location}
            </div>
            {/* <div className="schedule-description">
                {props.description}
            </div> */}
        </div>
    </ListItem>
);

export default ScheduleItem;
