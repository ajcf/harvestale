import { hot } from 'react-hot-loader';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './css/style.css';
import NotFound from './NotFound';
import FAQ from './FAQ';
import Schedule from './Schedule';
import Information from './Information';
import PublicPage from './PublicPage';
import Login from './Login';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" component={PublicPage} exact />
                    <Route path="/participants/login" component={Login} />
                    <ProtectedRoute path="/participants/schedule" component={Schedule} />
                    <ProtectedRoute path="/participants/information" component={Information} />
                    <ProtectedRoute path="/participants/faq" component={FAQ} />
                    <Redirect from="/schedule" to="/participants/schedule" />
                    <Redirect from="/information" to="/participants/information" />
                    <Redirect from="/faq" to="/participants/faq" />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default hot(module)(App);
