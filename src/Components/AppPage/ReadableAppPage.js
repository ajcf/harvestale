import { Box } from "@mui/material";
import AppPage from "./AppPage";

const ReadableAppPage = (props) => (
  <AppPage
    includeHeader={props.includeHeader}
    currentPage={props.currentPage}
    className="not_home"
  >
    {/* <div className="background">
      <img
        src="top-right-2.png"
        alt=""
        className="top-right"
      />
      <img
        src="bottom-left.png"
        alt=""
        className="bottom-left"
      />
    </div> */}
    <Box className="readable-background">{props.children}</Box>
  </AppPage>
);

export default ReadableAppPage;
