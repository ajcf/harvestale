
import Grid from '@mui/material/Grid';

const ScheduleItem = (props) => (
    <Grid item className="schedule-item" xs={12}>
        <Grid container spacing={2}>
            <Grid item xs={6} className="schedule-time">
                {props.time}
            </Grid>
            <Grid item xs={6} className="schedule-label">
                {props.label}
            </Grid>
            {props.description &&
                <Grid item xs={12} className="schedule-description">
                    {props.description}
                </Grid>
            }
        </Grid>
    </Grid>
);

export default ScheduleItem;
