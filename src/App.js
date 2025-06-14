import { hot } from 'react-hot-loader';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom"; 
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './css/style.css';
import NotFound from './NotFound';
import FAQ from './FAQ';
import Schedule from './Schedule';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" component={Schedule} exact />
                    <Route path ="/schedule" component={Schedule} />
                    <Route path ="/faq" component={FAQ} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}



export default hot(module)(App);
