import React from "react";
import { Box } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";
import Question from "./Components/Question";

const FAQ = () => (
  <ReadableAppPage includeHeader currentPage="FAQ">
    <Box>
      <Box>
        <Question
          question="Placeholder question?"
          answer="here is the answer"
        />
      </Box>
    </Box>
  </ReadableAppPage>
);

export default FAQ;
