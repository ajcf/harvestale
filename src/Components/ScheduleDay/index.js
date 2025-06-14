import { List, ListItem, Grid } from '@mui/material';
import ScheduleItem from '../ScheduleItem';

const ScheduleDay = (props) => (
    <ListItem className={`schedule-day`}>
        <Grid container>
            <Grid size="6" className="schedule-day-label">
                <div>{props.day}</div>
            </Grid>
            <Grid size="6" className="schedule-date">
                <div>{props.date}</div>
            </Grid>
        </Grid>
        <List className="schedule-day-items">
            {props.events.map((child) => (
                <ScheduleItem
                   key={child.label + "-" + child.time}
                   label={child.label}
                   time={child.time}
                   location={child.location}
                   description={child.description }
                />
            )) }
        </List>
    </ListItem>
);

export default ScheduleDay;
