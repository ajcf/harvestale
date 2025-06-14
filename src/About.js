import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReadableAppPage } from "./Components/AppPage";

const About = () => (
  <ReadableAppPage includeHeader currentPage="About">
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
          padding: "2rem 0",
        }}
        src="/crag-forest.jpg"
      />
      We met so long ago that we don't remember the exact moment, but it must
      have been while we attending the same middle school in Northfield. We
      started dating when we reconnected in college and Nils invited Amanda to
      see Ted Leo and the Pharmacists. On December 2, 2010, we made it official.
    </div>
    <div style={{ padding: "2rem 0" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src="/with_bryn.jpg"
          />
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src="/colorado.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            src="/cape_cod.jpg"
          />
        </Grid>
      </Grid>
    </div>
    <div>
      We moved into our first apartment together in Newton after college and
      spent several years enjoying life in the city. In 2021, we moved back to
      Western Mass to have more room to play with Bryn and work on our many
      project cars. We also adopted two wonderful cats, Gracie and Samwise.
    </div>
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
          padding: "2rem 0",
        }}
        src="/moosehead.jpg"
      />
      Just over a year ago we went to New Zealand to finally achieve Amanda's
      dream of visiting Hobbiton. While watching the sunset from Mount
      Maunganui, we promised to spend the rest of our lives together.
    </div>
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
          padding: "2rem 0",
        }}
        src="/ring_hands.jpg"
      />
    </div>
  </ReadableAppPage>
);

export default About;
