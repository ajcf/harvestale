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

