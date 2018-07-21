import React from 'react';
import { Link } from "react-router-dom";
import {Footer} from '../component/footer.jsx';
import {UserNavbar} from '../component/userPage/userNavbar.jsx';
import UserMenu from '../component/userPage/userMenu.jsx';


//create your first component
export class UserPage extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <UserNavbar />
                <UserMenu />
                <Footer />
            </React.Fragment>
        );
    }
}