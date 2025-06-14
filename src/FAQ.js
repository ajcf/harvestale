import React from "react";
import { Box } from "@mui/material";
import { ReadableAppPage } from "./Components/AppPage";
import Question from "./Components/Question";

const FAQ = () => (
  <ReadableAppPage includeHeader currentPage="Q+A">
    <Box>
      <Box>
        <Question
          question="What's the dress code?"
          answer="Cocktail Glam: cocktail attire; sequins and sparkles encouraged."
        />

        <Question
          question="Do you have a registry?"
          answer="Nope! We already have a lot of stuff,
          and you are already committing resources to travel to our wedding.
          Your presence is our present!"
        />
        <Question
          question="Is there parking at the venue?"
          answer="Yes! If necessary, you can leave your car in the parking lot overnight
          and retrieve it in the morning by 10am."
        />
        <Question
          question="When should I arrive?"
          answer="3:30, so the ceremony can start right at 4. If you're running early, the Muse Cider Bar will be open for
          you to enjoy."
        />
        <Question
          question="Is there transportation?"
          answer="We will provide buses between the hotels in the room block and the venue!
          There is also plenty of parking at the venue for anyone who wants to drive
          themselves but if you party with us, make sure you take one of the
          buses back!"
        />
        <Question
          question="Will you take any covid precautions?"
          answer="Most years, June is the month with the least new covid cases, so we're
          not planning to take specific precautions. Our ceremony and cocktail
          hour will be outside. If you're feeling concerned, please reach out to
          us."
        />
      </Box>
    </Box>
  </ReadableAppPage>
);

export default FAQ;
