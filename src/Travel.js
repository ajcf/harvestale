import { Box, Link } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";

const Travel = () => (
  <ReadableAppPage
    includeHeader
    currentPage="Travel">
    <Box className="schedule-label">
      Transportation
    </Box>
    <Box>
      <p>
      For your convenience, we're providing shuttles between the hotels and the room blocks. 
      </p>
      <p>There's no requirement to stay at the hotels to take advantage the shuttles.</p>
    </Box>
    <Box className="schedule-label">
      Hotels
    </Box>
    <Box>
      <p>
      We have reserved a few room blocks within a short walk of downtown Northampton for convenience.
      </p>
      <p>
      Northampton also has many Airbnb options, and there are several other hotels outside of downtown.</p>
      <p>
        <b>Thursday and/or Friday night</b>
      </p>
      <Link href="https://maps.app.goo.gl/MZN4Jd12kVLwxKRg6">Quality Inn</Link><br/>
      1-King @ $159 Thursday night, $249 Friday night (+ tax)<br/>
      Call <Link href="tel:413-586-1500">413-586-1500</Link> and ask for the Cadwell-Frost & Johnson Wedding Block<br/>
      Or use <Link href="https://www.choicehotels.com/reservations/groups/SZ19I3">this link</Link><br/>
      <i>This block will be released on May 6</i>
      <p>
        <b>Only Friday night</b>
      </p>
      <p>
        <Link href="https://maps.app.goo.gl/PMGmakjZ3GcDiEku8">Fairfield Inn & Suites</Link><br/>
        1 King @ $309+tax<br/>
        2 Queens @$319+tax<br/>
        Book online using <Link href="https://www.marriott.com/events/start.mi?id=1695325630586&key=GRP">this link</Link><br/>
      </p>
      <p>
        <Link href="https://maps.app.goo.gl/dYp2Cg12Csm2E4gX8">Hotel Northampton</Link><br/>
        1 Queen @ $319.99+tax<br/>
        2 Double Beds @ $319.99+tax<br/>
        Call <Link href="tel:413-584-3100">413-584-3100</Link> and ask for the Cadwell-Frost & Johnson Wedding Block or mention block code CADS to book<br/>
      </p>
      
      <i>These blocks will be released on April 21</i><br/>
      <p>
      If you have trouble booking in one of the blocks, please let us know.
      </p>
    </Box>
    <Box className="schedule-label">
      Flights
    </Box>
    <Box>
      If you're travelling by plane, we recommend either Bradley Airport (1 hour away) or Boston Logan Airport (2 hours away).
    </Box>
  </ReadableAppPage>
);

export default Travel;
