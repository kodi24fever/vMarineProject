import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state}}>
                            <Route exact path="/" component={Home} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
