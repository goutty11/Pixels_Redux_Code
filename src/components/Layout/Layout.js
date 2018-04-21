import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ViewPostsByUser from '../posts/ViewPostsByUser/ViewPostsByUser';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Layout/Header/Header';

import './Layout.css';

const Layout = (props) => (
    <BrowserRouter>
        <div>
            <Header />
            <div className="main content">
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/userProfile" component={UserProfile}/>
                    <Route path="/postsByUser" component={ViewPostsByUser} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default Layout;


