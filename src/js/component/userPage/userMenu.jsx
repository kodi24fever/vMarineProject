import React, { Component } from 'react';
import Form from '../../component/userPage/form.jsx';

class UserMenu extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active btn-lg mt-3" id="v-pills-workprogress-tab" data-toggle="pill" href="#v-pills-workprogress" role="tab" aria-controls="v-pills-workprogress" aria-selected="true">Work Progress</a>
                    <a className="nav-link btn-lg" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                    <a className="nav-link btn-lg" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false">Order</a>
                    <a className="nav-link btn-lg" id="v-pills-payment-tab" data-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment</a>
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-workprogress" role="tabpanel" aria-labelledby="v-pills-workprogress-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab"><Form /></div>
                    <div className="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">...</div>
                </div>
            </div>
        </div>
    );
  }
}

export default UserMenu;
