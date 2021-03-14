import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from 'libs/history';
import routes from './routes';
import ScrollTop from 'hoc/ScrollTop';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const NotFound = () => 'Not Found';

/**
 * App
 */
function App() {
    return (
        <Router history={history}>
            <ScrollTop>
                <Switch>
                    {routes()}
                    <Route
                        exact
                        path="*"
                        render={() => <NotFound />}
                    />
                </Switch>
            </ScrollTop>
        </Router>
    );
}

export default App;
