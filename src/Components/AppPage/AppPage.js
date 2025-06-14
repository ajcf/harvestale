import { Container, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Header from "../Header";


const AppPage = (props) => (
  <ThemeProvider theme={theme}>
    <div className={props.className ?? ""}>
      {props.includeHeader && <Header currentPage={props.currentPage} /> }
      <div className="content-wrapper">
        <Container className="homebody">
          {props.children}
        </Container>
      </div>
    </div>
  </ThemeProvider>
);

export default AppPage;
