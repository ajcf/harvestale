import React, { Fragment } from "react";
import { Box } from "@mui/material";

const Question = (props) => (
  <Fragment>
    <Box className="question">{props.question}</Box>
    <Box className="answer">{props.answer}</Box>
  </Fragment>
);

export default Question;
