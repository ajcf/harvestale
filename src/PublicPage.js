import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
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
            <Box sx={{ mb: 3 }}>
              <Button
                component={RouterLink}
                to="/participants/login"
                variant="outlined"
                color="secondary"
              >
                Participant Information
              </Button>
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
