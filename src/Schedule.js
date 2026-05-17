import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReadableAppPage } from "./Components/AppPage";
import ScheduleDay from "./Components/ScheduleDay";

const Schedule = () => (
  <ReadableAppPage includeHeader currentPage="Schedule">
    <div className="schedule-date">October 9-12, 2026</div>
    <p className="schedule-location">
      <a href="https://maps.app.goo.gl/kJKiUn8JAoJPTT4n7" target="_blank" rel="noreferrer">
        Camp Apex <br />
        45 Peckville Rd <br />
        Shelburne Falls, MA <br />
      </a>
    </p>
    <Box sx={{ flexGrow: 1 }}>
      <ScheduleDay
        day="Friday"
        date="10/9"
        events={[
          { time: "5pm", label: "Camp Opens", description: "Potluck dinner will be provided by local teams" }
        ]}
      />
      <ScheduleDay
        day="Saturday"
        date="10/10"
        events={[
          { time: "8:15am-9:30am", label: "Breakfast" },
          { time: "9am", label: "Squires Meeting" },
          { time: "10am", label: "Leave Camp" },
          { label: "Tours and lunch, exact stands TBD" },
          // {
          //   time: "10:30am", label: "First Stand", description:
          //     <Grid container>
          //       <Grid item xs={12} sm={6} className="tour-jm">
          //         <span className="tour-name">Juggler Meadow</span>
          //         {/* <div className="tour-teams">Ring O’Bells · Ragged Robin · Jack in the Green</div> */}
          //         <a href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
          //       </Grid>
          //       <Grid item xs={12} sm={6} className="tour-wr">
          //         <span className="tour-name">Wake Robin</span>
          //         {/* <div className="tour-teams">Handsome Molly · Midnight Capers · Newtowne</div> */}
          //         <a href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hager’s Farm Market</a>
          //       </Grid>
          //     </Grid>
          // },
          // {
          //   time: "11:30am", label: "Second Stand", description:
          //     <Grid container>
          //       <Grid item xs={12} sm={6} className="tour-jm">
          //         <span className="tour-name">Juggler Meadow</span>
          //         <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
          //       </Grid>
          //       <Grid item xs={12} sm={6} className="tour-wr">
          //         <span className="tour-name">Wake Robin</span>
          //         <a href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
          //       </Grid>
          //     </Grid>
          // },
          // { time: "1pm", label: "Lunch at Camp Apex" },
          {
            time: "3pm", label: "Ashfield Fall Festival", description:
              <div>
                Festival is on <a href="https://maps.app.goo.gl/cDhYV8yVJTMCFhgc6">Ashfield Common</a><br />
                Park in the <a href="https://maps.app.goo.gl/fWUtek5S5c5DBRx48">tennis court lot</a> and process in.
              </div>
          },
          { time: "6pm", label: "Cocktail Hour" },
          { time: "7pm", label: "Feast and Festivities" },
          // { time: "9pm", label: "Contradance" }
        ]}
      />
      <ScheduleDay
        day="Sunday"
        date="10/11"
        events={[
          { time: "8:00am - 9:00am", label: "Breakfast" },
          { time: "9am", label: "Squires Meeting" },
          { time: "9:45am", label: "Leave Camp" },
          { label: "Tours and lunch, exact stands TBD" },
          // { time: "10:30am", label: <a href="https://maps.app.goo.gl/Rgjn7aQFCnyzD2CfA">Three Sisters Sanctuary</a> },
          // {
          //   time: "11:45am", label: <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>, description:
          //     <Grid container>
          //       <Grid item xs={12} sm={6} className="tour-jm">
          //         <span className="tour-name">Juggler Meadow</span>
          //         {/* <div className="tour-teams">Handsome Molly · Midnight Capers · Newtowne</div> */}
          //         Glacial Potholes (park at <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>)
          //       </Grid>
          //       <Grid item xs={12} sm={6} className="tour-wr">
          //         <span className="tour-name">Wake Robin</span>
          //         {/* <div className="tour-teams">Ring O’Bells · Ragged Robin · Jack in the Green</div> */}
          //         <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>
          //       </Grid>
          //     </Grid>
          // },
          // { time: "12:30pm", label: "Singing at the Trolley Museum" },
          // { time: "1:00pm", label: "Lunch at Camp Apex" },
          { time: "3pm", label: <a href="https://maps.app.goo.gl/6Z1xKSu4GZjZR24S6">Wilder Farm Sampler</a> },
          { time: "6pm", label: "Dinner at camp" },
        ]}
      />
      <ScheduleDay
        day="Monday"
        date="10/12"
        events={[
          { time: "8:15am", label: "Breakfast" },
        ]}
      />
    </Box>
  </ReadableAppPage>
);

export default Schedule;
