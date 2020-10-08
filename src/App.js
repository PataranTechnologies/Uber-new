import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddNewMerchant from "./Pages/AddNewMerchant";
import forgotPassword from "./Pages/forgotPassword";
import enterOtp from "./Pages/enterOtp";
import changePassword from "./Pages/changePassword";
import ResetPasswordFragment from "./Fragments/ResetPasswordFragment";
import LogoutFragment from "./Fragments/LogoutFragment";
import HomeFragment from "./Fragments/HomeFragment";
import ManageMerchantFragment from "./Fragments/ManageMerchantFragment";
import AllMerchantsFragment from "./Fragments/AllMerchantsFragment";
import AllMembersFragment from "./Fragments/AllMembersFragment";
import ViewMerchantFragment from "./Fragments/ViewMerchantFragment";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter forceRefresh={true}>
      <Switch>
      <Route path="/MerchantSignup" >
        <AddNewMerchant />
        </Route>

        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Login" component={Login} />
        <Route path="/Dashboard" >
        <Dashboard fragment='HOME_FRAGMENT' />
        </Route>
        <Route path="/AddNewMerchant"  >
          <Dashboard fragment='ADD_MERCHANT' />
        </Route>
        <Route path="/forgotPassword"  >
        <Dashboard fragment='' />
        </Route>
        <Route path="/enterOtp" component={enterOtp} />
        <Route path="/changePassword"  >
        <Dashboard fragment='RESET_PASSWORD' />
        </Route>
        <Route path="/ResetPassword"  >
        <Dashboard fragment='RESET_PASSWORD' />
        </Route>
        <Route path="/Logout" component={LogoutFragment} />
        <Route path="/Home"  >
        <Dashboard fragment='HOME_FRAGMENT' />
        </Route>
        <Route path="/ManageMerchantFragment"  >
        <Dashboard fragment='' />
        </Route>
        <Route path="/AllMerchantsFragment"  >
        <Dashboard fragment='ALL_MERCHANTS' />
        </Route>
        <Route path="/AllMembersFragment"  >
        <Dashboard fragment='ALL_MEMBERS' />
        </Route>
        <Route path="/ViewMerchantFragment/:item_id" >
        <Dashboard fragment='' />
        </Route>
        <Route path="*" render={() => "404 error page not found"} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
