import { Box, Link } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";

const Information = () => (
  <ReadableAppPage
    includeHeader
    currentPage="General Information">
    <Box>
      We're pleaed to present the Harvest Ale in the beautiful Western Mass.
      For two and a half days, we invite you to dance with us around Franklin County, then retire to camp to 
      enjoy local food and sing all night. 
    </Box>
    <Box className="question">
      Registration and Payment
    </Box>
    <Box>
      <p>
        Please register by filling out <a href="https://forms.gle/kXYcLhThyUCgtW2p8">the registration form</a>.
        Each person attending should fill out the form separately, even guests.
      </p>
      <p>
        The Ale fee this year is $150. We ask that each team coordinate Payment
        and send a single check to Dale Gardner-Fox. (todo: dale's contact info). 
      </p>
    </Box>
    <Box className="question">
      Room and Board
    </Box>
    <Box>
      <p>
      We are fortunate to be able to rent Camp Apex again this year. We have access to the Sitterly
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
        Smoking is prohibited on YMCA property.  The Legal Tobacco Smoking Age in Massachusetts is 21. Any underage participant found consuming tobacco will be asked to leave the event.
      </p>
      <p>
        Same goes for cannabis.
      </p>
    </Box>
  </ReadableAppPage>
);

export default Information;
