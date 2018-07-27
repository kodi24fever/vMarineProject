import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";
import {Gallery} from "./views/Gallery.jsx";
import {Contact} from "./views/Contact.jsx";
import {Services} from "./views/Services.jsx";
import {UserPage} from "./views/UserPage.jsx";
import Login from './component/login.jsx';
import SignUp from './component/signup.jsx';
import Form from './component/userPage/form.jsx';
import Progress from './component/userPage/progress.jsx';
import Profile from './component/userPage/profile.jsx';
import Payment from './component/userPage/payment.jsx';
import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            session:{
                /*ID: 2,
                username: "theUser",
                password: "1234",
                token: ""*/
            },
            order: {
                /*subject: '',
                comment: '',
                boatMake: '',
                boatModel: '',
                boatLenght: '',
                hullID: '',
                numberOfEngines: '',
                engineYear: '',
                engineModel: '',
                engineHP: '',
                engineID: '',
                serial:''*/
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
            },
            "logout": () => {
                this.setSate(
                {
                    session:{
                        username: "",
                        password: "",
                        token: ''
                        
                    }
                });
            },
            "placeOrder": (subject, comment, boatMake, boatModel, boatLenght, hullID, numberOfEngines, engineYear, engineModel, engineHP, engineID, serial) => {
                this.setState(
                {
                    order:{
                        subject: subject,
                        comment: comment,
                        boatMake: boatMake,
                        boatModel: boatModel,
                        boatLenght: boatLenght,
                        hullID: hullID,
                        numberOfEngines: numberOfEngines,
                        engineYear: engineYear,
                        engineModel: engineModel,
                        engineHP: engineHP,
                        engineID: engineID,
                        serial: serial
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
                            <Route exact path="/progress" component={Progress} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/payment" component={Payment} />
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
