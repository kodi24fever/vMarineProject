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
                id: 10,
                subject: '',
                comment: '',
                boatMake: 'this is boat make',
                boatModel: 'this is boat model',
                boatLenght: '',
                hullID: '',
                numberOfEngines: '3',
                engineYear: '',
                engineModel: '',
                engineHP: '',
                engineID: '',
                serial:'this is serial'
            },
            conctactMe: {
                firstName: '',
                lastName: '',
                email: '',
                comment: ''
            },
            userAccount: {
                firstName: 'Juanito',
                lastName: 'Suarez',
                email: 'blahblahblah@blahblah.com',
                address: '010101SW 2525 Aveny Miami Fl 33444',
                phone: '7897897899',
                password: 'xxxxxxxxxxxxxxxxx',
                confirmPassword: 'xxxxxxxxxxxxxxxxx'
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
                            token: 'asdasdasdasd'
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
                        id: 1199,
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
            },
            "contactForm": (firstName, lastName, email, comment) =>{
                this.setState(
                {
                    conctactMe: {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        comment: comment
                    }
                });
            },
            "updateProfile": {
                email: (email) => {
                this.setState(
                    {
                        userAccount: {
                            email: email,
                            address: this.state.userAccount.address,
                            phone: this.state.userAccount.phone,
                            password: this.state.userAccount.password
                            
                        }
                    });
                },
                password: (password) => {
                this.setState(
                    {
                        userAccount: {
                            email: this.state.userAccount.email,
                            address: this.state.userAccount.address,
                            phone: this.state.userAccount.phone,
                            password: password
                        }
                    });
                },
                address: (address) => {
                this.setState(
                    {
                        userAccount: {
                            email: this.state.userAccount.email,
                            address: address,
                            phone: this.state.userAccount.phone,
                            password: this.state.userAccount.password
                        }
                    });
                },
                phone: (phone) => {
                this.setState(
                    {
                        userAccount: {
                            email: this.state.userAccount.email,
                            address: this.state.userAccount.address,
                            phone: phone,
                            password: this.state.userAccount.password
                        }
                    });
                }
            },
            "signUp": (name, lastName, email, address, number,  password, confirmPassword) => {
                this.setState(
                    {
                        userAccount: {
                            firstName: name,
                            lastName: lastName,
                            email: email,
                            address: address,
                            phone: number,
                            password: password,
                            confirmPassword: confirmPassword
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
