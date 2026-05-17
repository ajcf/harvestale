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
        <Container className="homebody">
          <Box className="readable-background">
            <p className="intro">
              For four decades and counting, Juggler Meadow and Wake Robin Morris have welcomed the fall
              by touring the Northern Pioneer Valley with visiting sides for a full weekend of
              traditional English ritual dance. Check our schedule below and join us as we celebrate
              the harvest with ringing bells and clashing sticks!
            </p>

            <ScheduleDay
              day="Saturday, October 11"
              events={[
                {
                  time: "10:30am", label: "First Stand", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <a href="https://maps.app.goo.gl/eCw7iMPkAdpZL67f7">Mt Sugarloaf</a>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <a href="https://maps.app.goo.gl/vuMTamiYgKfTiUxZ9">Hager's Farm Market</a>
                      </Grid>
                    </Grid>
                },
                {
                  time: "11:30am", label: "Second Stand", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Historic Deerfield</a>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <a href="https://maps.app.goo.gl/GTcx5CfNQg83a7EJ8">West County Cider</a>
                      </Grid>
                    </Grid>
                },
                { time: "3pm", label: "Ashfield Fall Festival" },
              ]}
            />
            <ScheduleDay
              day="Sunday, October 12"
              events={[
                { time: "10:30am", label: "Three Sisters Sanctuary" },
                {
                  time: "11:45am", label: "Second Stand", description:
                    <Grid container>
                      <Grid item xs={12} sm={6} className="tour-jm">
                        <span className="tour-name">Juggler Meadow</span>
                        <a href="https://maps.app.goo.gl/SvEM5o1xUNgDhnFs9">Glacial Potholes</a>
                      </Grid>
                      <Grid item xs={12} sm={6} className="tour-wr">
                        <span className="tour-name">Wake Robin</span>
                        <a href="https://maps.app.goo.gl/E1ysuuaSgDDzQhpA9">Trolley Museum</a>
                      </Grid>
                    </Grid>
                },
                { time: "3p", label: "Wilder Farm Sampler" },
              ]}
            />

            <Box className="question" sx={{ mt: 3 }}>Participating Teams</Box>
            {/* Replace with actual team list */}
            <Box>Team information coming soon.</Box>
          </Box>
        </Container>
      </div>
    </div>
  </ThemeProvider>
);

export default PublicPage;
