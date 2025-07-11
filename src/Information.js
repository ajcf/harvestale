import { Box } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";

const Information = () => (
  <ReadableAppPage
    includeHeader
    currentPage="General Information">
    <Box>
      The Harvest Ale is happening again! We're so excited to invite you back to Camp Apex to sing, dance, and feast with us!
      This year, we have a website which will hopefully help answer your questions and promote general confidence throughout the weekend.
    </Box>
    <Box className="question">
      Registration and Payment
    </Box>
    <Box>
      <p>
        <a href="https://forms.gle/kXYcLhThyUCgtW2p8">Register Here</a>
      </p>
      <p>
        Please register by filling out the registration form above.
        Each person attending should fill out the form separately, even guests.
      </p>
      <p>
        The Ale fee this year is $150 for the full weekend, or $45 for guests only attending the feast. We ask that each team coordinate payment
        and send a single check. Squires will get an email with details about how to send payment.
      </p>
    </Box>
    <Box className="question">
      Room and Board
    </Box>
    <Box>
      <p>
      We will be at Camp Apex again this year. We have access to the Sitterly
Lodge, the Davenport Pavilion. the bath house, the campgrounds, and the pavilions. The three
cabins located near the parking lot and the swimming pool are off-limits.
      </p>
      <p>
        All meals during the weekend will be provided by the Ale. When registering, please let us know about any dietary restrictions. 
      </p>
    </Box>
    <Box className="question">
      Alcohol, Tobacco, and Cannabis at the Harvest Ale
    </Box>
    <Box>
      <p>
        The Legal Drinking Age in Massachusetts is 21. Any underage participant found consuming alcohol will be asked to leave the event.
      </p>
      <p>
        Smoking tobacco, cannabis or anything else is prohibited at Camp Apex. Please do not indulge on YMCA property.
      </p>
    </Box>
  </ReadableAppPage>
);

export default Information;
