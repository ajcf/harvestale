import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ReadableAppPage } from "./Components/AppPage";
import ScheduleDay from "./Components/ScheduleDay";

const FAQ = () => (
  <ReadableAppPage>
    <Box>
      <a href="/participants"><Button variant="contained">Participants Only</Button></a>
    </Box>
 <Box sx={{ flexGrow: 1 }}>
    <div className="schedule-date">October 11-12, 2025</div>
      <ScheduleDay
        day="Saturday"
        date="10/11"
        events={[
          { time: "10:30a", label: "First Stand", description:
          <Grid container>
            <Grid item xs={12} sm={6} className="detail">
              Jugger Meadow tour
              <br/>
              <a href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
            </Grid>
            <Grid item xs={12} sm={6} className="detail additional-row">
              Wake Robin tour
              <br/>
              <a href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hagar's Farm Market</a>
            </Grid>
          </Grid>},
          { time: "11:30a", label: "Second Stand", description:
           <Grid container>
            <Grid item xs={12} sm={6} className="detail">
              Jugger Meadow tour
              <br/>
              <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
            </Grid>
            <Grid item xs={12} sm={6} className="detail additional-row">
              Wake Robin tour
              <br/>
              <a href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
            </Grid>
          </Grid>},
          { time: "3p", label: "Ashfield Fall Festival", description:
            <div>
              Festival is on <a href="https://maps.app.goo.gl/cDhYV8yVJTMCFhgc6">Ashfield Common</a><br/>
              Park in the <a href="https://maps.app.goo.gl/fWUtek5S5c5DBRx48">tennis court lot</a> and process in.
            </div>}
        ]}
      />
      <ScheduleDay
        day="Sunday"
        date="10/12"
        events={[
          { time: "10:30a", label: <a href="https://maps.app.goo.gl/Rgjn7aQFCnyzD2CfA">Three Sisters Sanctuary</a>},
          { time: "11:50", label: <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>, description:
          <Grid container>
            <Grid item xs={12} sm={6} className="detail">
              Jugger Meadow
              <br/>
              Glacial Potholes (park at <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>)
            </Grid>
            <Grid item xs={12} sm={6} className="detail additional-row">
              Wake Robin tour
              <br/>
              <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>
            </Grid>
          </Grid>},
          { time: "3p", label: <a href="https://maps.app.goo.gl/6Z1xKSu4GZjZR24S6">Wilder Farm Sampler</a>},
        ]}
      />
    </Box>
  </ReadableAppPage>
);

export default FAQ;
