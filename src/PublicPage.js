import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ScheduleDay from './Components/ScheduleDay';

const PublicPage = () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        The Harvest Ale
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Schedule
      </Typography>
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

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Participating Teams
      </Typography>
      {/* Replace with actual team list */}
      <Typography>Team information coming soon.</Typography>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <RouterLink to="/participants/login">Participants Only</RouterLink>
      </Box>
    </Container>
  </ThemeProvider>
);

export default PublicPage;
