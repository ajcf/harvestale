import React from "react";
import { Box } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";
import Question from "./Components/Question";

const FAQ = () => (
  <ReadableAppPage includeHeader currentPage="FAQ">
    <Box>
      <Box>
        <Question
          question="Where is the Ale?"
          answer={<p>It's at Camp Apex, on Rt 2 just west of Greenfield, MA.</p>}
        />
        <Question
          question="What's the deal with food and lodging?"
          answer={<p>Ale attendees are invited to bring tents and camp at Camp Apex.
            If this is a challenge for you, let us know on the registration form and we'll help make other arrangements.
            <br/><br/>
            All meals are provided during the weekend, so please also let us know about any dietary restirctions.</p>}
        />
      </Box>
    </Box>
  </ReadableAppPage>
);

export default FAQ;
