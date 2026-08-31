import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ScheduleDay from './Components/ScheduleDay';
import PublicHeader from './Components/Header/PublicHeader';

const PublicPage = () => (
  <ThemeProvider theme={theme}>
    <div className="not_home">
      <PublicHeader />
      <div className="content-wrapper">
        <Container className="homebody homebody--wide">
          <Box className="readable-background">
            <p className="intro">
              For four decades and counting, Juggler Meadow and Wake Robin Morris have welcomed the fall
              by touring the Northern Pioneer Valley with visiting sides for a full weekend of
              traditional English ritual dance. Check our schedule below and join us as we celebrate
              the harvest with ringing bells and clashing sticks!
            </p>

            {/* <Box className="question" sx={{ mt: 3 }}>Schedule</Box> */}

            <ScheduleDay
              day="Saturday"
              date="10/10"
              events={[
                {
                  time: "10:30am", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <div className="tour-teams">Firebird · Jack in the Green</div>
                        <a className="tour-location" href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <div className="tour-teams">Westerly · Rock Creek · Marlboro M</div>
                        <a className="tour-location" href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hager’s Farm Market</a>
                      </Grid>
                    </Grid>
                },
                {
                  time: "11:30am", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <a className="tour-location" href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <a className="tour-location" href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
                      </Grid>
                    </Grid>
                },
                {
                  time: "3pm", label: "Ashfield Fall Festival"
                },
              ]}
            />
            <ScheduleDay
              day="Sunday"
              date="10/11"
              events={[
                { time: "10:30am", label: <a href="https://maps.app.goo.gl/Rgjn7aQFCnyzD2CfA">Three Sisters Sanctuary</a> },
                {
                  time: "11:45am", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <div className="tour-teams">Westerly · Rock Creek · Marlboro M</div>
                        <span className="tour-location"><a href="https://maps.app.goo.gl/qndWopdUPgPxgVK97">
                          Shelburne Falls Potholes
                        </a></span>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <div className="tour-teams">Jack in the Green · Firebird</div>
                        <span className="tour-location">
                          <a href="https://maps.app.goo.gl/cZMKMLQ8rW1xwtTw8">
                            Bridge of Flowers
                          </a> (Buckland side)</span>
                      </Grid>
                    </Grid>
                },
                {
                  time: "12:20pm", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <span className="tour-location">
                          <a href="https://maps.app.goo.gl/cZMKMLQ8rW1xwtTw8">
                            Bridge of Flowers
                          </a> (Buckland side)</span>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <span className="tour-location"><a href="https://maps.app.goo.gl/qndWopdUPgPxgVK97">
                          Shelburne Falls Potholes
                        </a></span>
                      </Grid>
                    </Grid>
                },
                { time: "3pm", label: <a href="https://maps.app.goo.gl/6Z1xKSu4GZjZR24S6">Wilder Farm Sampler</a> },
              ]}
            />

            {/* <Box className="question" sx={{ mt: 3 }}>Participating Teams</Box>
            <Box>Team information coming soon.</Box> */}
          </Box>
        </Container>
      </div>
    </div>
  </ThemeProvider>
);

export default PublicPage;
