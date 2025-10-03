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
import FAQ from './FAQ';
import Home from './Home';
import Information from './Information';
import NotFound from './NotFound';
import Schedule from './Schedule';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/participants" component={Information} />
                    <Route path ="/schedule" component={Schedule} />
                    <Route path ="/information" component={Information} />
                    <Route path ="/faq" component={FAQ} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}



export default hot(module)(App);
