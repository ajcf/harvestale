import { ReadableAppPage } from "./Components/AppPage";
import { Typography } from "@mui/material";

export default function NotFound(props) {
    return (
        <ReadableAppPage includeHeader currentPage="Schedule">
            <Typography variant='h4' align='center'>
                    <p>Page not found</p>
                </Typography>
        </ReadableAppPage>
    );
}

// tour directions when ready
// header image from Alan
// list of what to bring
// google sheets to Dale and Heidi