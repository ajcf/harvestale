import Grid from '@mui/material/Grid';
import ScheduleItem from '../ScheduleItem';

const ScheduleDay = (props) => (
    <Grid container className={`schedule-day`}>
        <Grid container spacing={2} xs={12}>
            <Grid item xs={8} className="schedule-day-label">
                <div>{props.day}</div>
            </Grid>
            {/* <Grid item xs={6} className="schedule-date">
                <div>{props.date}</div>
            </Grid> */}
        </Grid>
        <Grid container className="schedule-day-items" spacing={2}>
            {props.events.map((child) => (
                <ScheduleItem
                   key={child.label + "-" + child.time}
                   label={child.label}
                   time={child.time}
                   location={child.location}
                   description={child.description }
                />
            )) }
        </Grid>
    </Grid>
);

export default ScheduleDay;
