import { ReadableAppPage } from "./Components/AppPage";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%'
    }
}));

export default function NotFound(props) {

    const classes = useStyles();

    return (
        <ReadableAppPage includeHeader currentPage="Schedule">
            <Typography variant='h4' align='center'>
                    <p>Page not found</p>
                </Typography>
        </ReadableAppPage>
        // <Box>
        //     <Container>
                
        //         <Grid
        //             container
        //             direction="row"
        //             justify="flex-start"
        //             alignItems="flex-start"
        //         >
        //             <Grid item xs={1} sm={2} md={3}></Grid>
        //             <Grid item xs={10} sm={8} md={6}>
        //                 <img alt='not found' className={classes.img} src='/404.gif' />
        //             </Grid>
        //             <Grid item xs={1} sm={2} md={3}></Grid>

        //         </Grid>

        //     </Container>
        // </Box>
    );
}

