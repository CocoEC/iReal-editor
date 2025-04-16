import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Editor from './components/Editor.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={MainPage}
                    />
                    <Route
                        path="/editor"
                        exact
                        component={Editor}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;