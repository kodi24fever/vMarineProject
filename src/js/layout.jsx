import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Gallery} from "./views/Gallery.jsx";
import {Contact} from "./views/Contact.jsx";
import {Services} from "./views/Services.jsx";
import {UserPage} from "./views/UserPage.jsx";
import Login from './component/login.jsx';
import SignUp from './component/signup.jsx';
import Form from './component/user/form.jsx';

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            session:{
                ID: 2,
                username: "theUser",
                password: "1234",
                token: ""
            }  
        };
        
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                this.setState(
                    {
                        session: {
                            ID: 1000,
                            username: receivedUsername,
                            password: receivedPassword,
                            token: 'sampleToken'
                        }   
                        
                    });
            }
        };
    }


    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/gallery" component={Gallery} />
                            <Route exact path="/services" component={Services} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            
                            {/*Testing Place Order*/}
                            <Route exact path="/order" component={Form} />
                            
                            {/*Testing Logging in*/}
                            <Route exact path="/userPage" component={UserPage} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
