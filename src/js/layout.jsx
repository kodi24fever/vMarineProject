import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Gallery} from "./views/Gallery.jsx";
import {Contact} from "./views/Contact.jsx";

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/gallery" component={Gallery} />
                            <Route exact path="/contact" component={Contact} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
