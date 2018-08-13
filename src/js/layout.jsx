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
            order: [
                /*
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
                enginSerial:'this is serial'
                */
            ],
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
            },
            gallery: [],
            isLoading: true
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                /*this.setState(
                    {
                        session: {
                            ID: 1000,
                            username: receivedUsername,
                            password: receivedPassword,
                            token: 'asdasdasdasd'
                        }   
                        
                    });*/
                var data ={
                        "username": receivedUsername,
                        "password": receivedPassword
                    };
                    
                    fetch('https://hello-wordpress-fdaviz.c9users.io/wp-json/jwt-auth/v1/token',
                        {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            if (typeof(data.token) === "undefined") throw new Error(data.message);
                            this.setState({session:data});
                        })
                        .catch(error => console.log(error));
            },
            "logout": () => {
                this.setSate(
                {
                    session:{
                        username: '',
                        password: '',
                        token: ''
                        
                    }
                });
            },
            "placeOrder": (subject, comment, boatMake, boatModel, boatLenght, hullID, numberOfEngines, engineYear, engineModel, engineHP, engineID, serial) => {
                let url = 'https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/orders';
                
                var data = {
                    "subject": subject,
                    "comment": comment,
                    "boatMake": boatMake,
                    "boatModel": boatModel,
                    "boatLength": boatLenght,
                    "hullID": hullID,
                    "numberOfEngines": numberOfEngines,
                    "engineYear": engineYear,
                    "engineModel": engineModel,
                    "engineHP": engineHP,
                    "engineID": engineID,
                    "engineSerial": serial
                };
                                fetch(url,
                        {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            this.action.loadInitialData();
                        })
                        .catch(error => console.log(error));
                
                /*
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
                        engineSerial: serial
                    }
                });*/
            },
            "contactForm": (firstName, lastName, email, comment) =>{
                let url = 'https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/contact';
                
                var data = {
                        "first_name": firstName,
                        "last_name": lastName,
                        "user_email": email,
                        "comments": comment
                };
                fetch(url,
                        {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            this.setState({session:data});
                        })
                        .catch(error => console.log(error));
                
                /*
                this.setState(
                {
                    conctactMe: {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        comment: comment
                    }
                });*/
            },
            "updateProfile": (email, password, address, phone) => {
                this.setState(
                    {
                        userAccount: {
                            email: email,
                            address: address,
                            phone: phone,
                            password: password
                            
                        }
                    });
            },
            "signUp": (name, lastName, email, address, number,  password, confirmPassword) => {
                let url = 'https://hello-wordpress-fdaviz.c9users.io/wp-json/wp/v2/users';
                
                var data = {
                        "first_name": name,
                        "last_name": lastName,
                        "user_email": email,
                        "passowrd": password
                };
                
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
            },
            "loadInitialData": () => {
                fetch('https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/orders')
                  .then(response => response.json())
                  .then(data => this.setState({ order: data }))
                  .catch(error => console.log(error));
                  
                fetch('https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/user')
                  .then(response => response.json())
                  .then(data => this.setState({ userAccount: data }))
                  .catch(error => console.log(error));
                  
                  fetch('https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/gallery')
                  .then(response => response.json())
                  .then(data => this.setState({ gallery: data,isLoading:false }))
                  .catch(error => console.log(error));
                  
                  fetch('https://hello-wordpress-fdaviz.c9users.io/wp-json/sample_api/v1/contact')
                  .then(response => response.json())
                  .then(data => this.setState({ contactMe: data }))
                  .catch(error => console.log(error));
            }
        };
    }
  componentDidMount() {
    this.actions.loadInitialData();
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