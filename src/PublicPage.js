import React from 'react';
import { Box, Container } from '@mui/material';
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
            {/* Replace with a real introduction to the event */}
            <Box sx={{ mb: 2 }}>
              Welcome to the Harvest Ale! We're so excited to share our weekend of singing,
              dancing, and feasting with you. Below you'll find our public performance schedule
              and a list of participating teams.
            </Box>

            <Box className="question">Schedule</Box>
            {/* Public performance schedule — replace placeholder events with actual public performances */}
            <ScheduleDay
              day="Saturday"
              date="10/11"
              events={[
                { time: "3p", label: "Ashfield Fall Festival" },
              ]}
            />
            <ScheduleDay
              day="Sunday"
              date="10/12"
              events={[
                { time: "10:30a", label: "Three Sisters Sanctuary" },
                { time: "11:45a", label: "Trolley Museum" },
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
