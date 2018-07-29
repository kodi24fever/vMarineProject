 import React from 'react';
 
export default class SignUp extends React.Component{
 render() {
    return (
        <div className="mt-5">
            <div className="container mx-auto">
                <h2 className="text-center">Sign Up</h2>
                <form>
                    <div className="form-group">
                        <input type="" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <input type="" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="address" className="form-control" placeholder="Address"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>  
    );
  }
}

